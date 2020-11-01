window.addEventListener("load", (event) => {
    showTooMuchPhotos()
})

function showTooMuchPhotos() {
    const canvas = document.getElementById("mycanvas")
    const gContext = /* ① */
    gContext.fillStyle = "yellow"
    gContext.fillRect(0, 0, canvas.width, canvas.height)
    const image = new /* ② */
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