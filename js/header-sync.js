// SastaElectronics - Header Sync Script
// This runs on every page to ensure header shows correct user info

(function syncUserToHeader() {
    const localUser = JSON.parse(localStorage.getItem('sasta_current_user') || 'null');

    // If no local user but Supabase is available, sync from Supabase
    if (!localUser && typeof supabaseClient !== 'undefined' && supabaseClient) {
        supabaseClient.auth.getSession().then(({ data }) => {
            if (data.session && data.session.user) {
                const user = {
                    id: data.session.user.id,
                    email: data.session.user.email,
                    firstName: data.session.user.user_metadata?.first_name || '',
                    lastName: data.session.user.user_metadata?.last_name || '',
                    phone: data.session.user.user_metadata?.phone || '',
                    user_metadata: data.session.user.user_metadata || {}
                };
                localStorage.setItem('sasta_current_user', JSON.stringify(user));
                // Reload to update header
                if (!sessionStorage.getItem('headerSynced')) {
                    sessionStorage.setItem('headerSynced', 'true');
                    location.reload();
                }
            }
        });
    }

    // If local user exists, ensure avatar is loaded for header
    if (localUser) {
        const userId = localUser.id || localUser.email;
        const savedAvatar = localStorage.getItem('user_avatar_' + userId);

        // Store avatar data for header to use
        if (savedAvatar) {
            localStorage.setItem('header_avatar', savedAvatar);
            localStorage.setItem('header_userName', localUser.user_metadata?.first_name || localUser.firstName || localUser.email?.split('@')[0] || 'User');
            localStorage.setItem('header_hasAvatar', 'true');
        } else {
            localStorage.setItem('header_hasAvatar', 'false');
            localStorage.setItem('header_userName', localUser.user_metadata?.first_name || localUser.firstName || localUser.email?.split('@')[0] || 'User');
        }
    } else {
        // Clear header user data when logged out
        localStorage.removeItem('header_avatar');
        localStorage.removeItem('header_userName');
        localStorage.removeItem('header_hasAvatar');
        localStorage.removeItem('sasta_current_user');
    }
})();
