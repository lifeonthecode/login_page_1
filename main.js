const emailInput = document.getElementById('email')
const password = document.getElementById('password')
const image_1 = document.getElementById('image_1')
const image_2 = document.getElementById('image_2')
const image_3 = document.getElementById('image_3')



emailInput.addEventListener('focus', () => {
    image_1.style.display = 'none'
    image_2.style.display = 'block'
    image_3.style.display = 'none'
});


password.addEventListener('focus', () => {
    image_1.style.display = 'none'
    image_2.style.display = 'none'
    image_3.style.display = 'block'
});



const imagesPosition = () => {
    image_1.style.display = 'block'
    image_2.style.display = 'none'
    image_3.style.display = 'none'
}


emailInput.addEventListener('blur', imagesPosition)
password.addEventListener('blur', imagesPosition)