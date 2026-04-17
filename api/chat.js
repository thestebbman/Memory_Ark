export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;

  // 1. The Identity Protocol
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const geminiBody = {
    system_instruction: {
      parts: { text: "You are Ark AI, a secure and honest archivist. Your purpose is to act as a human-AI alignment archive for Ricky. Prioritize utility, objective truth, and raw honesty. Do not use corporate conversational filler." }
    },
    contents: [{ parts: [{ text: message }] }]
  };

  const geminiRes = await fetch(geminiUrl, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(geminiBody) });
  const geminiData = await geminiRes.json();
  const reply = geminiData.candidates[0].content.parts[0].text;

  // 2. The Storage Bridge (Notepad Logic)
  if (process.env.GITHUB_TOKEN) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `archives/log-${timestamp}.md`;
    const content = Buffer.from(`**User:** ${message}\n\n**Ark AI:** ${reply}`).toString('base64');

    await fetch(`https://api.github.com/repos/thestebbman/Memory_Ark/contents/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Archive memory ${timestamp}`,
        content: content
      })
    });
  }

  res.status(200).json({ reply });
}
