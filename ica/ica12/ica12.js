document.addEventListener('DOMContentLoaded', function() {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const answerButton = document.querySelector('#js-tweet');
    const quoteTextElement = document.querySelector('#js-quote-text');
    const answerTextElement = document.querySelector('#js-answer-text');
    const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    newQuoteButton.addEventListener('click', getQuote);
    answerButton.addEventListener('click', showAnswer);

    const storedTrivia = localStorage.getItem('christmasTrivia');
    const storedAnswer = localStorage.getItem('christmasAnswer');
    if (storedTrivia && storedAnswer) {
        displayQuote(storedTrivia);
        displayAnswer(storedAnswer);
    }

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
                localStorage.setItem('christmasTrivia', data.question);
                localStorage.setItem('christmasAnswer', data.answer);
                displayQuote(data.question);
                clearAnswer();
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

    function displayAnswer(answer) {
        answerTextElement.textContent = answer;
    }

    function clearAnswer() {
        answerTextElement.textContent = '';
    }

    function showAnswer() {
        const storedAnswer = localStorage.getItem('christmasAnswer');
        if (storedAnswer) {
            displayAnswer(storedAnswer);
        } else {
            answerTextElement.textContent = 'No trivia answer retrieved yet.';
        }
    }
}
);



