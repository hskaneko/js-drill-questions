window.addEventListener("load", (event) => {
    console.log(event)
    window.onbeforeunload = (e) => {
        console.log(e)
        e.preventDefault()
        e.returnValue = "unload"
    }
})