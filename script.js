document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username.trim() === '') {
        alert('Please enter your username');
        return;
    }
    
    if (password.trim() === '') {
        alert('Please enter your password');
        return;
    }
    
    // Here you would typically send the data to a server
    console.log('Login attempt:', { username, password });
    
    // For demo purposes, show success message
    alert('Login successful!');
    
    // Clear the form
    this.reset();
}); 