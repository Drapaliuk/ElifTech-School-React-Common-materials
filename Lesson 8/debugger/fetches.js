const makeFetch = document.querySelector('.fetch')

makeFetch.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(json => console.log(json))
})