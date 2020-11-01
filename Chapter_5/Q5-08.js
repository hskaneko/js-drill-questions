window.addEventListener("load", (event) => {
    console.log(event)
    window./* ① */ = (e) => {
        console.log(e)
        e.preventDefault()
        e./* ② */ = "unload"
    }
})