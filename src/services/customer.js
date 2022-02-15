import moment from "moment";

const Lockr = require("lockr");

export default {
  saveCustomerData(customer) {
    Lockr.set("customer", customer);
  },

  getCustomer() {
    return Lockr.get("customer");
  },

  getFormatedCustomer() {
    const customer = Lockr.get("customer");

    return {
      name: customer.name,
      lastname: customer.paternalLastname,
      second_lastname: customer.maternalLastname,
      cellphone: customer.cellphone,
      email: customer.email,
      birthdate: customer.birthdate,
      address: {
        street: customer.address.street,
        external_number: customer.address.ext_number,
        internal_number: customer.address.int_number,
        colony: customer.address.colony,
        municipality: customer.address.town,
        town: customer.address.state,
        zip_code: customer.address.cp,
        state: customer.address.state,
        state_id: 1
      }
    };
  },

  setCustomerFromAuthUser(user) {
    if (user.is_promoter) {
      return false;
    }

    const customer = {
      name: user.customer.name,
      maternalLastname: user.customer.second_lastname,
      paternalLastname: user.customer.lastname,
      email: user.customer.email,
      cellphone: user.customer.cellphone,
      birthdate: user.customer.birthdate,
      address: {
        street: user.customer.addresses[0].street,
        state: user.customer.addresses[0].state,
        ext_number: user.customer.addresses[0].external_number,
        int_number: user.customer.addresses[0].internal_number,
        cp: user.customer.addresses[0].zip_code,
        colony: user.customer.addresses[0].colony,
        town: user.customer.addresses[0].municipality
      }
    };

    Lockr.set("customer", customer);

    return customer;
  },

  saveCustomerFromOrder(order) {
    const customer = order.customer;
    const address = customer.addresses[0];
    const birthDate = new Date(customer.birthdate);
    Lockr.set("customer", {
      name: customer.name,
      maternalLastname: customer.second_lastname,
      paternalLastname: customer.lastname,
      email: customer.email,
      cellphone: customer.cellphone,
      birthdate: birthDate,
      address: {
        street: address.street,
        state: address.state,
        ext_number: address.external_number,
        int_number: address.int_number,
        cp: address.zip_code,
        colony: address.colony,
        town: address.town
      }
    });
  }
};
