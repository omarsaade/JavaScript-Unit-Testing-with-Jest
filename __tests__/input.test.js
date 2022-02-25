// read JSDoc  hye shi 5assa bel function //metel comments 3a shakel helo
const filterName = require("../input");

test("if function return name", () => {
    expect(filterName("omar")).toBe("omar");
});

test("if function return name", () => {
    expect(filterName()).toBe("unknown");
});

test("if function return name", () => {
    expect(filterName(" osama ")).toBe("osama");
});

test("check if Name Length > 10 characters", () => {
    expect(filterName("osama_Mohamed_saade")).toBe("osama_Mohamed");
});

test("check if name starts with underscore", () => {
    expect(filterName("_osama")).toBe("osama");
});