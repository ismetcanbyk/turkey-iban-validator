# 🇹🇷 Turkey IBAN Validator

[![NPM Version](https://img.shields.io/npm/v/turkey-iban-validator.svg)](https://www.npmjs.com/package/turkey-iban-validator)
[![License](https://img.shields.io/npm/l/turkey-iban-validator.svg)](./LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)

Validate Turkish IBAN numbers with ease, and optionally validate general IBAN formats from all countries.

---

## ✨ Features

- ✅ Validate Turkish IBANs (starts with `TR`)
- 🌍 Validate IBANs from all supported countries
- ⚙️ Written in TypeScript
- 🚀 Lightweight & fast

---

## 📦 Installation

```bash
npm install turkey-iban-validator


```

## 🔧 Usage

### ✅ Validate Turkish IBAN

```ts
import { isValidTRIban } from "turkey-iban-validator";

isValidTRIban("TR330006100519786457841326"); // true
isValidTRIban("TR000000000000000000000000"); // false
```

### 🌍 Validate General IBAN

```ts
import { isValidIban } from "turkey-iban-validator";

isValidIban("DE29270024055324013000"); // true
isValidIban("US12345678901234567890"); // false
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [ismetcanbyk](https://github.com/ismetcanbyk)
