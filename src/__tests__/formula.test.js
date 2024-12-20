import serie from "../Formula/index.js"

describe("Should solve the given serie(10 n's)", () => {
  it("should get 0 with n=-10", () => {
    expect(serie(-10)).toBe(0);
  });
  it("should get 0 with n=0", () => {
    expect(serie(0)).toBe(0);
  });
  it("should get 0 with n=1", () => {
    expect(serie(1)).toBe(0);
  });
  it("should get 2 with n=2", () => {
    expect(serie(2)).toBe(0);
  });
  it("should get 3 with n=3", () => {
    expect(serie(3)).toBe(3);
  });
  it("should get 3 with n=4", () => {
    expect(serie(4)).toBe(3);
  });
  it("should get 3 with n=5", () => {
    expect(serie(5)).toBe(3);
  });
  it("should get 2 with n=6", () => {
    expect(serie(6)).toBe(2);
  });
  it("should get 1 with n=7", () => {
    expect(serie(7)).toBe(1);
  });
  it("should get 1 with n=8", () => {
    expect(serie(8)).toBe(1);
  });
});