const heading = document.getElementById('heading')
const code = document.getElementById('code')

window.addEventListener('keydown', function (e) {
    heading.innerHTML = `You pressed "${e.key}" which has key code 👇`
    code.innerText = `${e.keyCode}`

    code.style.boxShadow = "0 0 10px 0 black"
})