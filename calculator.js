function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(num) {
    return this.total += num;
}

Calculator.prototype.subtract = function(num) {
    return this.total -= num;
}

Calculator.prototype.multiply = function(num) {
    return this.total *= num;
}

Calculator.prototype.divide = function(num) {
    if (num === 0) {
        throw new Error("Cannot divide by zero");
    }
    return this.total /= num;
}

Object.defineProperty(Calculator.prototype, "version", {
    get: function() {
        return "0.1";
    },
    enumerable: true,
    configurable: true
})
