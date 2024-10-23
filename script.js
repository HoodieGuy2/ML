document.getElementById("ML1").addEventListener("click", crazy1);
document.getElementById("ML2").addEventListener("click", crazy2);

function crazy1() {
  var PNo = document.getElementById("PNI").value;
  var Ao = document.getElementById("AI").value;
  var PTNo = document.getElementById("PTVI").value;
  var No = document.getElementById("NI").value;

  var output = `There are too many ${PNo} on this
  ${Ao} airplane!" I screamed. "Somebody has to
  ${PTNo} on the ${No} to solve
  this problem`;

  document.getElementById("output").innerHTML = output;
}

function crazy2() {
  var PNo = document.getElementById("PNI").value;
  var Ao = document.getElementById("AI").value;
  var PTNo = document.getElementById("PTVI").value;
  var No = document.getElementById("NI").value;

  var output = `Woah! Thats a lot of ${PNo} here!
  This is way too ${Ao}! Can you guys 
  ${PTNo} so that the ${No} can be fixed?`;

  document.getElementById("output").innerHTML = output;
}
