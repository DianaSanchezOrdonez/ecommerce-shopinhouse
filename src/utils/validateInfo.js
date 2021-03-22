const validateInfo = (values) => {
  let errors = {};

  /*--------------Login---------------------*/
  if (!values.usernameLogin.trim()) {
    errors.usernameLogin = "Username required";
  }

  if (!values.emailLogin.trim()) {
    errors.emailLogin = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.emailLogin)) {
    errors.emailLogin = "Email address is invalid";
  }

  if (!values.passwordLogin.trim()) {
    errors.passwordLogin = "Password required";
  }else if( values.passwordLogin.length < 6 ){
    errors.passwordLogin = 'Password needs to be 6 characters or more';
  }

  /*--------------Register---------------------*/

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password.trim()) {
    errors.password = "Password required";
  }else if( values.password.length < 6 ){
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2.trim()) {
    errors.password2 = "Password required";
  }else if( values.password2 !== values.password ){
    errors.password2 = 'Password do not match';
  }

  return errors;

};

export default validateInfo;
