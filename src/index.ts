/**
 * Converts a country code (ISO 3166-1) to its emoji flag representation
 * @param countryCode - Two-letter country code (e.g., "US", "GB", "MA")
 * @returns The emoji flag representation of the country code
 * @example
 * ```ts
 * countryFlags("MA") // returns "🇲🇦"
 * countryFlags("US") // returns "🇺🇸"
 * countryFlags("GB") // returns "🇬🇧"
 * ```
 */
export function countryFlags(countryCode: string): string {
  if (typeof countryCode !== "string") {
    throw new TypeError("Country code must be a string");
  }

  if (countryCode.length !== 2) {
    throw new Error("Country code must be exactly 2 characters long");
  }

  return Array.from(countryCode.toUpperCase(), (letter) =>
    String.fromCodePoint((letter.codePointAt(0)! % 32) + 0x1f1e5)
  ).join("");
}
