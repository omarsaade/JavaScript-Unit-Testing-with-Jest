
const allData = require("../all");


/*
Matchers method: yaane hene methods ma3mulin bi sahlo 3lek 3amalyet le testing  bidun ma tektob native code
.toHaveLength
.not.toHaveLength
.toContain
.not.toContain
toHaveProperty
toBeFalsy
toBeLessThan
toBeUndefined
toHaveProperty

*/

test("Check if Array Contains 6 Elements 1st Method", () => {
    expect(allData.length).toBe(6);
});


test("check if Array Contains 6 ELements 2nd Method", () => {
    expect(allData).toHaveLength(6);
});

test("check if Array Contains 6 ELements 2nd Method", () => {
    expect("omaros").toHaveLength(6);
});

test("check if Array Contains 6 ELements 2nd Method", () => {
    expect("omaros").not.toHaveLength(7);
});

test("check if Array Contains nomber 6 ", () => {
    expect(allData).toContain(6);
});

test("check if Array not Contains nomber 6 ", () => {
    expect(allData).not.toContain(7);
});

test("check if Array not Contains nomber Zero", () => {
    for (let i = 0; i < allData.length; i++) {
        expect(allData[i]).not.toBe(0);
    }
});

test("check if Array not Contains only Number 1st meth", () => {
    for (let i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).toBe(false);
    }
});

test("check if Array not Contains only Number 2st meth", () => {
    for (let i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).toBeFalsy();
    }
});

test("check if Array not Contains only Number 3rd meth", () => {
    for (let i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).not.toBeTruthy();
    }
});

test("check if Array Element is Larger Than 1", () => {
    expect((allData[1])).toBeGreaterThan(1);
});

test("check if Array Element is Larger Than 1 or equal", () => {
    expect((allData[1])).toBeGreaterThanOrEqual(1);
});

test("check if Array Element is Less Than 5", () => {
    expect((allData[1])).toBeLessThan(5);
});

test("check if Array Element is Less Than 5 or equal", () => {
    expect((allData[1])).toBeLessThanOrEqual(5);
});

test("check for undefined", () => {
    let a;
    expect(a).toBeUndefined();
});

test("check For Substring Inside String By RegExp", () => {
    let myString = "I Love Omar saade";
    expect(myString).toMatch(/Omar/);
});


test("check for property Age", () => {
    let myObject = {
        name: "Osama",
        age: 37,
    }
    expect(myObject).toHaveProperty("age");
})


test("check For Property Age Value IS 37", () => {
    let myObject = {
        name: "Osama",
        age: 38,
    };
    expect(myObject).toHaveProperty("age", 38)
})







////////////////////////////////////////////////////////////////////////////////////
// Create Ur Own Matcher

expect.extend({
    toBeLargerThan(received, target) {
        //receied btenkatab bel expect w targetttt bel meth li ne7na ansha2neha
        const pass = received > target;
        if (pass) {
            return {
                message: () => `Expected ${received} To Be Larger Than ${target}`,
                pass: true,
            };
        } else {
            return {
                message: () => `Error : Expected ${received} To Be Larger Than ${target}`,
                pass: false,
            };
        }
    },
});

//testing
test("check if number is larger than the other number", () => {
    expect(10).toBeLargerThan(8);
})

/////////////////////////////////////////////////////////


//create ur Own matchers part2
expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if (pass) {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: true,
            };
        } else {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: false,
            };
        }
    },
})


//use it
test("check if year is between year Range", () => {
    expect(1982).toBeBetween(1981, 2020);
})

//////////////////////////////////////////////////////////////

//expect.anything() => Anything But Undefined + Null

test("Expect Anything", () => {
    let x = "A"
        ;
    expect("Osama").toEqual(expect.anything());
    expect(1).toEqual(expect.anything());
    expect([1, 2, 3, 4]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());
})

/////////////////
//expect.any(Constructor)

test("Expect Any Constructor", () => {

    expect("Osama").toEqual(expect.any(String));

})

//expect.arrayContaining(array)

test("Expect Array To Be Found In The Main Array", () => {
    const myArray = [1, 2, 3, 4, 5, 6]
    expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));

})