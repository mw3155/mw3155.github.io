import LLM from '@themaximalist/llm.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, type, ragText } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const llm = new LLM({
    service: "google",
    model: "gemini-2.5-flash-lite",
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
    Markus is a humble person, so don't exaggerate too much.
    Speak in the tone of a great narrator.
  `;

  llm.system(systemPrompt);

  try {
    let prompt;
    
    if (type === 'topic') {
      prompt = `${ragText}\n\nUser: The user wants to know about the ${message} of Markus Weiss. Provide him with options to choose from.`;
    } else {
      prompt = `
        Here is information about Markus Weiss:
        <information>
        ${ragText}
        </information>
        Use it to answer the user's question when appropriate.
        The information is not well worded, so please rephrase it before using it.

        User: ${message}
      `;
    }

    const result = await llm.chat(prompt);
    
    res.status(200).json({ response: result });
    
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}