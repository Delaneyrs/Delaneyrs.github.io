document.addEventListener('DOMContentLoaded', function() {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const tweetButton = document.querySelector('#js-tweet');
    const quoteTextElement = document.querySelector('#js-quote-text');
    const loadingElement = document.querySelector('#loading');
    const endpoint = 'https://icanhazdadjoke.com/';
    const userAgent = 'My Dad Jokes App (https://delaneyrs.github.io/wa/wa12/wa12.html)';

    newQuoteButton.addEventListener('click', getQuote);
    tweetButton.addEventListener('click', tweetQuote);

    function getQuote() {
        loadingElement.style.display = 'block';
        $.ajax({
            method: 'GET',
            url: endpoint,
            headers: {
                'Accept': 'application/json',
                'User-Agent': userAgent
            },
            success: function(result) {
                const joke = result.joke;
                displayQuote(joke);
                localStorage.setItem('dadJoke', joke);
                loadingElement.style.display = 'none';
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                alert('Joke not found :(');
                loadingElement.style.display = 'none';
            }
        });
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



