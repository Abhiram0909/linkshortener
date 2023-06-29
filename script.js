function shortenURL() {
    var inputElement = document.getElementById('urlInput');
    var url = inputElement.value;
  
    // Replace 'YOUR_ACCESS_TOKEN' with your Bit.ly access token
    var accessToken = '9f2e00373142a5327a64a3c84c8d1afad0cbccf9';
  
    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      body: JSON.stringify({ long_url: url })
    })
    .then(response => response.json())
    .then(data => {
      var shortenedURL = data.link;
  
      var shortenedURLElement = document.getElementById('shortenedURL');
      shortenedURLElement.textContent = shortenedURL;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  