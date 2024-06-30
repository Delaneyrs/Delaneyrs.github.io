document.addEventListener('DOMContentLoaded', function() {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    newQuoteButton.addEventListener('click', getQuote);

    function getQuote() {
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                return response.json();
            }
        )
            .then(data => {
                displayQuote(data.question);
            }
        )
            .catch(error => {
                console.error('Error fetching quote:', error);
                alert('Failed to fetch quote. Please try again.');
            }
        );
    }

    function displayQuote(quote) {
        const quoteTextElement = document.querySelector('#js-quote-text');
        quoteTextElement.textContent = quote;
    }
}
);

