let form = document.getElementById('form-wrapper')

document.addEventListener('click', function (event) {

    if (event.target.matches('#contactbutton')) showForm()
    if (event.target.matches('#close-modal')) hideForm()
})

function showForm() {
    form.style.display = 'flex'
}

function hideForm() {
    form.style.display = 'none'
}
