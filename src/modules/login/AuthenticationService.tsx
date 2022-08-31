import auth from '@react-native-firebase/auth';

export function createUser(email: string, password: string) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('Diese Mail ist bereits in Verwendung.');
      }
      if (error.code === 'auth/invalid-email') {
        alert('Die Mail ist ungültig.');
      }
      console.error(error);
    });
}

export function signInWithEmailAndPassword(email: string, password: string) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(error => {
      console.error(error);
    });
}

export function resetPassword(email: string) {
  auth()
    .sendPasswordResetEmail(email)
    .then(user => {
      alert(
        'Falls dieser Account existiert, haben wir ein Mail für das zurücksetzen des Passworts verschickt.',
      );
    })
    .catch(error => {
      console.error(error);
      alert('Das zurücksetzen des Passworts ist derzeit nicht möglich.');
    });
}
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
