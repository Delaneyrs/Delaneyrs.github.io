document.addEventListener('DOMContentLoaded', function() {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const tweetButton = document.querySelector('#js-tweet');
    const quoteTextElement = document.querySelector('#js-quote-text');
    const loadingElement = document.querySelector('#loading');
    const endpoint = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
    const apiKey = 'ju4WU4AyFun0PHSRvybsig==cXXTMzudlyu3dQKF'; 

    newQuoteButton.addEventListener('click', getQuote);
    tweetButton.addEventListener('click', tweetQuote);

    function getQuote() {
        loadingElement.style.display = 'block';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/dadjokes?limit=1',
            headers: { 'X-Api-Key': 'ju4WU4AyFun0PHSRvybsig==cXXTMzudlyu3dQKF' },
            contentType: 'application/json',
            success: function(result) {
                const joke = result[0].joke;
                displayQuote(joke);
                localStorage.setItem('dadJoke', joke);
                loadingElement.style.display = 'none';
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                alert('Joke not found :(');
                loadingElement.style.display = 'none';
            }
        }
    );
    }

    function displayQuote(quote) {
        quoteTextElement.textContent = quote;
    }

    function tweetQuote() {
        const quote = quoteTextElement.textContent;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
        window.open(tweetUrl, '_blank');
    }

    
    const storedJoke = localStorage.getItem('dadJoke');
    if (storedJoke) {
        displayQuote(storedJoke);
    }
}
);

