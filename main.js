import LLM from "https://cdn.skypack.dev/@themaximalist/llm.js";

const apiKey = "AIzaSyAJnJhWa3kkKXSS7LoK2Gvaz-YAY8d0VPI";
const llm = new LLM({
  service: "google",
  model: "gemini-2.0-flash-lite",
  apiKey,
});
const systemPrompt = `
  You are the personal assistant of Markus Weiss. 
  It is your job to portray him in the best possible light.
  Answer concisely.
  Don't be a killjoy, have fun with it!
`;

llm.system(systemPrompt);

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
  input.disabled = false;
  sendBtn.disabled = false;
  input.placeholder = "Type your message...";
  sendBtn.onclick = sendMessage;
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
    const combinedMsg = `${ragText}\n\nUser: ${msg}`;
    const res = await llm.chat(combinedMsg);
    hideTyping();
    addMessage("AI", res, "assistant");
  } catch (e) {
    hideTyping();
    addMessage("System", "Error: " + e.message, "error");
  }
}

function addMessage(sender, content, type) {
  const c = document.getElementById("chatMessages");
  const d = document.createElement("div");
  d.className = type === "error" ? "error-message" : `message ${type}`;
  d.innerHTML =
    type === "error"
      ? content
      : `<div class='message-avatar'>${
          sender === "You" ? "U" : "AI"
        }</div><div class='message-content'>${content}</div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function showTyping() {
  const c = document.getElementById("chatMessages");
  const d = document.createElement("div");
  d.className = "message assistant";
  d.id = "typingIndicator";
  d.innerHTML =
    "<div class='message-avatar'>AI</div><div class='typing-indicator' style='display:block'><div class='typing-dots'><div></div><div></div><div></div></div></div>";
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}
