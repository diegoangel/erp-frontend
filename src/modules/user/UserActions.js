import axios from 'axios';

//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';


//validate email, if success, then load user and login
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const VALIDATE_EMAIL_SUCCESS = 'VALIDATE_EMAIL_SUCCESS';
export const VALIDATE_EMAIL_FAILURE = 'VALIDATE_EMAIL_FAILURE';

//called when email is updated in profile to update main user's email state
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function validateEmail(validateEmailToken) {
  //check if token from welcome email is valid, if so, update email as verified and login the user from response
  const request = axios.get(`${ROOT_URL}/validateEmail/${validateEmailToken}`);

  return {
    type: VALIDATE_EMAIL,
    payload: request
  };
}

export function validateEmailSuccess(currentUser) {
  return {
    type: VALIDATE_EMAIL_SUCCESS,
    payload: currentUser
  };
}

export function validateEmailFailure(error) {
  return {
    type: VALIDATE_EMAIL_FAILURE,
    payload: error
  };
}

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: ME_FROM_TOKEN,
    payload: request
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}


export function resetToken() {//used for logout
  return {
    type: RESET_TOKEN
  };
}


export function signUpUser(formValues) {
  const request = axios.post(`${ROOT_URL}/users/signup`, formValues);

  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: RESET_USER,
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/users/signin`, formValues);

  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}
export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload:email
  };
}