let getPlace = document.getElementById("dollarTree"),
    signInput = document.getElementById("sign"),
    layerInput = document.getElementById("layer"),
    submitBtn = document.querySelector(".submitBtn");

function FsubmitBtn(value) {
  let getSign = signInput.value,
      getLayer = layerInput.value;
  //alert("了解，是"+getlayer+"的"+getSign);
  let result = dollarLayer(getSign,getLayer);
  getPlace.innerHTML = result;
}

submitBtn.addEventListener("click", FsubmitBtn);

function dollarLayer (sign,layers){
    let output = "";
        for (let i = 0; i < layers; i++){
        signs =""
        for (let j = 0; j < i+1; j++){
            signs = signs + sign;
        }
        output = output + signs + "<br>";
    }
    return output;
}