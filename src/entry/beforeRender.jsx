function setBaseFontSize() {
    let html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
}

export default function preRender() {
    setBaseFontSize();
}