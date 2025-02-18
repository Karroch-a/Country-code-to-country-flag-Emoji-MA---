import { countryFlags } from "./index";

describe("countryFlags", () => {
  it("should convert country codes to flag emojis", () => {
    expect(countryFlags("US")).toBe("🇺🇸");
    expect(countryFlags("GB")).toBe("🇬🇧");
    expect(countryFlags("MA")).toBe("🇲🇦");
  });

  it("should handle lowercase input", () => {
    expect(countryFlags("us")).toBe("🇺🇸");
    expect(countryFlags("gb")).toBe("🇬🇧");
  });

  it("should throw error for invalid input", () => {
    expect(() => countryFlags("USA")).toThrow(
      "Country code must be exactly 2 characters long"
    );
    // @ts-ignore - Testing invalid type
    expect(() => countryFlags(123)).toThrow("Country code must be a string");
  });
});
