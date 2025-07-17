import LLM from 'https://cdn.skypack.dev/@themaximalist/llm.js';

// let apiKey = localStorage.getItem('llm-api-key');
let apiKey = 'AIzaSyAJnJhWa3kkKXSS7LoK2Gvaz-YAY8d0VPI'; // gemini
const model = 'gemini-2.0-flash-lite';
const service = 'google';

// Initialize
window.onload = function () {
    if (apiKey) {
        enableChat();
    }

    document.getElementById('messageInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
};

window.setApiKey = function () {
    const key = prompt('Enter your API key (Google):');
    if (key) {
        apiKey = key;
        localStorage.setItem('llm-api-key', key);
        enableChat();
        addMessage('System', 'API key set successfully! You can now start chatting.', 'assistant');
    }
};

function enableChat() {
    document.getElementById('messageInput').disabled = false;
    document.getElementById('sendBtn').disabled = false;
    document.getElementById('messageInput').placeholder = 'Type your message...';
}

window.sendMessage = async function () {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();

    if (!message || !apiKey) return;

    // Add user message
    addMessage('You', message, 'user');
    input.value = '';

    // Show typing indicator
    showTypingIndicator();

    try {
        const response = await LLM(message, {
            service: service,
            model: model,
            apiKey: apiKey
        });

        hideTypingIndicator();
        addMessage('AI', response, 'assistant');
    } catch (error) {
        hideTypingIndicator();
        addMessage('System', `Error: ${error.message}`, 'error');
    }
};

function addMessage(sender, content, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');

    if (type === 'error') {
        messageDiv.className = 'error-message';
        messageDiv.textContent = content;
    } else {
        messageDiv.className = `message ${type}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = sender === 'You' ? 'U' : 'AI';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;

        if (type === 'user') {
            messageDiv.appendChild(messageContent);
            messageDiv.appendChild(avatar);
        } else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageContent);
        }
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant';
    typingDiv.id = 'typingIndicator';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = 'AI';

    const typingContent = document.createElement('div');
    typingContent.className = 'typing-indicator';
    typingContent.style.display = 'block';

    const typingDots = document.createElement('div');
    typingDots.className = 'typing-dots';
    typingDots.innerHTML = '<div></div><div></div><div></div>';

    typingContent.appendChild(typingDots);
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(typingContent);

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}
