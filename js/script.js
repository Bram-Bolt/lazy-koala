function convertUrl() {
    // Get the input URL
    const inputUrl = document.getElementById('inputUrl').value;

    // Encode the URL to Base64
    const encodedUrl = btoa(inputUrl);

    // Create the final URL
    const finalUrl = 'https://www.koalastothemax.com/?' + encodedUrl;

    // Update the link text and href attribute
    const outputLink = document.getElementById('outputLink');
    outputLink.innerText = finalUrl;
    outputLink.href = finalUrl;
}

// Add event listener for live updates
document.getElementById('inputUrl').addEventListener('input', convertUrl);
