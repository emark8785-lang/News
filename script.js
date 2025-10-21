const newsContainer = document.getElementById('news-container');

const articles = [
  {
    title: "Breaking: AI Revolution in 2025",
    img: "https://via.placeholder.com/400x200",
    description: "Artificial intelligence continues to transform industries worldwide."
  },
  {
    title: "Sports: Championship Finals Tonight",
    img: "https://via.placeholder.com/400x200",
    description: "Fans are eager to see which team takes home the trophy this year."
  }
];

function displayNews() {
  newsContainer.innerHTML = '';
  articles.forEach(article => {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');
    articleEl.innerHTML = `
      <img src="${article.img}" alt="${article.title}">
      <h2>${article.title}</h2>
      <p>${article.description}</p>
    `;
    newsContainer.appendChild(articleEl);
  });
}

displayNews();
