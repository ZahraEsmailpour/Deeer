let items = document.querySelectorAll('.items');
let wrapper = document.querySelector('.wrapper')
items.forEach(elem => {
    elem.addEventListener('click', () => {
        wrapper.setAttribute('style', `background-image:${elem.dataset.background} `)
    })
});