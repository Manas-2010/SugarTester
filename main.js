function onBeforeFood() {
  try {
    document.getElementById("afterFood").checked = false;
  } catch (e) {
    console.error('onBeforeFood() ' + e);
  }
}

function onAfterFood() {
  try {
    document.getElementById("beforeFood").checked = false;
  } catch (e) {
    console.error('onBeforeFood() ' + e);
  }
}

function getResult() {
  console.log("getResult() entered");

  var afterFood = false;
  var beforeFood = false;
  try {
    afterFood = document.getElementById("afterFood").checked;
    beforeFood = document.getElementById("beforeFood").checked;

    console.log("afterFood:" + afterFood);
    console.log("beforeFood:" + beforeFood);

    var resultMsg = "";
    var sugarLevel = document.getElementById("sugarLevel").value;

    if (sugarLevel == "") {
      alert("Please enter sugar level.");
      console.error("getResult() Please enter sugar level.");
      return;
    }

    var sugarLevelInt = parseInt(sugarLevel);
    console.log("sugarLevelInt:" + sugarLevelInt);

    if (beforeFood)
    {
      if (sugarLevelInt < 70 )
        resultMsg = "Low sugar";
      else if (sugarLevelInt >= 101 && sugarLevelInt <= 125)
        resultMsg = "Pre-Diabetic";
      else if (sugarLevelInt > 125)
        resultMsg = "Diabetic";
      else 
        resultMsg = "Normal";
    } else if (afterFood) {  //afterFood
      if (sugarLevelInt < 70)
        resultMsg = "Low sugar";
      else if (sugarLevelInt < 140 )
        resultMsg = "Normal";
      else if (sugarLevelInt > 200)
        resultMsg = "Diabetic";
      else if (sugarLevelInt > 140)
        resultMsg = "Pre-Diabetic";
    } else {
      alert("Please select before food or after food.");
      console.error("getResult() Please select before food or after food.");
    }

    result.innerHTML = resultMsg;
  } catch (e) {
    alert(e);
    //console.error('getResult() ' + e);
  }
}
