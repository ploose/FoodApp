export function passwordValidator(password: string) {
  if (!password) return "Bitte Passwort angeben.";
  if (password.length < 5)
    return 'Das Passwort muss aus mindestens 5 Zeichen bestehen.';
  return '';
}
