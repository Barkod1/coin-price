// const axios = require('axios');
const form = document.querySelector('form');
let button = document.querySelector('#button');
let input = document.querySelector('#input');
let infoBox = document.querySelector("#info-coin-box");

async function getBitcoinPrice(coin) {
    try {
        if (infoBox.children.length === 1) {
            infoBox.children[0].remove();
        }
        let data = await axios.get(`https://api.cryptonator.com/api/ticker/${coin}-usd`);
        addBitcoin(data);

    } catch (e) {
        console.log(e);
    }
    // .then(console.log(data.data.ticker.price))
    // .catch(e)(console.log(e))
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getBitcoinPrice(input.value);
    input.value = '';
})

function addBitcoin(data) {
    let p = document.createElement('p');
    let h3 = document.createElement('h3');
    let name = `coin: ${data.data.ticker.base}`;
    h3.innerText = name;
    let text = `price: ${data.data.ticker.price} USD`;
    p.append(h3);
    p.append(text);
    infoBox.appendChild(p);
}

