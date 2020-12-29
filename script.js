const listSpotted = document.getElementById('spotted-animals-list');

const buttonsBigFive = [...document.getElementsByClassName('big-five-button')];
buttonsBigFive.forEach((item) => {
    let newListItem = document.createElement('li');
    item.addEventListener('click', () => {
        newListItem.innerHTML = item.textContent;
        listSpotted.appendChild(newListItem);
    }
    )
})

const buttonRemove = document.getElementById('remove-first-item-button');
buttonRemove.addEventListener('click', () => {
    let child = listSpotted.firstElementChild;
    listSpotted.removeChild(child);
   
})

const buttonRemoveAll = document.getElementById('remove-all-button')
buttonRemoveAll.addEventListener('click', () => {
    let child = listSpotted.firstElementChild;
    while (child) {
        listSpotted.removeChild(child);
        child = listSpotted.firstElementChild;
    }
})


