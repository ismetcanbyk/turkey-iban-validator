export function cleanIban(input: string): string {
  return input.replace(/\s+/g, "").toUpperCase();
}

export function mod97(iban: string): boolean {
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const converted = rearranged.replace(/[A-Z]/g, (ch) =>
    (ch.charCodeAt(0) - 55).toString()
  );

  let remainder = converted;
  while (remainder.length > 2) {
    const part = remainder.slice(0, 9);
    remainder =
      (parseInt(part, 10) % 97).toString() + remainder.slice(part.length);
  }

  return parseInt(remainder, 10) % 97 === 1;
}
