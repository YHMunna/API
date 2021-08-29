function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))

}

function displayComments(comments) {
    const paragraph = document.getElementById('displayData');
    for (const comment of comments) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerText = comment.name
        ul.appendChild(li)
        paragraph.appendChild(ul)
    }

}
// loadData()...........if u want load data without click just call the function where html is active.