function loadcomponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('could not load ${file}');
            }
            return response.text();
        })
        .then(data => {
             document.getElementById(id) .innerHTML = data;})
            .catch(error => console.error('Error loading component:', error));
        }
           document.addEventListener("DOMContentLoaded", () => {
                loadcomponent("navbar", "navbar.html");
            loadcomponent("footer", "footer.html");
        });