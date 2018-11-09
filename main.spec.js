describe("main.js", function() {
    describe("calculate()", function() {
        it("validates expression when first number is invalid", function() {
            spyOn(window, "updateResult").and.stub();

            calculate("a+3");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it("validates expression when second number is invalid", function() {
            spyOn(window, "updateResult"); //.and.stub() is the default, can be omitted

            calculate("3+a");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it("validates expression when operation is invalid", function() {
            spyOn(window, "updateResult");

            calculate("4_3");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it("calls add", function() {
            const spy = spyOn(Calculator.prototype, "add");

            calculate("3+4");

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        });
        it("calls subtract", function() {
            const spy = spyOn(Calculator.prototype, "subtract");

            calculate("11-8");

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(11);
            expect(spy).toHaveBeenCalledWith(8);
        });
        it("calls multiply", function() {
            const spy = spyOn(Calculator.prototype, "multiply");

            calculate("4*4");

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(4);
        });
        it("calls divide", function() {
            const spy = spyOn(Calculator.prototype, "divide");

            calculate("70/35");

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(70);
            expect(spy).toHaveBeenCalledWith(35);
        });
        xit("validates operation");
        xit("calls updateResult");
    });
    describe("updateResult()", function() {
        beforeAll(function() {
            const element = document.createElement("div");
            element.setAttribute("id", "result");

            document.body.appendChild(element);
            this.element = element;
        })
        afterAll(function() {
            document.body.removeChild(this.element);
        });
        it("adds result to DOM element", function() {

            updateResult("5");
            expect(this.element.innerText).toBe("5");
        });
    });
});