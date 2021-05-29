let getPlace = document.getElementById("dollarTree");

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
};
let a = dollarLayer("塔",9);

getPlace.innerHTML = a;