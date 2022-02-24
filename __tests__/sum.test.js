// truthy false pattern
//import
const theSum = require("../sum");


//test(name,fn, timeout);
//it(name, fn, timeout);
//it hye alias la test
//it should do something expect something

test("Return 0 if no number", () => {
    expect(theSum()).toBe(0);
});

test("Return the number", () => {
    expect(theSum(1)).toBe(1);
});

test("Return the sum of number 1 + 2", () => {
    expect(theSum(10, 20)).toBe(30);
});

test("Return the sum of number 1 + 2 + 3", () => {
    expect(theSum(10, 20, 30)).toBe(60);
});
