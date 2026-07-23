// Signup Handler - Fixed Version

async function handleSignup(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const phone = document.getElementById('signupPhone').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const btn = document.getElementById('signupBtn');
    const errorDiv = document.getElementById('signupError');
    const successDiv = document.getElementById('signupSuccess');

    // Hide previous messages
    if (errorDiv) errorDiv.style.display = 'none';
    if (successDiv) successDiv.style.display = 'none';

    // Validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        if (errorDiv) {
            errorDiv.textContent = 'Please fill in all fields';
            errorDiv.style.display = 'block';
        }
        return;
    }

    if (password !== confirmPassword) {
        if (errorDiv) {
            errorDiv.textContent = 'Passwords do not match';
            errorDiv.style.display = 'block';
        }
        return;
    }

    if (password.length < 6) {
        if (errorDiv) {
            errorDiv.textContent = 'Password must be at least 6 characters';
            errorDiv.style.display = 'block';
        }
        return;
    }

    // Disable button
    btn.disabled = true;
    btn.textContent = 'Creating Account...';

    try {
        // Check if Supabase is available
        if (typeof supabaseClient === 'undefined' || !supabaseClient) {
            throw new Error('Supabase not connected. Please refresh the page.');
        }

        console.log('Attempting to create user:', email);

        // Create user in Supabase Auth
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone
                }
            }
        });

        if (error) {
            console.error('Supabase signup error:', error);
            throw new Error(error.message);
        }

        console.log('User created successfully:', data);

        // Sign out immediately after signup (prevent auto-login)
        await supabaseClient.auth.signOut();
        console.log('User signed out after signup');

        // Show success message
        if (successDiv) {
            successDiv.textContent = 'Account created successfully! Please login.';
            successDiv.style.display = 'block';
        }

        // Reset form
        event.target.reset();

        // Enable button
        btn.disabled = false;
        btn.textContent = 'Create Account';

        // Show success and redirect
        setTimeout(() => {
            alert('Account created successfully! Redirecting to login...');
            window.location.href = 'login.html';
        }, 1500);

    } catch (err) {
        console.error('Signup error:', err);

        if (errorDiv) {
            errorDiv.textContent = 'Error: ' + err.message;
            errorDiv.style.display = 'block';
        }

        // Enable button
        btn.disabled = false;
        btn.textContent = 'Create Account';
    }
}

// Export for use in HTML
window.handleSignup = handleSignup;
