const apiKey = 'f5ea4dd9e37d493e9332b7555d7e6f22';
const apiUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + apiKey;

// DOM Elements
const articlesContainer = document.getElementById('articles');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const newsForm = document.getElementById('news-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// Fetch and display articles
const fetchNews = async (query = '') => {
    let url = apiUrl;
    if (query) {
        url += `&q=${query}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Clear previous articles
        articlesContainer.innerHTML = '';

        data.articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            // Add image if available
            const imageUrl = article.urlToImage ? article.urlToImage : 'default-image.jpg'; // fallback image
            articleElement.innerHTML = `
                <img src="${imageUrl}" alt="Article Image" class="article-image">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            articlesContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

// Search button click handler
searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    fetchNews(searchQuery);
});

// Form submission handler (simulating news upload)
newsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const url = urlInput.value.trim();

    if (title && description && url) {
        // Simulate uploading the news (display it locally)
        const newArticleElement = document.createElement('div');
        newArticleElement.classList.add('article');
        
        newArticleElement.innerHTML = `
            <img src="default-image.jpg" alt="Article Image" class="article-image">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${url}" target="_blank">Read more</a>
        `;
        
        articlesContainer.prepend(newArticleElement);

        // Clear the form fields
        titleInput.value = '';
        descriptionInput.value = '';
        urlInput.value = '';
    } else {
        alert('Please fill in all fields');
    }
});

// Initial fetch of news
fetchNews();

