var Boutton1 = document.getElementById('BTN1'),
    Boutton2 = document.getElementById('BTN2');
    document.getElementById('BTN2').style.display= 'none';

Boutton1.onclick = function() {
    document.body.style.background = "red";
    document.getElementById('BTN1').style.display= 'none';
    document.getElementById('BTN2').style.display= 'inline-block';

}


Boutton2.onclick = function() {
    document.body.style.background = "#36454F";
    document.getElementById('BTN2').style.display= 'none';
    document.getElementById('BTN1').style.display= 'inline-block';

};

var

    myInpt = document.getElementById("inpt");

    myDiv = document.getElementById("iq");

    myCurrenty = document.getElementById("Currenty");

myCurrenty.onchange = function () {


    myDiv.innerHTML = myInpt.value * myCurrenty.value; 


};


var

    myInpt = document.getElementById("inpt");

    myDiv = document.getElementById("iq");

    myCurrenty = document.getElementById("Currenty");

myCurrenty.onchange = function () {


    myDiv.innerHTML = myInpt.value * myCurrenty.value; 


};









