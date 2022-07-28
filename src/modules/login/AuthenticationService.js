// @flow
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function createUser(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User account created & signed in!');
      console.log('UserCrednetial', userCredential.user);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      };
      try {
        fetch(
          'https://api.interactions.ics.unisg.ch/foodcoach/backend/user/register',
          requestOptions,
        )
          .then(res => res.json())
          .then(res => {
            if (res.token) {
              firestore()
                .collection('users')
                .doc(userCredential.user.uid)
                .set({
                  email: email,
                  token: res.token,
                });
            } else {
              firestore()
                .collection('users')
                .doc(userCredential.user.uid)
                .set({
                  token: 'None',
                });
            }
          });
      } catch (error) {
        console.error(error);
      }

      userCredential.user.sendEmailVerification().then(() => {
        alert('Bitte verifiziere deine Mail bei Gelegenheit.');
      });
    })
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

export function signInWithEmailAndPassword(email, password) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed in!');
    })
    .catch(error => {
      console.error(error);
    });
}

export function resetPassword(email) {
  auth()
  .sendPasswordResetEmail(email)
  .then(user => {
    console.log("User:", user);
    alert("Falls dieser Account existiert, haben wir ein Mail für das zurücksetzen des Passworts verschickt.");
  })
  .catch(error => {
    console.error(error);
    alert("Das zurücksetzen des Passworts ist derzeit nicht möglich.");
  });
}
