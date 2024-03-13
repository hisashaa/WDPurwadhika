function updateCharacterCount() {
    const tweetInput = document.getElementById('tweetInput');
    const charCount = document.getElementById('charCount');
    const submitBtn = document.getElementById('submitBtn');

    const tweetLength = tweetInput.value.length;
    charCount.textContent = `${tweetLength}/50`;

    if (tweetLength > 50) {
        charCount.style.color = 'red';
        submitBtn.disabled = true;
    } else {
        charCount.style.color = '#555';
        submitBtn.disabled = false;
    }
}

function submitTweet() {
    const tweetInput = document.getElementById('tweetInput');
    alert(`Tweet submitted: ${tweetInput.value}`);
    // You can add further logic here to handle the tweet submission
}
