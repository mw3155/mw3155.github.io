// Frontend chat interface - backend API handles LLM calls

let ragText = "";

// Initialize
window.onload = async () => {
  // Fetch rag.txt once at start
  try {
    const ragRes = await fetch("rag.txt");
    ragText = await ragRes.text();
  } catch (e) {
    ragText = "";
    console.error("Failed to load rag.txt", e);
  }
  const input = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const workBtn = document.getElementById("workBtn");
  const lifeBtn = document.getElementById("lifeBtn");
  input.disabled = false;
  sendBtn.disabled = false;
  workBtn.disabled = false;
  lifeBtn.disabled = false;
  input.placeholder = "Type your message...";
  sendBtn.onclick = sendMessage;
  workBtn.onclick = () => sendTopicMessage("work");
  lifeBtn.onclick = () => sendTopicMessage("life");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
};

async function sendMessage() {
  const input = document.getElementById("messageInput");
  const msg = input.value.trim();
  if (!msg) return;
  addMessage("You", msg, "user");
  input.value = "";
  showTyping();
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: msg,
        type: 'chat',
        ragText: ragText
      })
    });
    
    const data = await response.json();
    hideTyping();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to get response');
    }
    
    addMessage("AI", data.response, "assistant");
  } catch (e) {
    hideTyping();
    addMessage("System", "Error: " + e.message, "error");
  }
}

async function sendTopicMessage(topic) {
  addMessage("You", `Tell me about his ${topic}.`, "user");
  showTyping();
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: topic,
        type: 'topic',
        ragText: ragText
      })
    });
    
    const data = await response.json();
    hideTyping();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to get response');
    }
    
    addMessage("AI", data.response, "assistant");
  } catch (e) {
    hideTyping();
    addMessage("System", "Error: " + e.message, "error");
  }
}

function addMessage(_, content, type) {
  const c = document.getElementById("chatMessages");
  const d = document.createElement("div");
  if (type === "assistant") {
    d.className = "flex items-start gap-3";
    d.innerHTML = `<div class='text-[#f8f8f2] max-w-[80%]'>${
      window.marked ? window.marked.parse(content) : content
    }</div>`;
  } else if (type === "user") {
    d.className = "flex items-start gap-3 justify-end";
    d.innerHTML = `<div class='text-[#f8f8f2] max-w-[80%] text-right ml-auto'>${content}</div>`;
  } else if (type === "error") {
    d.className = "text-red-400 text-sm px-4 py-2";
    d.textContent = content;
  } else {
    d.textContent = content;
  }
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function showTyping() {
  const c = document.getElementById("chatMessages");
  const d = document.createElement("div");
  d.className = "flex items-start gap-3";
  d.id = "typingIndicator";
  d.innerHTML = `<div class='flex items-center h-8'><span class='inline-block w-2 h-2 mx-0.5 bg-white rounded-full animate-bounce' style='animation-delay:0s'></span><span class='inline-block w-2 h-2 mx-0.5 bg-white rounded-full animate-bounce' style='animation-delay:0.2s'></span><span class='inline-block w-2 h-2 mx-0.5 bg-white rounded-full animate-bounce' style='animation-delay:0.4s'></span></div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}
