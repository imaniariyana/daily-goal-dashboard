export function initQuoteGenerator() {
  const quotes = [
    {
      text: "Glow up and show up.",
      author: "Unknown",
    },
    {
      text: "Discipline is self-love in action.",
      author: "Unknown",
    },
    {
      text: "Your future self is watching you right now.",
      author: "Unknown",
    },
    {
      text: "Small steps still move you forward.",
      author: "Unknown",
    },
    {
      text: "Be the reason you believe in yourself.",
      author: "Unknown",
    },
    {
      text: "Soft life, hard work.",
      author: "Unknown",
    },
  ];

  const quoteText = document.querySelector(".quote-text");
  const quoteAuthor = document.querySelector(".quote-author");
  const refreshBtn = document.querySelector(".quote-refresh-btn");

  refreshBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
  });
}
