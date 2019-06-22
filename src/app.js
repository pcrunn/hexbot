const API = 'https://api.noopschallenge.com/hexbot';
const colors = [];

window.addEventListener('DOMContentLoaded', function() {
    // fetch colors
    fetch(`${API}?count=15`).then(function(data) {
        data.json().then(function(json) {
            // add all the colors to the list
            json.colors.forEach(function(color) {
                colors.push(color.value);
            });
            // display the colors
            colors.forEach(function(color) {
                document.write(`<div style="background-color: ${color}"><br></div>`);
            });
        });
    });
});