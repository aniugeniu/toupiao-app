// script.js
let count136 = 0;
let count127 = 0;

function vote(version) {
    if (version === '1.36') {
        count136++;
        document.getElementById('count1.36').innerText = count136;
    } else if (version === '1.27') {
        count127++;
        document.getElementById('count1.27').innerText = count127;
    }
}