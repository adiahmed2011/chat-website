// Function to send a message
function sendMessage() {
    let messageInput = document.getElementById('messageInput');
    let message = messageInput.value.trim();

    if (message) {
        // Create a new user message
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        messageDiv.textContent = message;
        document.getElementById('messages').appendChild(messageDiv);

        // Simulate bot response after a delay
        setTimeout(function() {
            let botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('message', 'bot');
            botMessageDiv.textContent = "Bot: I received your message!";
            document.getElementById('messages').appendChild(botMessageDiv);

            // Scroll to the bottom to show the latest message
            let messagesContainer = document.getElementById('messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Set focus back to the input field for accessibility
            messageInput.focus();
        }, 1000);

        // Clear the input field
        messageInput.value = '';

        // Announce the new message for screen readers
        let newMessageAnnouncement = newMessageDiv = document.createElement('div');
        newMessageAnnouncement.setAttribute('role', 'alert');
        newMessageAnnouncement.textContent = `New message from user: ${message}`;
        document.body.appendChild(newMessageAnnouncement);
        
        // Remove the announcement after screen readers have spoken it
        setTimeout(() => {
            newMessageAnnouncement.remove();
        }, 3000);
    }
}

// Keyboard accessibility: allow "Enter" to send a message
document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Focus management for accessibility
document.querySelector('button').addEventListener('focus', function() {
    this.style.outline = '2px solid #0056b3'; // Add outline for better visibility
});
document.querySelector('button').addEventListener('blur', function() {
    this.style.outline = 'none'; // Remove outline when focus is lost
});

// Accessibility feature for "Send" button
document.querySelector('button').setAttribute('aria-label', 'Send message');

// Announce when the page loads for screen reader users
window.addEventListener('load', () => {
    let pageAnnouncement = document.createElement('div');
    pageAnnouncement.setAttribute('role', 'alert');
    pageAnnouncement.textContent = "Welcome to the chat. You can start typing your message below.";
    document.body.appendChild(pageAnnouncement);

    // Remove the page announcement after screen readers have spoken it
    setTimeout(() => {
        pageAnnouncement.remove();
    }, 3000);
});
