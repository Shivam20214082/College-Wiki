// Replace YOUR_API_KEY with your actual API key
const apiKey = "e3dc8bdd41a0482f88f71b30307719ad";
const category = "general"; // Replace with the desired category (e.g., sports, technology, business)
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&q=education&apiKey=e3dc8bdd41a0482f88f71b30307719ad`;

function fetchNews() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";

      if (data.status === "ok" && data.articles.length > 0) {
        for (let i = 0; i < 3; i++) {
          const article = data.articles[i];
          const { title, publishedAt, description, urlToImage, url } = article;

          const newsItem = document.createElement("div");
          newsItem.className = "news1";

          const newsImage = document.createElement("img");
          newsImage.className = "news-image";
          newsImage.src = urlToImage;
          newsImage.alt = title;

          const newsDetails = document.createElement("div");
          newsDetails.className = "news-details";

          const newsTitle = document.createElement("h3");
          newsTitle.className = "news-title";
          newsTitle.textContent = title;

          const newsDate = document.createElement("p");
          newsDate.className = "news-date";
          newsDate.textContent = new Date(publishedAt).toDateString();

          const newsDescription = document.createElement("p");
          newsDescription.className = "news-description";
          newsDescription.textContent = description;

          const newsLink = document.createElement("a");
          newsLink.href = url;
          newsLink.target = "_blank";
          newsLink.textContent = "Read More";
          newsLink.style = "color:white; border:solid black; background-color:red;border-radius:5px;float:right;padding:5px";

          newsDetails.append(newsTitle, newsDate, newsDescription, newsLink);
          newsItem.append(newsImage, newsDetails);
          newsContainer.appendChild(newsItem);
        }
      } else {
        const noNewsMessage = document.createElement("p");
        noNewsMessage.textContent = "No news available.";
        newsContainer.appendChild(noNewsMessage);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Fetch news on page load
fetchNews();



function loadMoreNews(){
    window.location.href="news.html";
}