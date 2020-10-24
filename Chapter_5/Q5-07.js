let openedWindow = null

function openWindow() {
    openedWindow = window.open("Q5-07.html")
}

function closeWindow() {
    if (openedWindow && !openedWindow.closed) {
        openedWindow.close()
    } else {
        window.close()
    }
}