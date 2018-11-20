describe("calculator.js", function() {
    describe("Calculator" , function() {
        let calculator;
        let calculator2;

        beforeEach(function() {
            //Anything inside this block executes before 
            //each spec (it) inside this describe.
            calculator = new Calculator();
            calculator2 = new Calculator();
        });

        afterEach(function() {
            //Anything in this block executes after each
            //spec (it) inside this describe.

        });
                
        it("should initialize the calculator", function() {    
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy();
        });
    
        it("can be instantiated", function() {
            jasmine.addMatchers(customMatchers);
    
            expect(calculator).toBeCalculator(); //custom
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);
            expect(calculator.constructor.name).toContain("Calc");
        });
    
        it("instantiates unique object", function() {
    
            expect(calculator).not.toBe(calculator2);
        });
    
        it("has common operations", function() {    
            expect(calculator.add).toBeDefined(); // or .not.toBeUndefined();
            expect(calculator.subtract).toBeDefined(); // or .not.toBeUndefined();
            expect(calculator.multiply).toBeDefined(); // or .not.toBeUndefined();
            expect(calculator.divide).toBeDefined(); // or .not.toBeUndefined();
    
        });
    
        it("can overwrite total", function() {
            calculator.total = null;
    
            expect(calculator.total).toBeNull();
        });

        describe("add()", function() {
            it("should add the number to the total", function() {
                calculator.add(5);
        
                expect(calculator.total).toBe(5);
            })
                
            it("returns total", function() {;
                calculator.total = 50;
        
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
                expect(calculator.total).toBeNumber();
                expect(calculator.total).toEqual(jasmine.anything());
            })
        });

        describe("subtract()", function() {
            it("should should subtract the number from the total", function() {
                calculator.total = 30;
                calculator.subtract(5);
                
                expect(calculator.total).toBe(25);
            })
        });

        describe("multiply()", function() {                    
            it("should multiply total by the number", function() {
                calculator.total = 100;
                calculator.multiply(2);
                
                expect(calculator.total).toBe(200);
            })

            it("does not handle NaN", function() {                 
                calculator.total = 20;
                calculator.multiply("a");
                expect(calculator.total).toBeNaN();
            });
        });

        describe("divide()", function() {
            it("should divide the total by the number", function() {
                calculator.total = 200;
                calculator.divide(2);
                
                expect(calculator.total).toBe(100);
            }) 

            it("handles divide by zero", function() {        
                expect(function() { calculator.divide(0) }).toThrow();
                expect(function() { calculator.divide(0) }).toThrowError(Error, "Cannot divide by zero");
        
            }); 
        });      

        describe("get version", function() {
            it("fetches version from external source", function(done) {
                spyOn(window, "fetch").and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));

                calculator.version.then(function(version) {
                    expect(version).toBe("0.1");
                
                    done();
                });
            });
        });
    });
    
});