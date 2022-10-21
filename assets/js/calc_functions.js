

function retornaValorPontoDeAudiencia(pracaDesejada, totalPontosAtracao){

  pracaDesejada = pracaDesejada.toLowerCase();
  let mercados_array = [
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

  console.log(`praça desejada pelo usuário:${pracaDesejada}`);
  
  let praca = encontraPraca(pracaDesejada, mercados_array);

  let totTelespectadores = calculaQtdTelespectadores(praca, totalPontosAtracao);
  console.log(`Total de telespctadores${totTelespectadores.toFixed(3)}`);


  let totDomicilios = calculaQtdDomicilios(praca,totalPontosAtracao);
  console.log(`Total de domicílios${totDomicilios.toFixed(3)}`);

}retornaValorPontoDeAudiencia("rj", 46);

function encontraPraca(pracaDesejada, mercado_array){

  

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