/* ═══════════════════════════════════════════════════════
   SastaElectronics - Authentication System
   ══════════════════════════════════════════════════════ */

// Auth State
var Auth = {
    currentUser: null,
    listeners: [],

    init: function () {
        if (!supabaseClient) return;
        var self = this;

        supabaseClient.auth.getSession().then(function (result) {
            self.currentUser = result.data.session ? result.data.session.user : null;
            self._notify();
        });

        supabaseClient.auth.onAuthStateChange(function (event, session) {
            self.currentUser = session ? session.user : null;
            self._notify();
        });
    },

    onAuthChange: function (cb) {
        this.listeners.push(cb);
        if (this.currentUser) cb(this.currentUser);
    },

    _notify: function () {
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i](this.currentUser);
        }
    },

    isLoggedIn: function () { return !!this.currentUser; },
    getUser: function () { return this.currentUser; }
};

// Check credentials
function checkSupabase() {
    if (typeof supabase === 'undefined') {
        return { ok: false, msg: 'Supabase CDN is not loaded. Make sure the script tag is in your HTML.' };
    }
    if (!supabaseClient) {
        return { ok: false, msg: 'Supabase not connected. Open js/supabase-config.js and add your SUPABASE_URL and SUPABASE_ANON_KEY from your Supabase Dashboard (Settings → API).' };
    }
    return { ok: true };
}

// SIGN UP
async function signUp(email, password, firstName, lastName, phone) {
    var check = checkSupabase();
    if (!check.ok) return { success: false, message: check.msg };

    try {
        var result = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: { data: { first_name: firstName, last_name: lastName, phone: phone } }
        });

        if (result.error) return { success: false, message: result.error.message };

        // Create profile
        if (result.data.user) {
            await supabaseClient.from('profiles').insert([{
                id: result.data.user.id,
                email: email,
                first_name: firstName,
                last_name: lastName,
                phone: phone
            }]);
        }

        return { success: true, user: result.data.user, message: 'Account created! Check your email to verify.' };
    } catch (e) {
        return { success: false, message: e.message };
    }
}

// LOGIN
async function signIn(email, password) {
    var check = checkSupabase();
    if (!check.ok) return { success: false, message: check.msg };

    try {
        var result = await supabaseClient.auth.signInWithPassword({ email: email, password: password });
        if (result.error) return { success: false, message: result.error.message };
        return { success: true, user: result.data.user, session: result.data.session, message: 'Login successful!' };
    } catch (e) {
        return { success: false, message: e.message };
    }
}

// LOGOUT
async function signOut() {
    if (!supabaseClient) return { success: false, message: 'Not connected' };
    var result = await supabaseClient.auth.signOut();
    if (result.error) return { success: false, message: result.error.message };
    Auth.currentUser = null;
    return { success: true, message: 'Logged out' };
}

// FORGOT PASSWORD
async function forgotPassword(email) {
    var check = checkSupabase();
    if (!check.ok) return { success: false, message: check.msg };

    try {
        var result = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/reset-password.html'
        });
        if (result.error) return { success: false, message: result.error.message };
        return { success: true, message: 'Password reset email sent! Check your inbox.' };
    } catch (e) {
        return { success: false, message: e.message };
    }
}

// UPDATE PASSWORD
async function updatePassword(newPassword) {
    var check = checkSupabase();
    if (!check.ok) return { success: false, message: check.msg };

    try {
        var result = await supabaseClient.auth.updateUser({ password: newPassword });
        if (result.error) return { success: false, message: result.error.message };
        return { success: true, message: 'Password updated!' };
    } catch (e) {
        return { success: false, message: e.message };
    }
}

// UPDATE PROFILE
async function updateProfile(updates) {
    if (!supabaseClient || !Auth.currentUser) return { success: false, message: 'Not logged in' };

    try {
        var result = await supabaseClient.from('profiles').update(updates).eq('id', Auth.currentUser.id).select().single();
        if (result.error) return { success: false, message: result.error.message };
        return { success: true, profile: result.data, message: 'Profile updated!' };
    } catch (e) {
        return { success: false, message: e.message };
    }
}

// GET USER PROFILE
async function getUserProfile() {
    if (!supabaseClient || !Auth.currentUser) return null;
    var result = await supabaseClient.from('profiles').select('*').eq('id', Auth.currentUser.id).single();
    return result.error ? null : result.data;
}

// Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { Auth.init(); });
} else {
    Auth.init();
}

// Make global
window.Auth = Auth;
window.signUp = signUp;
window.signIn = signIn;
window.signOut = signOut;
window.forgotPassword = forgotPassword;
window.updatePassword = updatePassword;
window.updateProfile = updateProfile;
window.getUserProfile = getUserProfile;
