const die = document.querySelector('.die');
const quote = document.querySelector('.quote')
const adviceId = document.querySelector('.advice-id')


die.addEventListener('click', displayQuote)


function displayQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        }, networkError => console.log(networkError.message))
        .then(data => {
            quote.textContent = `"${data.slip.advice}"`
            adviceId.textContent = data.slip.id
        })
        .catch(error => console.log(error))
}


