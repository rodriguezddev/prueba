import axios from "./axios";
import to from "await-to-js";
import AppService from "./app";
import PlanService from "./plan";
import Config from "./config";

const Lockr = require("lockr");
const _ = require("lodash");

export default {
  async getPackagesFromApi() {
    const [error, { data }] = await to(
      axios.get(`${Config.API_URL}/api/modular-products`)
    );
    if (error) {
      return [error];
    }
    return [null, data.filter(el => el.meta && el.meta.planType === 2)];
  },

  async getProductIdFromSku(sku) {
    const [error, { data }] = await to(axios.get(`${Config.API_URL}/api/product/sku/${sku}`));
    if (error) {
      return [error];
    }
    return [null, data];
  },

  async getProductsFromApi() {
    const [error, data] = await to(
      axios.get(`${Config.API_URL}/store/products`)
    );
    if (error) {
      return [error];
    }
    let plansNuestrosPlanes = data.data

    plansNuestrosPlanes = plansNuestrosPlanes.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (b.price > a.price) {
        return -1;
      }
      return 0;
    });
    return [null, plansNuestrosPlanes];
  },

  async getAddons() {
    const [error, { data }] = await to(
      axios.get(`${Config.API_URL}/api/modular-products`)
    );
    if (error) {
      return [error];
    }
    return data.filter(el => el.is_addon === false);
  },

  getSavedAddons(pack) {
    const addons = [];
    if (pack.plans[0].addons.length) {
      const addonsFromPackage = pack.plans[0].addons;
      addonsFromPackage.forEach(addon => {
        let addonCount = 0;
        pack.beneficiaries.forEach(beneficiary => {
          const beneficiaryAddosAdded = beneficiary.addons.filter(
            addonBeneficiary =>
              addonBeneficiary.selected && addonBeneficiary.sku === addon.sku
          );
          addonCount += beneficiaryAddosAdded.length;
        });

        addons.push({
          ...addon,
          count: addonCount
        });
      });
    }

    return addons;
  },

  checkIfPackageNameIsAlreadyTaken(name) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    const packageWithName = packages.find(el => el.name === name);
    return !!packageWithName;
  },

  getPackages() {
    return Lockr.get("packages", []);
  },

  removeActivePackage() {
    Lockr.rm("plans");
    Lockr.rm("price");
    Lockr.rm("name");
  },

  formatPlans(plans) {
    plans = plans.map(el => ({
      id: el.id,
      sku: el.sku,
      title: el.name,
      image: el.meta.image,
      cost: el.price,
      sale_cost: el.sale_price,
      description: el.meta.description,
      description_notes: el.meta.description_notes,
      features: el.meta.features,
      features_notes: el.meta.features_notes,
      final_notes: el.meta.final_notes,
      has_promotion: el.has_promotion,
      notIncluded: el.meta.notIncluded,
      beneficts: el.meta.beneficts,
      coverages: el.meta.coverages,
      category_type: el.meta.category_type,
      category: el.meta.category,
      score: el.resilience_score,
      addons: el.addons,
      meta: el.meta,
    }));

    const plansCategoryOne = plans.filter(
      el => el.category_type === "1" || el.category_type === 1
    );
    const plansCategoryTwo = plans.filter(
      el => el.category_type === "2" || el.category_type === 2
    );
    const plansCategoryThree = plans.filter(
      el => el.category_type === "3" || el.category_type === 3
    );
    const plansCategoryFour = plans.filter(
      el => el.category_type === "4" || el.category_type === 4
    );
    const plansCategoryFive = plans.filter(
        el => el.category_type === "5" || el.category_type === 5
    );

    return [
      plansCategoryOne,
      plansCategoryTwo,
      plansCategoryThree,
      plansCategoryFour,
      plansCategoryFive
    ];
  },

  getNumberOfPlansAddedFromCategory(category) {
    const plans = Lockr.get("plans") ? Lockr.get("plans") : [];
    const plansFromCategory = plans.filter(el => el.category_type === category)
      .length;
    return plansFromCategory;
  },

  setPlans(plans, price, originalPrice) {
    Lockr.set("plans", plans);
    Lockr.set("price", price);
    Lockr.set("originalPrice", originalPrice);
  },

  setPackageName(name) {
    Lockr.set("name", name);
  },

  getDataStored() {
    const plans = Lockr.get("plans") ? Lockr.get("plans") : [];
    const price = Lockr.get("price") ? Lockr.get("price") : 0;
    const originalPrice = Lockr.get("originalPrice")
      ? Lockr.get("originalPrice")
      : 0;
    const name = Lockr.get("name") ? Lockr.get("name") : "";
    let score = plans.reduce((a, b) => a + b.score, 0);
    score = score > 100 ? 100 : score;
    return [plans, price, name, [score], originalPrice];
  },

  checkIfPlanOfCategoryAlreadyAdded(category) {
    const plans = Lockr.get("plans") ? Lockr.get("plans") : [];
    return !!plans.find(el => el.category === category);
  },

  checkPlanIsAdded(id) {
    const plans = Lockr.get("plans") ? Lockr.get("plans") : [];
    const planFound = plans.find(el => el.id === id);

    return !!planFound;
  },

  checkIfWeCanAddThisPlan(plan) {
    const plans = Lockr.get("plans") ? Lockr.get("plans") : [];
    const planFromCategoryAlreadyAdded = plans.find(
      el => el.category === plan.category
    );
    return !!planFromCategoryAlreadyAdded;
  },

  getOurPlansAddedToCart() {
    return Lockr.get("ourPlans") ? Lockr.get("ourPlans") : [];
  },

  removeProductFromOurPlans(plan) {
    const ourPlans = Lockr.get("ourPlans") ? Lockr.get("ourPlans") : [];
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    const index = ourPlans.findIndex(el => el.plans[0].id === plan.id);
    ourPlans.splice(index, 1);
    packages.splice(index, 1);
    Lockr.set("ourPlans", ourPlans);
    Lockr.set("packages", packages);
  },

  setAddons(indexPackage, indexBeneficiary, addons) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    let beneficiary = packages[indexPackage].beneficiaries[indexBeneficiary];
    beneficiary = { ...beneficiary, addons };
    packages[indexPackage].beneficiaries[indexBeneficiary] = beneficiary;
    Lockr.set("packages", packages);
  },

  saveAddons(indexPackage, indexBeneficiary, addons) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    let beneficiary = packages[indexPackage].beneficiaries[indexBeneficiary];
    beneficiary = { ...beneficiary, addons };
    packages[indexPackage].beneficiaries[indexBeneficiary] = beneficiary;
    Lockr.set("packages", packages);
  },

  getNumberOfItemsInShoppingCart() {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    return packages.length;
  },

  checkIfNameIsAlreadyTaken(name) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    const nameAlreadyTaken = packages.find(pack => pack.name === name);

    return !!nameAlreadyTaken;
  },

  addProductFromOurPlans(plan) {
    const ourPlans = Lockr.get("ourPlans") ? Lockr.get("ourPlans") : [];
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    const productToSave = {
      name: plan.name,
      plans: [plan],
      price: plan.has_promotion ? plan.sale_price : plan.price,
      originalPrice: plan.price,
      ourPlanType: true,
      beneficiaries: [
        {
          name: "",
          LastName: "",
          secondLastName: "",
          cellphone: "",
          email: "",
          birthdate:"",
          gender: "",
        }
      ]
    };

    ourPlans.push(productToSave);
    packages.push(productToSave);
    Lockr.set("ourPlans", ourPlans);
    Lockr.set("packages", packages);
  },

  addPackage({ plans, price, planName, originalPrice }) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    const packagesWihtOutName = packages.filter(pack => pack.withOutName);
    const indexMiPlan = packagesWihtOutName
      ? packagesWihtOutName.length + 1
      : "";
    let packageAlreadyAdded = false;
    const packageToSave = {
      name: planName || `Plan personalizado ${indexMiPlan}`,
      withOutName: !planName,
      ourPlanType: false,
      plans,
      price,
      originalPrice,
      beneficiaries: [
        {
          name: "",
          LastName: "",
          secondLastName: "",
          cellphone: "",
          email: "",
          birthdate:"",
          gender: "",
        }
      ]
    };

    // Check if package is already added
    packages.forEach(pack => {
      if (_.isEqual(pack, packageToSave)) {
        packageAlreadyAdded = true;
      }
    });
    // If not... add the package
    if (packageAlreadyAdded === false) {
      packages.push(packageToSave);
      Lockr.set("packages", packages);
    }
  },

  deletePackage(indexPackage) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    packages.splice(indexPackage, 1);
    Lockr.set("packages", packages);
      Lockr.set("ourPlans", packages);
  },

  checkIfCellphoneIsAlreadyAdded(cellphone, indexPackage, indexBeneficiary) {
    let cellphoneAdded = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    packages.forEach((pack, indexP) => {
      pack.beneficiaries.forEach((beneficiary, indexB) => {
        if (
          beneficiary.mobile === cellphone &&
          (indexP !== indexPackage || indexB !== indexBeneficiary)
        ) {
          cellphoneAdded += 1;
        }
      });
    });

    return cellphoneAdded !== 0;
  },

  checkUserType(customer) {
    let cellphoneAdded = 0;
    let indexPackage = 0;
    let indexBeneficiary = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    packages.forEach((pack, indexP) => {
      pack.beneficiaries.forEach((beneficiary, indexB) => {
        if (beneficiary.mobile === customer.cellphone) {
          cellphoneAdded += 1;
          indexBeneficiary = indexB;
          indexPackage = indexP;
        }
      });
    });

    if (cellphoneAdded !== 0) {
      const beneficiaryWithTheSameCellphoneAsUser =
        packages[indexPackage].beneficiaries[indexBeneficiary];
      if (
        PlanService.formatCustomerDataToCompare(
          beneficiaryWithTheSameCellphoneAsUser.name.trim()
        ) === PlanService.formatCustomerDataToCompare(customer.name.trim()) &&
        PlanService.formatCustomerDataToCompare(
          beneficiaryWithTheSameCellphoneAsUser.paternalLastname.trim()
        ) ===
          PlanService.formatCustomerDataToCompare(
            customer.paternalLastname.trim()
          ) &&
        PlanService.formatCustomerDataToCompare(
          beneficiaryWithTheSameCellphoneAsUser.maternalLastname.trim()
        ) ===
          PlanService.formatCustomerDataToCompare(
            customer.maternalLastname.trim()
          ) &&
        beneficiaryWithTheSameCellphoneAsUser.birthdate_day ===
          customer.birthdate_day &&
        beneficiaryWithTheSameCellphoneAsUser.birthdate_month ===
          customer.birthdate_month &&
        beneficiaryWithTheSameCellphoneAsUser.birthdate_year ===
          customer.birthdate_year
      ) {
        // User who wants register is the beneficiary also
        return "myself";
      }
      // User is repeating the cellphone but is not beneficiary
      return "repeating_phone";
    }

    return "cellphone_not_repeated";
  },

  formatCustomerDataToCompare(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  },

  saveBeneficiariesData(indexPackage, indexBeneficiary, beneficiary) {

      const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    Lockr.set("packages", packages);
  },

  deleteBeneficiary(indexPackage, indexBeneficiary) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    packages[indexPackage].beneficiaries.splice(indexBeneficiary, 1);
    Lockr.set("packages", packages);
  },

  updatePricePackage(indexPackage, price) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    packages[indexPackage].price = price;
    Lockr.set("packages", packages);
  },

  getSubtotalPrice() {
    let subtotal = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    packages.forEach(pack => {
      pack.beneficiaries.forEach(ben => {
        // For each beneficieary sum the initial pack
        subtotal = pack.originalPrice + subtotal;
        // verify if we have custom packages (plan nomina, seguros o telefonos)
        if (ben.addons) {
          const activeAddons = ben.addons.filter(addon => addon.selected);
          activeAddons.map(addon => {
            subtotal += addon.sale_price;

          });
        }
      });
    });
    return subtotal;
  },

  getSalePrice() {
    let subtotal = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    packages.forEach(pack => {
      pack.beneficiaries.forEach(ben => {
        // For each beneficieary sum the initial pack
        subtotal = pack.price + subtotal;
        // verify if we have custom packages (plan nomina, seguros o telefonos)
        if (ben.addons) {
          const activeAddons = ben.addons.filter(addon => addon.selected);
          activeAddons.map(addon => {
            subtotal += addon.sale_price;

          });
        }
      });
    });
    return subtotal;
  },

  getDiscounts() {
    let totalPriceWithoutPromotion = 0;
    let totalPrice = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];

    packages.forEach(pack => {
      pack.beneficiaries.forEach(ben => {
        // For each beneficieary sum the initial pack
        totalPrice = pack.price + totalPrice;
        totalPriceWithoutPromotion =
          pack.originalPrice + totalPriceWithoutPromotion;
        // verify if we have custom packages (plan nomina, seguros o telefonos)
        if (ben.addons) {
          const activeAddons = ben.addons.filter(addon => addon.selected);
          activeAddons.map(addon => {
            totalPrice += addon.sale_price;
            totalPriceWithoutPromotion =
              addon.price + totalPriceWithoutPromotion;
          });
        }
      });
    });

    return totalPriceWithoutPromotion - totalPrice;
  },

  getSubtotalPricePackage(indexPackages) {
    let subtotal = 0;
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    packages[indexPackages].beneficiaries.forEach(ben => {
      // For each beneficieary sum the initial pack
      subtotal = packages[indexPackages].price + subtotal;
      // verify if we have custom packages (plan nomina, seguros o telefonos)
      if (ben.addPagoNomina) {
        subtotal = 10000 + subtotal;
      }
      if (ben.addSeguroAccidentes) {
        subtotal = 10000 + subtotal;
      }
      if (ben.addConsultasTelefonicas) {
        subtotal = 10000 + subtotal;
      }
    });
    return subtotal;
  },

  getSubtotalBeneficiary(indexPackage, indexBeneficiary) {
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    let subtotal = packages[indexPackage].price;
    const beneficiary = packages[indexPackage].beneficiaries[indexBeneficiary];
    if (beneficiary.addons) {
      const activeAddons = beneficiary.addons.filter(addon => addon.selected);
      activeAddons.map(addon => {
        subtotal += addon.sale_price;
      });
    }

    return subtotal;
  },

  getInstallments(price) {
    const msi = AppService.getMsiConfig();

    if (price >= msi[3].minimum_amount) {
      return msi[3].months;
    }
    if (price >= msi[2].minimum_amount) {
      return msi[2].months;
    }
    if (price >= msi[1].minimum_amount) {
      return msi[1].months;
    }
    if (price >= msi[0].minimum_amount) {
      return msi[0].months;
    }
    return 0;
  },

  getInstallmentOptions(price) {
    const msi = AppService.getMsiConfig();
    const options = [];
    if (price >= msi[3].minimum_amount) {
      options.push(msi[3].months);
    }
    if (price >= msi[2].minimum_amount) {
      options.push(msi[2].months);
    }
    if (price >= msi[1].minimum_amount) {
      options.push(msi[1].months);
    }
    if (price >= msi[0].minimum_amount) {
      options.push(msi[0].months);
    }
    return options.reverse();
  },

  getScorePlan(pack) {
    if (pack.ourPlanType) {
      // Is a product from "Nuestros planes", dont need to calculate the score, just return the score from the product
      return pack.plans[0].resilience_score;
    }

    let score = 0;
    pack.plans.map((plan) => {
      score += plan.score;
    });

    return score;
  }
};
