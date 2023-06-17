const apiKey = "ee10c3e410ede0b799c1072f61c0110a";
const apiUrl = `https://gnews.io/api/v4/search?q=education&token=ee10c3e410ede0b799c1072f61c0110a`;

function fetchNews() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";

      if (data.articles && data.articles.length > 0) {
        const newsSection = document.createElement("section");
        newsSection.className = "news-section";

        for (let i = 0; i < 3; i++) {
          const article = data.articles[i];
          const { title, publishedAt, description, image, url } = article;

          const newsItem = document.createElement("div");
          newsItem.className = "news1";

          const newsImage = document.createElement("img");
          newsImage.className = "news-image";
          newsImage.alt = title;
          newsImage.src = image;


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
          newsLink.style =
            "color:white; border:solid black; background-color:red;border-radius:5px;float:right;padding:5px";

          newsDetails.append(newsTitle, newsDate, newsDescription, newsLink);
          newsItem.append(newsImage, newsDetails);
          newsSection.appendChild(newsItem);
        }

        newsContainer.appendChild(newsSection);
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

function loadMoreNews() {
  window.location.href = "news.html";
}
