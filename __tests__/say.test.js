// truthy false pattern
const say = require("../say");


// u CAN USE .skip  or .only


test("Say Jest Message", () => {
    expect(say()).toBe("Hello Jest");
});