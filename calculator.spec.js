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
    
    it("should initialize the calculator", function() {
        const calculator= new Calculator();

        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });

    it("can be instantiated", function() {
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        expect(calculator.constructor.name).toContain("Calc");
    });

    it("instantiates unique object", function() {
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).not.toBe(calculator2);
    });

    it("has common operations", function() {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined(); // or .not.toBeUndefined();
        expect(calculator.subtract).toBeDefined(); // or .not.toBeUndefined();
        expect(calculator.multiply).toBeDefined(); // or .not.toBeUndefined();
        expect(calculator.divide).toBeDefined(); // or .not.toBeUndefined();

    });

    it("can overwrite total", function() {
        const calculator = new Calculator();

        calculator.total = null;

        expect(calculator.total).toBeNull();
    });

    it("does not handle NaN", function() {
        const calculator = new Calculator();
         
        calculator.total = 20;
        calculator.multiply("a");
        expect(calculator.total).toBeNaN();
    });

    it("handles divide by zero", function() {
        const calculator = new Calculator();

        expect(function() { calculator.divide(0) }).toThrow();
        expect(function() { calculator.divide(0) }).toThrowError(Error, "Cannot divide by zero");

    });

    it("returns total", function() {
        const calculator = new Calculator();
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
    })

});