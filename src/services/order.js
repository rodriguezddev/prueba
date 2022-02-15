const Lockr = require("lockr");

export default {
  saveOrderId(order) {
    Lockr.set("orderId", order.id);
  },
  saveOrderItems(order) {
    Lockr.set("orderItems", order.items);
  },
  getOrderItems() {
    return Lockr.get("orderItems");
  },
  removeOrderItems() {
    Lockr.rm("orderItems");
  }
};
