let email = prompt('Enter your email', '');
const pattern = /^\s*$/;
const maxEmail = 6;
const maxNew = 5;

if (pattern.test(email) || email === null) {
  alert('Canceled');
}else if(email.length < maxEmail){
  alert("I don't know any emails having name length less than 6 symbols");
}else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
  let password = prompt('Enter your password', '');
  if (pattern.test(password) || password === null) {
    alert('Canceled');
  }else if(email === 'user@gmail.com' && password === 'UserPass' ||
       email === 'admin@gmail.com' && password === 'AdminPass'){
    let decision = confirm('Do you want to change your password?”');
    if (decision === false) {
      alert('You have failed the change');
    }else{
      let oldPassword = prompt('Enter your old password', '');
      if (pattern.test(oldPassword) || oldPassword === null) {
        alert('Canceled');
      }else if(oldPassword === password){
        let newPassword = prompt('Enter your new password', '');
        if (newPassword.length < maxNew) {
          alert("It's too short password. Sorry");
        }else if(newPassword === null){
          alert('Canceled');
        }else{
          let confirm = prompt('Confirm your password','')
          if(confirm === newPassword){
            alert('You have successfully changed your password');
          }else{
            alert('You wrote the wrong password');
          }
        }
      }else{
        alert('Wrong password');
      }
    }
  }else{
    alert('Wrong password');
  } 
}else{
  alert('I don’t know you');
}