const makeTreeForm = document.querySelector('#makeTreeForm');
const getPlace = document.querySelector("#dollarTree");

makeTreeForm.addEventListener("submit", makeTree);

function makeTree(e) {
    e.preventDefault();
    let getSign = this.elements.sign.value,
        getLayer = this.elements.layer.value;
    //alert(`了解，是${getLayer}的${getSign}`);
    getPlace.innerHTML = dollarLayer(getSign, getLayer);

}

function dollarLayer(sign, layers) {
    let output = "";
    for (let i = 0; i < layers; i++) {
        signs = ""
        for (let j = 0; j < i + 1; j++) {
            signs = signs + sign;
        }
        output += (signs + "<br>");
    }
    return output;
}

