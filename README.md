# Country Flags Converter

Convert ISO 3166-1 country codes to flag emojis. Simple and lightweight.

## Installation

```bash
npm install @karroch/country-flags-emoji
```

## Usage

```typescript
import { countryFlags } from "@karroch/country-flags-emoji";

// Convert country codes to flags
console.log(countryFlags("US")); // 🇺🇸
console.log(countryFlags("MA")); // 🇲🇦
console.log(countryFlags("GB")); // 🇬🇧
console.log(countryFlags("ES")); // 🇪🇸
```

## API

### `countryFlags(countryCode: string): string`

Converts a two-letter country code to its corresponding emoji flag.

- `countryCode`: A two-letter ISO 3166-1 country code (case insensitive)
- Returns: The emoji flag representation
- Throws: Error if input is invalid

## Features

- TypeScript support
- Zero dependencies
- Lightweight
- Case insensitive
- Input validation

## License

MIT © [Abdellah Azeroual]
