const langUrl = `https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/734c5eea7e10548144a18241e8f931f8/language-codes_json.json`
const sourceLanguage = 'en'

let random = ['zu', 'vi', 'th', 'sv', 'pl', 'nv', 'nr', 'mn', 'fa', 'hu', 'la', 'de', 'fr', 'hi', 'ar', 'cs', 'it', 'ja', 'ko', 'pt', 'ru', 'es']
let targetLanguage = random[Math.floor(Math.random() * random.length)];

const resultDiv = document.querySelector('section')
const form = document.querySelector('form')
const resultSection = document.querySelector('#results')
const languageDisplay = document.querySelector('#language')

resultDiv.style.display = 'none'
form.addEventListener('submit', formSubmitted)

function formSubmitted(event) {
    event.preventDefault();
    targetLanguage = random[Math.floor(Math.random() * random.length)];
    let languageArray = []
    fetch('lang.json')
        .then(response => response.json())
        .then((response) => {
            let languageArray = response
            for (const languageObject of languageArray) {
                if (languageObject.alpha2 === targetLanguage) {
                    languageDisplay.textContent = languageObject.English
                }
            }
        })

    const formData = new FormData(form)
    const searchTerm = formData.get('search')

    getSearchResults(searchTerm)
        .then(showResults)

}

function getSearchResults(searchTerm) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${searchTerm}`
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            const translation = result[0][0][0]
            return translation
        })
}

function showResults(result) {
    const transDisplay = document.querySelector('#translation')
    resultDiv.style.display = ''
    transDisplay.textContent = result;
}