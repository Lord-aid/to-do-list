const button = document.getElementById ('button')
const btn = document.getElementById('btn')
const body = document.body

button.style.backgroundColor  = 'blue'
btn.style.backgroundColor  = 'red'

button.addEventListener('click', function() {
    const img = document.createElement('img')
    img.src = 'https://3dnews.ru/assets/external/illustrations/2011/06/09/612444/22967.jpg'
    body.append(img)


    btn.addEventListener('click', function() {
        img.remove()
    })
})



    