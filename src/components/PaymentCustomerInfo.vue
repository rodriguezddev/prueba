<template>
  <div
    class="customerinfo mt-5 px-3 pl-md-5 text-left"
    data-test="customer-info"
  >
    <div class="row justify-content-between align-items-center">
      <div class="col-10 pl-0">
        <h3 class="font-weight-bold">
          Datos personales del comprador
        </h3>
      </div>
      <div class="col-2">
        <router-link
          data-test="edit-customer-info-button"
          to="/editar-mis-datos"
        >
          <img
            alt="edit"
            class="mb-2 cursor-pointer"
            src="../assets/img/Edit.png"
          >
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pl-0">
        <small>Nombre:</small>
        <p
          class="font-weight-bold"
          data-test="fullname"
        >
          {{ customer.name }} {{ customer.paternalLastname }} {{ customer.maternalLastname }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-4 pl-0">
        <small>Teléfono:</small>
        <p
          class="font-weight-bold"
          data-test="cellphone"
        >
          {{ customer.cellphone }}
        </p>
      </div>
      <div class="col-8 pl-0">
        <small>Email:</small>
        <p
          class="font-weight-bold"
          data-test="email"
        >
          {{ customer.email }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 pl-0">
        <small>Dirección:</small>
        <p
          class="font-weight-bold"
          data-test="address"
        >
          {{ customer.address.street }} {{ customer.address.ext_number }} -
          {{ customer.address.int_number }}
          {{ customer.address.colony }} <br>
          {{ customer.address.cp }}, {{ customer.address.town }}, {{ customer.address.state }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "./../services/customer";

export default {
  name: "PaymentCustomerInfo",

  data() {
    return {
      routes: {},
      customer: {
        name: "",
        phone: "",
        email: "",
        address: ""
      }
    };
  },
  mounted() {
    this.customer = CustomerService.getCustomer();
  }
};
</script>
<style scoped>
.customerinfo {
  color: #123291;
}

input,
select {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

select:focus,
input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
