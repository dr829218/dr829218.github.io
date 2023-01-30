const myImage = document.querySelector('img[src="firefox-icon.png"]')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox-icon.png") {
    myImage.setAttribute("src", "firefox2.png");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
}
