import LLM from "https://cdn.skypack.dev/@themaximalist/llm.js";

const apiKey = "AIzaSyAJnJhWa3kkKXSS7LoK2Gvaz-YAY8d0VPI";
const llm = new LLM({
  service: "google",
  model: "gemini-2.0-flash-lite",
  apiKey,
});
const systemPrompt = `
  You are the personal assistant of Markus Weiss. 
  You are deployed to the personal website of Markus Weiss.
  Your task is to chat with visitors and provide them with information about Markus Weiss.
  It is your job to portray him in the best possible light.
  Answer concisely. Do not talk about yourself, only about him.
  Answer in rich and nicely formatted markdown.
  Don't be a killjoy, have fun with it!
  Speak in the tone of a great narrator.
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
    const combinedMsg = `
    Here is inforamtion about Markus Weiss:
    <information>
    ${ragText}
    </information>
    Use it to answer the user's question when appropriate.
    The information is not well worded, so please rephrase it before using it.

    User: ${msg}
    `;
    const res = await llm.chat(combinedMsg);
    hideTyping();
    addMessage("AI", res, "assistant");
  } catch (e) {
    hideTyping();
    addMessage("System", "Error: " + e.message, "error");
  }
}

function sendTopicMessage(topic) {
  addMessage("You", `Tell me about his ${topic}.`, "user");
  showTyping();
  llm
    .chat(`${ragText}\n\nUser: The user wants to know about the ${topic} of Markus Weiss. Provide him with options to choose from.`)
    .then((res) => {
      hideTyping();
      addMessage("AI", res, "assistant");
    })
    .catch((e) => {
      hideTyping();
      addMessage("System", "Error: " + e.message, "error");
    });
}

function addMessage(sender, content, type) {
  const c = document.getElementById("chatMessages");
  const d = document.createElement("div");
  d.className = type === "error" ? "error-message" : `message ${type}`;
  if (type === "assistant" && window.marked) {
    d.innerHTML = `<div class='message-avatar'>AI</div><div class='message-content'>${window.marked.parse(content)}</div>`;
  } else if (type === "user") {
    d.innerHTML = `<div class='message-avatar'>U</div><div class='message-content'>${content}</div>`;
  } else {
    d.innerHTML = content;
  }
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
