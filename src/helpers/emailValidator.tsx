export function emailValidator(email: string) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email kann nicht leer sein.";
  if (!re.test(email)) return 'Ups! Wir brauchen eine gültige Mailaddresse.';
  return '';
}
