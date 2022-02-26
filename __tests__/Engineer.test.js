const Engineer = require("../lib/Engineer")

test("creates object engineer", () => {
    const eng = new Engineer("Bobby", 94236, "apple@apple.com", "applehub")
    expect(eng.name).toBe("Bobby")
})