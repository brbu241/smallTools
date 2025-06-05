const makeTreeForm = document.querySelector('#makeTreeForm');
const getPlace = document.querySelector("#dollarTree");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", makeTree);

function makeTree(e) {
    e.preventDefault();
    let getSign = makeTreeForm.elements.sign.value,
        getLayer = makeTreeForm.elements.layer.value;
    //alert(`了解，是${getLayer}的${getSign}`);
    getPlace.innerHTML = dollarLayer(getSign, getLayer);

}

function dollarLayer(sign, layers) {
    let output = "";
    for (let i = 0; i < layers; i++) {
        let signs = "";
        for (let j = 0; j < i + 1; j++) {
            signs = signs + sign;
        }
        output += (signs + "<br>");
    }
    return output;
}

