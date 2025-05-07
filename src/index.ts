import { cleanIban, mod97 } from "./utils";
import { isValidTRIban } from "./tr";

export function isValidIban(iban: string): boolean {
  const cleaned = cleanIban(iban);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(cleaned)) return false;
  return mod97(cleaned);
}

export { isValidTRIban };
