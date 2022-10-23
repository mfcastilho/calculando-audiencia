

const calcButton = document.querySelector("[data-calculation-button]");
  //Event Calculation Button
  calcButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const resp =  formsValidation();

    if(resp == true){
      return;
    }
    // getInputInfos();

    // // const printState = document.querySelector("[data-index-in-print-state]");
    // // printState.style.display = "flex";

    // // const fillingState = document.querySelector("[data-index-in-filling-state]");
    // // fillingState.style.display = "none";
});





//Pegando as informações passadas pelo usuário
function getInputInfos(){

  const tvProgramName = document.querySelector("[data-tv-program]");

  const region = document.querySelector('input[name="radio-button"]:checked');

  const audiencePoints = document.querySelector("[data-audience-points]");


  const objectTvProgram = infosAudienciaAtracao(region.value,audiencePoints.value,tvProgramName.value);
  
  console.log("Objeto-informations"+objectTvProgram.nome_atracao);

  setInputInfos(tvProgramName.value, objectTvProgram.praca, audiencePoints.value);
  printCalculationResult(objectTvProgram);

}

function printCalculationResult(objectTvProgram){

  document.querySelector("[data-viewers-result]").innerHTML = "";
  document.querySelector("[data-result-of-households]").innerHTML = "";
  
  
  const viewsResultDiv = document.querySelector("[data-viewers-result]");
  const resultHouseholdsDiv = document.querySelector("[data-result-of-households]");

  viewsResultDiv.style.display = "flex";
  resultHouseholdsDiv.style.display = "flex";


  const viewsResult = document.createElement("span");
  const householdsResult = document.createElement("span");

  viewsResult.innerHTML = objectTvProgram.tot_telespectadores;
  householdsResult.innerHTML = objectTvProgram.tot_domicilios;


  console.log(viewsResult.innerHTML);
  console.log(householdsResult.innerHTML);
  
  viewsResult.style.fontSize = "4.1rem";
  householdsResult.style.fontSize = "4.1rem";
  
 
  
  viewsResultDiv.appendChild(viewsResult);
  resultHouseholdsDiv.appendChild(householdsResult);


}




//Imprimindo na tela as informaçõe spassadas pelo usuário
function setInputInfos(tvProgramName, region, audiencePoints){

  
  document.querySelector("[data-print-program-name]").innerHTML = "";
  document.querySelector("[data-print-region-name]").innerHTML = "";
  document.querySelector("[data-print-audience-points]").innerHTML = "";
  
  const span1 = document.createElement("span");
  span1.innerHTML = tvProgramName;
  
  
  const span2 = document.createElement("span");
  span2.innerHTML = region;
  

  const span3 = document.createElement("span");
  span3.innerHTML = audiencePoints;
  
  
  const div = document.querySelector("[data-print-program-name]");
  div.appendChild(span1);

  const div2 = document.querySelector("[data-print-region-name]");
  div2.appendChild(span2);

  const div3 = document.querySelector("[data-print-audience-points]");
  div3.appendChild(span3);

  

}






function infosAudienciaAtracao(pracaDesejada, totalPontosAtracao, nomeAtracao){

  pracaDesejada = pracaDesejada.toLowerCase();

  let numerosReferenciaPontoIbopeTv = [
    pnt = {
      nome_praca:"pnt",
      qtd_domicilios:258.821,
      ponto: 713.821 
    },
    gde_sp = {
      nome_praca:"sp",
      qtd_domicilios:74.666,
      ponto: 205.755, 
    },
    gde_rj = {
      nome_praca:"rj",
      qtd_domicilios:47.601,
      ponto: 124.692, 
    },
    gde_campinas = {
      nome_praca:"campinas",
      qtd_domicilios:8.035,
      ponto: 22.328, 
    },
    gde_bh = {
      nome_praca:"bh",
      qtd_domicilios:20.542,
      ponto: 55.282, 
    },
    gde_vitoria = {
      nome_praca:"vitoria",
      qtd_domicilios:6.673,
      ponto: 18.457, 
    },
    gde_porto_alegre = {
      nome_praca:"porto_alegre",
      qtd_domicilios:16.334,
      ponto: 40.462, 
    },
    gde_curitiba = {
      nome_praca:"curitiba",
      qtd_domicilios:11.628,
      ponto: 31.945, 
    },
    gde_florianopolis = {
      nome_praca:"florianopolis",
      qtd_domicilios:4.302,
      ponto: 11.084, 
    },
    gde_goiania = {
      nome_praca:"goiania",
      qtd_domicilios:8.682,
      ponto: 24.166, 
    },
    gde_df = {
      nome_praca:"df",
      qtd_domicilios:9.335,
      ponto: 27.604, 
    },
    gde_salvador = {
      nome_praca:"salvador",
      qtd_domicilios:12.813,
      ponto: 35.591, 
    },
    gde_fortaleza = {
      nome_praca:"fortaleza",
      qtd_domicilios:12.193,
      ponto: 36.995, 
    },
    gde_recife = {
      nome_praca:"recife",
      qtd_domicilios:12.529,
      ponto: 36.186, 
    },
    gde_belem = {
      nome_praca:"belem",
      qtd_domicilios:7.241,
      ponto: 22.726, 
    },
    gde_manaus = {
      nome_praca:"manaus",
      qtd_domicilios:6.247,
      ponto: 20.547, 
    }
  ]

  
  
  let praca = pegaInfosPraca(pracaDesejada, numerosReferenciaPontoIbopeTv);

  
  let pracaNome = fullRegionName(praca);

  let totTelespectadores = calculaQtdTelespectadores(praca, totalPontosAtracao);
  
  let totDomicilios = calculaQtdDomicilios(praca,totalPontosAtracao);
  

  const numeros_da_atracao = {
    nome_atracao: nomeAtracao,
    praca: pracaNome,
    tot_domicilios:totDomicilios,
    tot_telespectadores:totTelespectadores
  }


  console.log("---NÚMEROS DA ATRAÇÃO---");
  console.log(`Nome da Atração: ${numeros_da_atracao.nome_atracao}`)
  console.log(`Praça desejada pelo usuário: ${numeros_da_atracao.praca}`);
  console.log(`Total de telespectadores: ${numeros_da_atracao.tot_telespectadores.toFixed(3)}`);
  console.log(`Total de domicílios: ${numeros_da_atracao.tot_domicilios.toFixed(3)}`);

  return numeros_da_atracao;
}
// }infosAudienciaAtracao("rj", 42, "Final da copa do Brasil de 2022");



function pegaInfosPraca(pracaDesejada, mercado_array){

  for(let praca of mercado_array){
    if(pracaDesejada == praca.nome_praca){
      return praca;
    }  
  }

  return "Não foi encontrada a praça desejada!"; 
}


function calculaQtdTelespectadores(praca,totalPontosAtracao){

  let totTelespectadores = praca.ponto*totalPontosAtracao;
  return totTelespectadores;
}


function calculaQtdDomicilios(praca,totalPontosAtracao){

  let totDomicilios = praca.qtd_domicilios*totalPontosAtracao;
  return totDomicilios;
}


function getButton(){
  //Calculation Button
  const calcButton = document.querySelector("[data-calculation-button]");
  //Event Calculation Button
  calcButton.addEventListener("click", (event) =>{
    event.preventDefault();
  formsValidation();
});
}

//validando formulários
function formsValidation(){

  const tvProgram = document.querySelector("[data-tv-program]");
  const audiencePoints = document.querySelector("[data-audience-points]");
  if(tvProgram.value == "" && audiencePoints.value == ""){
    alert("DIGITE: \n- O nome do programa de tv que deseja obter o cálculo de audiência.\n - Quantos pontos de audiência teve o programa.");
  }else if(tvProgram.value == ""){
    alert("Digite o nome do programa de tv que deseja obter o cálculo de audiência!");
  }else if(audiencePoints.value == ""){
    alert("Digite Quantos pontos de audiência teve o programa!");
  }else{

    getInputInfos();

    const printState = document.querySelector("[data-index-in-print-state]");
    printState.style.display = "flex";

    const fillingState = document.querySelector("[data-index-in-filling-state]");
    fillingState.style.display = "none";
    return false;
  }

  return true;
  
}



//Passa o nome da região por extenso
function fullRegionName(praca){


  if(praca.nome_praca == "pnt"){
    praca.nome_praca = "Painel Nacional de TV";
  }else if(praca.nome_praca == "sp"){
    praca.nome_praca = "Grande São Paulo";
  }else if(praca.nome_praca == "rj"){
    praca.nome_praca = "Grande Rio de Janeiro";
  }else if(praca.nome_praca == "campinas"){
    praca.nome_praca = "Grande Campinas";
  }else if(praca.nome_praca == "bh"){
    praca.nome_praca = "Grande Belo Horizonte";
  }else if(praca.nome_praca == "vitoria"){
    praca.nome_praca = "Grande Vitória";
  }else if(praca.nome_praca == "porto-alegre"){
    praca.nome_praca = "Grande Porto Alegre";
  }else if(praca.nome_praca == "curitiba"){
    praca.nome_praca = "Grande Curitiba";
  }else if(praca.nome_praca == "florianopolis"){
    praca.nome_praca = "Grande Florianópolis";
  }else if(praca.nome_praca == "goiania"){
    praca.nome_praca = "Grande Goiânia";
  }else if(praca.nome_praca == "df"){
    praca.nome_praca = "Distrito Federal";
  }else if(praca.nome_praca == "salvador"){
    praca.nome_praca = "Grande Salvador";
  }else if(praca.nome_praca == "fortaleza"){
    praca.nome_praca = "Grande Fortaleza";
  }else if(praca.nome_praca == "recife"){
    praca.nome_praca = "Grande Recife";
  }else if(praca.nome_praca == "belem"){
    praca.nome_praca = "Grande Belém";
  }else if(praca.nome_praca == "manaus"){
    praca.nome_praca = "Grande Manaus";
  }

  return praca.nome_praca;
}
