function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};