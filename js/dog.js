const apiKey = 'live_6YvHLb9mjLht6v4X2gQ02OFcSfJHeWuomSwhBOa8E81SPUDDK0OGZUB8WwYCSkS1';
const apiUrl = 'https://api.thedogapi.com/v1/images/search';

async function fetchDogImage() {
    const response = await fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    });
    const data = await response.json();
    const imageUrl = data[0].url;
    document.getElementById('dog-image').src = imageUrl;
}

// Fetch and display a random dog image when the page loads
window.onload = fetchDogImage;