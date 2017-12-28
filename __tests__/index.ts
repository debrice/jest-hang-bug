import foo from "../index";

jest.unmock("../index");

it("will hang", () => foo("test"))
