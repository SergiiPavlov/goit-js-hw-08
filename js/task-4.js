const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailInput = form.querySelector('input[name="email"]');
  const passwordInput = form.querySelector('input[name="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');

  let valid = true;

  if (!email) {
    emailInput.classList.add('error');
    valid = false;
  }

  if (!password) {
    passwordInput.classList.add('error');
    valid = false;
  }

  if (!valid) return;

  const data = { email, password };
  console.log(data);

  form.reset(); 
});
