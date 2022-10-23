
//Calculation Button
const calcButton = document.querySelector("[data-calculation-button]");


//Function - Forms Validation
function formsValidation(){

  const tvProgram = document.querySelector("[data-tv-program]");
  const audiencePoints = document.querySelector("[data-audience-points]");
  if(tvProgram.value == "" && audiencePoints.value == ""){
    alert("DIGITE: \n- O nome do programa de tv que deseja obter o cálculo de audiência.\n - Quantos pontos de audiência teve o programa.");
  }else if(tvProgram.value == ""){
    alert("Digite o nome do programa de tv que deseja obter o cálculo de audiência!");
  }else if(audiencePoints.value == ""){
    alert("Digite Quantos pontos de audiência teve o programa!");
  }
  
}

//Event Calculation Button
calcButton.addEventListener("click", () =>{
  formsValidation();
});
