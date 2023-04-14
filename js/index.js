const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  
  
  const searchInput = document.querySelector("#search-input");
  const searchTerm = searchInput.value;
  const url = `https://api.github.com/search/users?q=${searchTerm}`;
  
  const headers = new Headers({
    "Accept": "application/vnd.github.v3+json"
  });
  
  const request = new Request(url, {
    method: "GET",
    headers: headers
  });
  
  fetch(request)
    .then(response => response.json())
    .then(data => {
     
      const users = data.items;
      
    })
    .catch(error => console.log(error));
}


function handleUserClick(event) {
  const username = event.target.dataset.username;
  const url = `https://api.github.com/users/${username}/repos`;
  
  const headers = new Headers({
    "Accept": "application/vnd.github.v3+json"
  });
  
  const request = new Request(url, {
    method: "GET",
    headers: headers
  });
  
  fetch(request)
    .then(response => response.json())
    .then(data => {
      
      const repos = data;
      
    })
    .catch(error => console.log(error));
}


const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", handleToggle);

let currentSearchType = "user";

function handleToggle() {
  if (currentSearchType === "user") {
    currentSearchType = "repo";
  } else {
    currentSearchType = "user";
  }
}