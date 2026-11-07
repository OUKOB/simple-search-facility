
const information = [
    {
        id: 1,
        title: "HTML",
        description: "HTML structures web pages."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS styles web pages."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript adds interactivity to websites."
    },
    {
        id: 4,
        title: "Python",
        description: "Python is a programming language."
    },
    {
        id: 5,
        title: "Git",
        description: "Git tracks changes in source code."
    },
    {
        id: 6,
        title: "GitHub",
        description: "GitHub hosts and shares software projects."
    }
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const searchResults = document.getElementById("searchResults");
const resultCount = document.getElementById("resultCount");

function displayResults(results) {

    searchResults.innerHTML = "";

    resultCount.textContent =
        results.length + " result(s) found";

    if (results.length === 0) {
        searchResults.textContent =
            "No matching information found.";
        return;
    }

    results.forEach(function(item) {

        const resultItem = document.createElement("div");
        resultItem.className = "result-item";

        const heading = document.createElement("h3");
        heading.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        resultItem.appendChild(heading);
        resultItem.appendChild(description);

        searchResults.appendChild(resultItem);
    });
}

function searchInformation() {

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    const filteredResults = information.filter(function(item) {

        return (
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword)
        );

    });

    displayResults(filteredResults);
}

searchButton.addEventListener("click", searchInformation);

searchInput.addEventListener("input", searchInformation);

clearButton.addEventListener("click", function() {

    searchInput.value = "";
    displayResults(information);

});

displayResults(information);
