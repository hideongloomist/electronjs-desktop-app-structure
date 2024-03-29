const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const loginBtn = document.getElementById('loginBtn') as HTMLFormElement;
loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const username = (document.getElementById('exampleInputEmail') as HTMLInputElement).value;
  const password = (document.getElementById('exampleInputPassword') as HTMLInputElement).value;
  window.ipc.send('security-api-auth-login-request', { username, password });
});
window.ipc.receive('security-api-auth-login-response', (success: any, func: any) => {
  if (success) {
    window.ipc.send('open-home-window', success);
  } else {
    window.ipc.send('open-dialog', { type:'error', title:'Login error', message:'Wrong login or password', buttons:['Ok']});
  }
});
