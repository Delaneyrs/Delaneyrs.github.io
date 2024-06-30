document.addEventListener('DOMContentLoaded', function() {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const answerButton = document.querySelector('#js-tweet');
    const quoteTextElement = document.querySelector('#js-quote-text');
    const answerTextElement = document.querySelector('#js-answer-text');
    const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
    
    newQuoteButton.addEventListener('click', getQuote);
    answerButton.addEventListener('click', showAnswer);

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
                localStorage.setItem('christmasTrivia', JSON.stringify(data.question));
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
        quoteTextElement.textContent = quote;
    }

    function showAnswer() {
        const storedTrivia = localStorage.getItem('christmasTrivia');
        if (storedTrivia) {
            answerTextElement.textContent = storedTrivia;
        } else {
            answerTextElement.textContent = 'No trivia question retrieved yet.';
        }
    }
}
);


