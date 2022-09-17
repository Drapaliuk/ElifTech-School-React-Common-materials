const click = document.querySelector('.click')
const doubleClick = document.querySelector('.doubleClick')
const uncaught = document.querySelector('.uncaught')
const caught = document.querySelector('.caught')

click.addEventListener('click', event => {
    console.log(event)
})

doubleClick.addEventListener('dblclick', event => {
    console.log(event)
})

caught.addEventListener('click', event => {
    try {
        throw new Error('Caught exception')
    } catch (error) {
        
    }
})

uncaught.addEventListener('click', event => {
    throw new Error('Uncaught exception')
})



window.addEventListener('wheel',  () => {
    // console.log('Wheel')
})

window.addEventListener('mousemove', () => {
    // console.log('Move')
})

