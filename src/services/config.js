export default {
  API_URL: process.env.VUE_APP_API_URL,
  API_SEPOMEX: process.env.VUE_APP_API_SEPOMEX,
  X_API_KEY: process.env.VUE_APP_X_API_KEY,
  OPEN_PAY_ID: process.env.VUE_APP_OPENPAY_ID,
  OPEN_PAY_PUBLIC_KEY: process.env.VUE_APP_OPENPAY_PUBLIC_KEY,
  OPEN_PAY_PROD: false,
  SENTRY_DSN: process.env.VUE_APP_SENTRY_DSN,
  getMsiConfig() {
    return [
      {
        months: 3,
        minimum_amount: 300
      },
      {
        months: 6,
        minimum_amount: 600
      },
      {
        months: 9,
        minimum_amount: 900
      },
      {
        months: 12,
        minimum_amount: 1200
      },
    ];
  },
  getPhoneAssistanceBambaFreemiumPlan() {
    return {
      name: "phone_assistance_bamba_adviser",
      id: 58,
      sku: "AS10K0521",
      address: {
        colony: "Actipan",
        external_number: "1428",
        internal_number: "",
        municipality: "Benito Juárez",
        state: "Ciudad de México",
        state_id: 1,
        street: "Av. Insurgentes Sur",
        town: "Ciudad de México",
        zip_code: "03230"
      },
      coupon: "BAMBA20"
    }
  }
};
