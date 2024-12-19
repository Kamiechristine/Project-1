## News Articles Web App

## Overview
The News Articles Web App is a simple web application that allows users to:

Search for news articles from the wsj.com domain using the News API.
View a list of fetched news articles with their titles, descriptions, and images.
Submit new articles via a form that simulates uploading news content locally.
The app is designed to be simple and responsive, with features to search for news, display articles in a grid layout, and allow users to add their own content.

## Features
Search News: Users can search for news articles from wsj.com using a query.
Display News: News articles are displayed in a grid with titles, descriptions, and images (if available).
Submit News: Users can submit their own news articles by filling out a form (title, description, and URL).
Responsive Layout: Articles are displayed in a flexible grid layout that adapts to different screen sizes.
Tech Stack
Frontend:
HTML5
CSS3
JavaScript (ES6+)
Fetch API to access the News API (https://newsapi.org/)
Setup Instructions
Clone the repository: Clone this repository to your local machine by running the following command:


git clone https://github.com/your-username/news-articles-web-app.git
Obtain a News API Key: To fetch live news articles, you’ll need an API key from News API.

After signing up on News API, you’ll get an API key.
In your code, replace the existing apiKey in the index.js file with your own API key.
Open the app:

Navigate to the project folder and open index.html in your browser.
The app should be fully functional and will display news articles fetched from wsj.com.
File Structure


/news-articles-web-app
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles for the app
├── index.js            # JavaScript file for fetching and displaying news
└── default-image.jpg   # Placeholder image used for articles without images
## Code Explanation
HTML (index.html)
The HTML structure defines:

A search bar to search for news articles.
A news display section (#articles) to show fetched articles.
A form to submit new articles with fields for title, description, and URL.
CSS (styles.css)
The CSS file contains the styles for the following:

General page styling, including the background color and font family.
A search form with input fields and buttons styled for ease of use.
A news articles grid layout, which adapts to different screen sizes and displays articles with a clean, card-like appearance.
Hover effects and transitions to improve user interaction.
JavaScript (index.js)
The JavaScript file includes the following key functionalities:

## Fetching News:

The fetchNews function makes a GET request to the News API and retrieves articles based on the search query.
Articles are displayed with an image (if available), title, description, and a "Read more" link.
Search Functionality:

When the "Search" button is clicked, the app reads the query from the search input field and triggers a request to the News API to fetch relevant news.
News Submission:

Users can submit their own news articles through a form. When the form is submitted, a new article is added to the page, simulating news upload.
The app checks if all required fields (title, description, and URL) are filled before adding the new article.
Event Listeners:

The search button triggers the fetchNews function based on the search query.
The news form handles the form submission and adds the article to the news section if valid data is entered.

## Example
Here’s an example of how the app works:

Search for News: Enter a keyword (e.g., “technology”) into the search input and click the "Search" button. The app fetches articles related to the keyword from wsj.com and displays them.

Submit New News: Fill in the title, description, and URL in the form, then click "Submit News". The new article will appear at the top of the articles list.

Display: Articles are shown in a responsive grid layout, with each article containing:

An image (if available).
The article title, description, and a "Read more" link.
Example of News Article Display
When articles are fetched or submitted, they are displayed in a layout similar to this:


<div class="article">
    <img src="https://via.placeholder.com/150" alt="Article Image" class="article-image">
    <h3>Article Title</h3>
    <p>Article description goes here.</p>
    <a href="https://article-link.com" target="_blank">Read more</a>
</div>

## Future Enhancements
User Authentication: Allow users to log in and save their submitted articles.
Error Handling: Improve error messages for failed API requests or invalid inputs.
Pagination: Implement pagination or infinite scrolling for fetching more articles as the user scrolls down.
Styling Updates: Enhance the styling of the app with animations, custom fonts, and color schemes.
