// truthy false pattern
//import
const theSum = require("../sum");


//test(name,fn, timeout);
//it(name, fn, timeout);
// it hye alias la test
// describe(name , fn)
//it should do something expect something
// A feature is a unique quality or characteristic that something has.

// u CAN USE .skip  or   .only


// describe("if 0 or if 2 numbers", () => {
//     test.skip("Return 0 if no number", () => {
//         expect(theSum()).toBe(0);
//     });



describe("check the sum of numbers", () => {

    describe("if 0 or if 2 numbers", () => {
        test("Return 0 if no number", () => {
            expect(theSum()).toBe(0);
        });

        test("Return the number", () => {
            expect(theSum(1, 2)).toBe(3);
        });
    })


    describe("2 numbers or 3 numbers", () => {
        test("Return the sum of number 1 + 2", () => {
            expect(theSum(10, 20)).toBe(30);
        });


        test("Return the sum of number 1 + 2 + 3", () => {
            expect(theSum(10, 20, 30, 40)).toBe(100);
        });
    })
});





console.log([].reduce((a, b) => a + b, 2));
