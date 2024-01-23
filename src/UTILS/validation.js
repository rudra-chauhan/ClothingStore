const validation = data => {
  let Data = data;
  let Error = {
    EmailErr: null,
    PassErr: null,
  };
  const isEmailValid = value => {
    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(value);
  };
  const isPassValid = val => {
    const rgx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return rgx.test(val);
  };
  return new Promise((resolve, reject) => {
    let valid = true;
    if (!Data.Email) {
      valid = false;
      Error.EmailErr = 'Please enter Email';
    } else if (!isEmailValid(Data.Email)) {
      valid = false;
      Error.EmailErr = 'Please enter valid Email';
    } else {
      Error.EmailErr = null;
    }
    if (!Data.Pass) {
      valid = false;
      Error.PassErr = 'Please enter Password';
    } else if (!isPassValid(Data.Pass)) {
      valid = false;
      Error.PassErr = 'Please enter valid Password';
    } else {
      Error.PassErr = null;
    }
    if (valid) {
      resolve({status: 1, error: Error});
    } else {
      resolve({status: 0, error: Error});
    }
  });
};

export default validation;
