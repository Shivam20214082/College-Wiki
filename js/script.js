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



// Get all the colleges
const collegeItems = document.querySelectorAll(".top-colleges-item");

const collegeData = [
  { id: "iitbombay", name: "IIT Bombay", link: "bombay.html" },
  { id: "idelhi", name: "IIT Delhi", link: "delhi.html" },
  { id: "iroorkee", name: "IIT Roorkee", link: "roorkee.html" },
  { id: "ntrichy", name: "NIT Trichy", link: "trichy.html" },
  { id: "nallahabad", name: "MNNIT Allahabad", link: "mnnit.html" },
  { id: "nsurathkal", name: "NIT Surathkal", link: "suratkal.html" },
  { id: "jeemain", name: "Jee Main", link: "jeemain.html" },
  { id: "jeeadvanced", name: "Jee Advanced", link: "jeeadvanced.html" },
];

// Log the college data to the console
console.log(collegeData);

// Get references to the search input and results container
const searchInput = document.getElementById("search-input");
const searchResultsContainer = document.getElementById("search-results");

// Add an event listener to the search input
searchInput.addEventListener("input", (e) => {
  // Get the search query
  const query = e.target.value.toLowerCase().trim();

  // If there is no search query, hide the search results container and exit the event listener
  if (query === "") {
    searchResultsContainer.style.display = "none";
    return;
  }

  // Filter the colleges based on the search query
  const filteredColleges = collegeData.filter((college) => {
    return college.name.toLowerCase().includes(query);
  });

  // Update the search results container with the filtered colleges
  updateSearchResults(filteredColleges);
});

// Add a click event listener to the document object to hide the search results container when the user clicks outside of it
document.addEventListener("click", (e) => {
  // Check if the clicked element is inside the search container or not
  if (
    !searchInput.contains(e.target) &&
    !searchResultsContainer.contains(e.target)
  ) {
    searchResultsContainer.style.display = "none";
  }
});

// Function to update the search results container
function updateSearchResults(colleges) {
  // Clear the current search results
  searchResultsContainer.innerHTML = "";

  // Loop through each college and add its name and link to the container
  colleges.forEach((college) => {
    const collegeElement = document.createElement("div");
    collegeElement.classList.add("search-result");

    const linkElement = document.createElement("a");
    linkElement.href = college.link;
    linkElement.textContent = college.name;

    collegeElement.appendChild(linkElement);
    searchResultsContainer.appendChild(collegeElement);
  });

  // Display the search results container if there are results, otherwise hide it
  if (colleges.length > 0) {
    searchResultsContainer.style.display = "block";
  } else {
    searchResultsContainer.style.display = "none";
  }
}
