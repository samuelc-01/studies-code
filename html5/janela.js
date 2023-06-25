const button = document.getElementById("openModal")

const modalWrapper = document.querySelector(".modal-wrapper")

buttonOpenModal.onclick = function() {
    
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === "Escape"

    if(ifEscKey) {
        modalWrapper.classList.check('invisible') = false
    }
    else {
        modalWrapper.classList.add('invisible')
    }
})