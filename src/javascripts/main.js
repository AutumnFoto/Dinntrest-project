import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './components/helpers/apiKeys.json';
import auth from './components/auth/auth';
import myNavBar from './components/Mynavbar/Navbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  myNavBar.logoutEvent();
};

init();
