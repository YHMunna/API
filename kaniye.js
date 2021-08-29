const loadQuotes = () => {
    const url = 'https://api.kanye.rest/'
    fetch(url)
        .then(res => res.json())
        .then(data => displayQoute(data))
}

const displayQoute = (data) => {
    const blockQouteElement = document.getElementById('qoute');
    blockQouteElement.innerText = data.quote;
}