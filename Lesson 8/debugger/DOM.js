const paragraph = document.querySelector('p')
const btn = document.querySelector('.DB')
const parent = document.querySelector('.parent')
const addChildBtn = document.querySelector('.nodeEl')

btn.addEventListener('click', () => {
    paragraph.classList.toggle('bold')
})

addChildBtn.addEventListener('click', () => {
    const child = document.createElement('div')
    child.textContent = 'Child'
    parent.appendChild(child)
})

