// Admin Configuration - Fixed
const ADMIN_CREDENTIALS = {
    username: 'Admin',
    password: 'faheelkhan@007'
};

// Clear any old stored credentials
localStorage.removeItem('admin_credentials');

console.log('✅ Admin config loaded');
console.log('Username:', ADMIN_CREDENTIALS.username);
console.log('Password:', ADMIN_CREDENTIALS.password);
