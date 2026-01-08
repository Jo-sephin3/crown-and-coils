const API_BASE_URL = 'http://localhost:5000/api';

let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('auth-modal');
  const openAuthBtn = document.getElementById('open-auth');
  const closeBtn = document.getElementById('close-modal');

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const modalTitle = document.getElementById('modal-title');

  const loginLinkWrapper = document.getElementById('login-link');
  const accountMenuWrapper = document.getElementById('account-menu-wrapper');
  const logoutBtn = document.getElementById('logout-btn');
  const showSignup = document.getElementById('show-signup');
  const showLogin = document.getElementById('show-login');

  // check if user is already logged in
  const savedUser = sessionStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateUIForLoggedIn();
  }

  // open modal
  if (openAuthBtn) openAuthBtn.addEventListener('click', () => modal.style.display = 'flex');

  // close modal
  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // form switch
  if (showSignup) showSignup.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    modalTitle.textContent = 'Create Account';
  });

  if (showLogin) showLogin.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    modalTitle.textContent = 'Login';
  });

  // signup
  if (signupForm) signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fullName = signupForm.querySelector('input[type=text]').value;
    const email = signupForm.querySelector('input[type=email]').value;
    const password = signupForm.querySelector('input[type=password]').value;

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Date.now().toString(), // simple id generation
          fullName: fullName,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Error: ${data.error}`);
        return;
      }

      // save user to session
      currentUser = data.user;
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      alert('Account created successfully!');
      modal.style.display = 'none';
      
      // reset form
      signupForm.reset();
      updateUIForLoggedIn();
      
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });

  // login
  if (loginForm) loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type=email]').value;
    const password = loginForm.querySelector('input[type=password]').value;

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Error: ${data.error}`);
        return;
      }

      // save user to session
      currentUser = data.user;
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      alert('Login successful!');
      modal.style.display = 'none';
      
      // reset form
      loginForm.reset();
      updateUIForLoggedIn();
      
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });

  // dropdown menu toggle
  const accountIconElement = document.getElementById('account-icon');
  const accountMenuList = document.getElementById('account-menu');
  if (accountIconElement) {
    accountIconElement.addEventListener('click', (e) => {
      e.stopPropagation();
      if (accountMenuList) {
        accountMenuList.style.display = accountMenuList.style.display === 'block' ? 'none' : 'block';
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (accountIconElement && !accountIconElement.contains(e.target)) {
      if (accountMenuList) accountMenuList.style.display = 'none';
    }
  });

  // logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        currentUser = null;
        sessionStorage.removeItem('currentUser');
        if (accountMenuList) accountMenuList.style.display = 'none';
        alert('You have been logged out.');
        updateUIForLoggedOut();
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    });
  }

  // update ui for logged in user
  function updateUIForLoggedIn() {
    const openAuth = document.getElementById('open-auth');
    const accountIcon = document.getElementById('account-icon');
    
    if (openAuth) openAuth.style.display = 'none';
    if (accountIcon) accountIcon.style.display = 'inline-block';
    if (loginLinkWrapper) loginLinkWrapper.style.display = 'none';
    if (accountMenuWrapper) accountMenuWrapper.style.display = 'inline-block';
  }

  // update ui for logged out user
  function updateUIForLoggedOut() {
    const openAuth = document.getElementById('open-auth');
    const accountIcon = document.getElementById('account-icon');
    
    if (openAuth) openAuth.style.display = 'inline-block';
    if (accountIcon) accountIcon.style.display = 'none';
    if (loginLinkWrapper) loginLinkWrapper.style.display = 'inline-block';
    if (accountMenuWrapper) accountMenuWrapper.style.display = 'none';
  }
});

// get current user
export function getCurrentUser() {
  return currentUser;
}

// create booking
export async function createBooking(service, date) {
  if (!currentUser) {
    alert('You must be logged in to book');
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: currentUser.id,
        service: service,
        date: date
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(`Error: ${data.error}`);
      return null;
    }

    alert('Booking created successfully!');
    return data.booking;
    
  } catch (error) {
    alert(`Error: ${error.message}`);
    return null;
  }
}
