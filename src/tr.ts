import { cleanIban, mod97 } from "./utils";

export function isValidTRIban(iban: string): boolean {
  const cleaned = cleanIban(iban);
  if (!/^TR\d{24}$/.test(cleaned)) return false;
  return mod97(cleaned);
}
