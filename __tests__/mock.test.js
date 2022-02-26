const mocker = require("../mock");

// normal test
// test("normal testing", ()=> {
// expect(mocker("omar")).toBe("hello omar");
// });

//test with mock function
test("Mock function", ()=> {

    const mocker = jest.fn((name)=>`hello ${name}`);

    expect(mocker("omar")).toBe("hello omar");
    expect(mocker("Ahmed")).toBe("hello Ahmed");
    // expect(mocker("Ahmed")).toBe("hello sami");  error
    expect(mocker("fadi")).toBe("hello fadi");
    expect(mocker).toHaveBeenCalled();// sta3mlet ? minimum 1 
    expect(mocker).toHaveBeenCalledTimes(3);// kam marra stad3ayna
    expect(mocker).toHaveBeenCalledWith("omar");// sta3melna omar ?
    expect(mocker).toHaveBeenLastCalledWith("fadi");// e5er esm sta3malne





    });