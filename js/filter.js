// ФИЛЬТР

const list = document.querySelector(".filter__buttons"),
    items = document.querySelectorAll('.grid__item'),
    listItems = document.querySelectorAll('.filter__button')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        listItems.forEach(listItem => listItem.classList.remove('active_f'))
        if (target.classList.contains('filter__button')) {
            target.classList.add('active_f')
        }
        // Если содержит то-то то-то, то показываем или скрываем блоки
        switch(targetId) {
            case 'all':
                getFilter('grid__item')
                break
            case 'pvs':
                getFilter(targetId)
                break
            case 'kps':
                getFilter(targetId)
            break
            case 'sss':
                getFilter(targetId)
            break
        }
    })
}

function getFilter(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

filter()