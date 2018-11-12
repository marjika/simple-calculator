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
        return fetch("https://gist.githubusercontent.com/marjika/b59941bce43f0d58af3fb5a632755f77/raw/aec22ec210245e8b9f180e8ee9105f0eeecbbdd5/version")
            .then(function(result) {
                return result.json();
            })
            .then(function(json) {
                return json.version;
            })
    },
    enumerable: true,
    configurable: true
})
