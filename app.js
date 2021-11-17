var Input=document.getElementById("input");
var Output=document.getElementById("output");
var button=document.getElementById("check");

button.addEventListener("click", getoutput);

function getoutput(){
    //console.log("clicked");
  //  console.log(Input.value);
  showMessage(Input.value);
}

function showMessage(){
    Output.value= Input.value;
}