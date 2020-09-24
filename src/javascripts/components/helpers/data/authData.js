import firebase from 'firebase/app';
import 'firebase/auth';
// import userData from './userData';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#auth').addClass('hide');
      $('#maindom').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
      $('#maindom').html('<h1>Boards</h1>');
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#maindom').addClass('hide');
      $('#dinnterest').html('<h1>');
    }
  });
};

export default { checkLoginStatus };
