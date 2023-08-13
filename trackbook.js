const moon = document.getElementById("moon");
const newTd = JSON.parse(localStorage.getItem("tr"))
const submit = document.getElementById("submit")
const top = document.getElementById("top")
const tr = document.getElementById("tr")
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const isbn = document.getElementById("isbn").value;
const error = document.getElementById("error");


moon.onclick = function () {
    document.body.classList.toggle('darkMode');
}


// function displayOnTable() {
//     const trElement = document.createElement('tr');
//     const titleTd = document.createElement("td")
//     const authorTd = document.createElement("td")
//     const isbnTd = document.createElement("td")
//     const errorTd = document.createElement("button")

//     titleTd.innerHTML = title;
//     authorTd.innerHTML = author;
//     isbnTd.innerHTML = isbn;
//     errorTd.innerHTML = error;

//     trElement.appendChild(titleTd)
//     trElement.appendChild(authorTd)
//     trElement.appendChild(isbnTd)
//     trElement.appendChild(error)

//     localStorage.setItem('newTd', JSON.stringify(newTd))

//     }


// function deleteError() {
//     localStorage.clear();
// }
// submit.addEventListener("click", () => {
//     if (title == '' || author == '' || isbn == '') {
//         let node = document.createTextNode("All field are required")
//         top.appendChild(node)
//         // top.innerHtml += "All fields are"
//         top.style.backgroundColor = "red";
//     } else {
//         // top.innerHtml = "Book added"
//         let node = document.createTextNode("Book added")
//         top.appendChild(node)
//         top.style.backgroundColor = "green";
//     }
// })

submit.addEventListener("click", display)
function display() {
    top.style.color = "white"
    top.style.background = "red"
    top.style.fontSize = "40px";
    top.innerHtml = "All fields are required"
}

// https://trackbook.netlify.app/