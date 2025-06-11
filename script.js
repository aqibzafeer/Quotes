const quotes = [
  {
    id: "1",
    text: "Believe you can and you're halfway there.",
    author: "-Theodore Roosevelt",
  },
  {
    id: "2",
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "-Winston Churchill",
  },
  {
    id: "3",
    text: "The journey of a thousand miles begins with one step.",
    author: "-Lao Tzu",
  },
  {
    id: "4",
    text: "It always seems impossible until it's done.",
    author: "-Nelson Mandela",
  },
  {
    id: "5",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "-Sam Levenson",
  },
  {
    id: "6",
    text: "The best way to predict the future is to create it.",
    author: "-Abraham Lincoln",
  },
  {
    id: "7",
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    id: "8",
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    id: "9",
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    id: "10",
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: "11",
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    id: "12",
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    id: "13",
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    id: "14",
    text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    id: "15",
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    id: "16",
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    id: "17",
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
  },
  {
    id: "18",
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    id: "19",
    text: "Don't limit your challenges. Challenge your limits.",
    author: "Jerry Dunn",
  },
  {
    id: "20",
    text: "Work hard in silence, let success make the noise.",
    author: "Frank Ocean",
  },
  {
    id: "21",
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    id: "22",
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: "23",
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
  },
  {
    id: "24",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: "25",
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    id: "26",
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    id: "27",
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    id: "28",
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
  },
  {
    id: "29",
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    id: "30",
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
];

let currentIndex = 0;

function showAbout() {
  document.getElementById("about-section").style.display = "block";
}

function closeAbout() {
  document.getElementById("about-section").style.display = "none";
}

// function goTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

function showQuote(index) {
  const quote = quotes[index];
  document.getElementById("quote-id").textContent = quote.id;
  document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("author-text").textContent = quote.author;
}

function generateQuote() {
  currentIndex = Math.floor(Math.random() * quotes.length);
  showQuote(currentIndex);
}

function NextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
}

function previousQuote() {
  currentIndex = (currentIndex - 1) % quotes.length;
  showQuote(currentIndex);
}

window.onload = function () {
  showQuote(currentIndex);
  document.getElementById("about-section").style.display = "none";
};
