function getImage() {
    let xhttp = new XMLHttpRequest();

    // EJEMPLO REQUEST HTTP CON AJAX
    xhttp.open('GET', 'https://random.dog/woof.json', true);
    xhttp.send();
    xhttp.onreadystatechange =  () => {
        let responseObject = JSON.parse(xhttp.responseText);
        document.getElementById("imagen-perro").setAttribute("src", responseObject.url);
    };
}