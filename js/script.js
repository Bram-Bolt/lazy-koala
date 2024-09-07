function convertUrl() {
    // Get the input URL
    let inputUrl = document.getElementById('inputUrl').value.trim();

    // Check if the URL starts with "http://" or "https://"
    if (!inputUrl.startsWith('http://') && !inputUrl.startsWith('https://')) {
        // Prepend "http://" if neither is present
        inputUrl = 'http://' + inputUrl;
    }

    // Encode the URL to Base64
    const encodedUrl = window.btoa(inputUrl);

    // Create the final URL
    const finalUrl = 'https://www.koalastothemax.com/?' + encodedUrl;

    // Update the link text and href attribute
    const outputLink = document.getElementById('outputLink');
    outputLink.innerText = finalUrl;
    outputLink.href = finalUrl;
}

// Add event listener for dynamic updating
document.getElementById('inputUrl').addEventListener('input', convertUrl);
