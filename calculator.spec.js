describe("calculator.js", function() {
    it("should add the number to the total", function() {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5);
    })

    it("should should subtract the number from the total", function() {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        
        expect(calculator.total).toBe(25);
    })

    it("should multiply total by the number", function() {
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
        
        expect(calculator.total).toBe(200);
    })

    it("should divide the total by the number", function() {
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);
        
        expect(calculator.total).toBe(100);
    }) 
    //TODO: specs
});