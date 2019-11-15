const { validateUser } = require("./users-helpers.js");


describe("users helpers", () => {
  describe("validateUser()", () => {
    it("should fail when missing username and password", () => {
      
      const invalidUser = {};
      const expected = false;

      const actual = validateUser(invalidUser);

      expect(actual.isSuccessful).toBe(expected); 
      expect(actual.errors).toHaveLength(2);
    });

    test("should fail if missing password", () => {
      const result = validateUser({ username: "somebody" });

      expect(result.isSuccessful).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toMatch(/include a password/i);
    });

    it("should succeed if called with a valid user", () => {
      const result = validateUser({
        username: "somebody",
        password: "valid password"
      });

      expect(result.isSuccessful).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it.todo("should fail if username is an object");
    it.todo("should fail if username is an array");
    it.todo("should fail if username is an NaN");
    it.todo("should fail if username is an null");
  });
});
