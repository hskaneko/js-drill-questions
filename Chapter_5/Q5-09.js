window.addEventListener("load", (event) => {
    showTooMuchPhotos()
})

function showTooMuchPhotos() {
    const canvas = document.getElementById("mycanvas")
    const gContext = canvas.getContext('2d')
    gContext.fillStyle = "yellow"
    gContext.fillRect(0, 0, canvas.width, canvas.height)
    const image = new Image()
    image.src = "cat.jpg"
    image.onload = () => {
        let imageX, imageY
        const imageW = canvas.width / 10;
        const imageH = image.height * imageW / image.width
        for (let i = 0; i < 30; i++) {
            imageX = Math.random() * (canvas.width - imageW)
            imageY = Math.random() * (canvas.height - imageH)
            gContext.drawImage(image, imageX, imageY, imageW, imageH)
        }
    }
}