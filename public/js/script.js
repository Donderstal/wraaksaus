function getSlideshow() {
    setInterval(genRandomImage, 2000)
}

function genRandomImage() {
    const headerImage = document.getElementById("headerImage")
    const src = headerImage.getAttribute('src')
    let fileNum = ( parseFloat(src.split('_')[1].split('.')[0]) + 1 )
    fileNum = (fileNum == 13) ? 1 : fileNum
    headerImage.setAttribute("src", "../../public/images/ws_" + fileNum + ".jpg")   
}