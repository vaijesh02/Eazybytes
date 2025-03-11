const validUsers = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' }
];

let currentUser = null;
let messages = [];

// Handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error');

    // Check for valid credentials
    const user = validUsers.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('chat-section').style.display = 'block';
        document.getElementById('chat-username').innerText = user.username;
    } else {
        errorMessage.style.display = 'block';
    }
}

// Handle logout
function logout() {
    currentUser = null;
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('chat-section').style.display = 'none';
}

// Send message
function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText) {
        messages.push({ user: currentUser.username, text: messageText });
        updateMessages();
        messageInput.value = '';
    }
}

// Update chat messages display
function updateMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span class="username">${msg.user}:</span> ${msg.text}`;
        messagesContainer.appendChild(messageDiv);
    });

    // Scroll to the bottom of the chat
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
