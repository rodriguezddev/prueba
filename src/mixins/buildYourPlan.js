import PlanService from "../services/plan";
import EventBus from "../events";

export const buildYourPlan = {
  data() {
    return {
      promotion: {},
      routes: [],
      plans: [],
      activeCategory: 1,
      activePlans: [],
      plansAdded: 0,
      categories: [
        {
          id: 1,
          name: "Atención Médica",
          numberPlans: 0,
          plans: []
        },
        {
          id: 2,
          name: "Seguros de Accidentes",
          numberPlans: 0,
          plans: []
        },
        {
          id: 3,
          name: "Indemnizaciones",
          numberPlans: 0,
          plans: []
        },
        {
          id: 4,
          name: "Prestaciones",
          numberPlans: 0,
          plans: []
        },
        {
          id: 5,
          name: "Seguros de vida",
          numberPlans: 0,
          plans: []
        }
      ],
      trackingService: ""
    };
  },

  async mounted() {
    const [error, data] = await PlanService.getPackagesFromApi();
    if (error) return 
    this.plans = data;

    [
      this.categories[0].plans,
      this.categories[1].plans,
      this.categories[2].plans,
      this.categories[3].plans,
      this.categories[4].plans
    ] = PlanService.formatPlans(this.plans);
    this.activePlans = this.categories[0].plans;
    this.getNumberOfPlansAdded();
    EventBus.$on("addPlan", () => this.getNumberOfPlansAdded());
    EventBus.$on("removePlan", () => this.getNumberOfPlansAdded());
    EventBus.$on("removeActivePackage", () => {
      this.plansAdded = 0;
      this.categories.forEach(category => {
        category.numberPlans = 0;
      });
    });

    new window.Swiper("#swiper-contact", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      pagination: {
        el: "#pagination-contact",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 80
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev"
      }
    });
  },

  methods: {
    setActivePlans(type, index) {
      this.activePlans = [];
      setTimeout(() => {
        this.activeCategory = type;
        this.activePlans = this.categories[index].plans;
      }, 400);
    },

    getNumberOfPlansAdded() {
      this.plansAdded = 0;
      this.categories.forEach(category => {
        category.numberPlans = PlanService.getNumberOfPlansAddedFromCategory(
          category.id
        );
        this.plansAdded = this.plansAdded + category.numberPlans;
      });
    }
  }
};
