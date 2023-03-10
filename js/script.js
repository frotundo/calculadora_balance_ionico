// -------------- variables de inf -------------
let fecha = document.querySelector('.fecha');
let codigo = document.querySelector('.codigo');
let ce = document.querySelector('.ce');
let error_info = document.querySelector('.error_info')

// -------------- variables de cationes -------------
let input_ca = document.querySelector('.input-ca');
const pe_ca = 20.039;
let input_k = document.querySelector('.input-k');
const pe_k = 39.098;
let input_mg = document.querySelector('.input-mg');
const pe_mg = 12.153;
let input_na = document.querySelector('.input-na');
const pe_na = 22.990;
let input_al = document.querySelector('.input-al');
const pe_al = 8.994;
let input_b = document.querySelector('.input-b');
const pe_b = 3.604;
let input_cd = document.querySelector('.input-cd');
const pe_cd = 56.206;
let input_cu = document.querySelector('.input-cu');
const pe_cu = 31.773;
let input_fe = document.querySelector('.input-fe');
const pe_fe = 18.616;
let input_mn = document.querySelector('.input-mn');
const pe_mn = 13.735;


// -------------- variables de aniones -------------
let input_cl = document.querySelector('.input-cl');
const pe_cl = 35.450;
let input_co3 = document.querySelector('.input-co3');
const pe_co3 = 30.004;
let input_hco3 = document.querySelector('.input-hco3');
const pe_hco3 = 61.088;
let input_no2 = document.querySelector('.input-no2');
const pe_no2 = 46.005;
let input_no3 = document.querySelector('.input-no3');
const pe_no3 = 62.004;
let input_so4 = document.querySelector('.input-so4');
const pe_so4 = 48.028;
let input_f = document.querySelector('.input-f');
const pe_f = 18.998;

// -------------- variables de resultados -------------
const resultados = document.querySelector('.resultados');
let suma_cat = document.querySelector('.suma-cat');
let ce_cal_cat = document.querySelector('.ce_cal_cat');
let div_ce_cat = document.querySelector('.div_ce_cat');
let suma_ani = document.querySelector('.suma-ani');
let ce_cal_ani = document.querySelector('.ce_cal_ani');
let div_ce_ani = document.querySelector('.div_ce_ani');
let balance = document.querySelector('.balance');

// -------------- variables de botones -------------
const btn_calc = document.querySelector('.btn-calcular');
const btn_clean = document.querySelector('.btn-borrar');

const btn_save = document.querySelector(".save");

lista_input = [
  input_ca,
  input_k,
  input_mg, 
  input_na, 
  input_al, 
  input_b, 
  input_cd, 
  input_cu, 
  input_fe, 
  input_mn, 
  input_cl, 
  input_co3, 
  input_hco3, 
  input_no2, 
  input_no3, 
  input_so4, 
  input_f, 
  ce
]

function validate_range(valor) {
  return parseFloat(valor.value)>=0.9 && parseFloat(valor.value)<=1.1
}

function validate_value_type(valor) {
  return parseFloat(valor.value)>=0
}

btn_calc.addEventListener('click', calc)
function calc() {
    let catplus;
    let aniplus;

    if (
      input_ca.value!=='' && 
      input_k.value!==''&& 
      input_mg.value!=='' && 
      input_na.value!=='' && 
      input_al.value!=='' && 
      input_b.value!=='' && 
      input_cd.value!=='' && 
      input_cu.value!=='' && 
      input_fe.value!=='' && 
      input_mn.value!=='' && 
      input_cl.value!=='' && 
      input_co3.value!=='' && 
      input_hco3.value!=='' && 
      input_no2.value!=='' && 
      input_no3.value!=='' && 
      input_so4.value!=='' && 
      input_f.value!=='' && 
      ce.value!=='' && 
      parseFloat(input_ca.value)>=0 &&
      parseFloat(input_k.value)>=0 &&
      parseFloat(input_mg.value)>=0 &&
      parseFloat(input_na.value)>=0 &&
      parseFloat(input_al.value)>=0 &&
      parseFloat(input_b.value)>=0 &&
      parseFloat(input_cd.value)>=0 &&
      parseFloat(input_cu.value)>=0 &&
      parseFloat(input_fe.value)>=0 &&
      parseFloat(input_mn.value)>=0 &&
      parseFloat(input_cl.value)>=0 &&
      parseFloat(input_co3.value)>=0 &&
      parseFloat(input_hco3.value)>=0 &&
      parseFloat(input_no2.value)>=0 &&
      parseFloat(input_no3.value)>=0 &&
      parseFloat(input_so4.value)>=0 &&
      parseFloat(input_f.value)>=0 &&
      parseFloat(ce.value)>=0
      ){
      
      for (let valor of lista_input) {
        valor.classList.remove('verif');
        if (valor.value.includes(',')){
          valor.value = valor.value.replace(',','.');
        }
      }

      catplus =(
        (parseFloat(input_ca.value)/pe_ca)+
        (parseFloat(input_k.value)/pe_k)+
        (parseFloat(input_mg.value)/pe_mg)+
        (parseFloat(input_na.value)/pe_na)+
        (parseFloat(input_al.value)/pe_al)+
        (parseFloat(input_b.value)/pe_b)+
        (parseFloat(input_cd.value)/pe_cd)+
        (parseFloat(input_cu.value)/pe_cu)+
        (parseFloat(input_fe.value)/pe_fe)+
        (parseFloat(input_mn.value)/pe_mn)
        );
    
      suma_cat.value = catplus.toFixed(2)

      ce_cal_cat.value = (catplus*100).toFixed(2);

      div_ce_cat.value = (ce_cal_cat.value/parseFloat(ce.value)).toFixed(2);

      aniplus = (
        (parseFloat(input_cl.value)/pe_cl)+
        (parseFloat(input_co3.value)/pe_co3)+
        (parseFloat(input_hco3.value)/pe_hco3)+
        (parseFloat(input_no2.value)/pe_no2)+
        (parseFloat(input_no3.value)/pe_no3)+
        (parseFloat(input_so4.value)/pe_so4)+
        (parseFloat(input_f.value)/pe_f)
        )
      
      suma_ani.value = aniplus.toFixed(2)

      ce_cal_ani.value = (aniplus*100).toFixed(2);

      div_ce_ani.value = (ce_cal_ani.value/parseFloat(ce.value)).toFixed(2);

      balance.value = (((parseFloat(catplus)-parseFloat(aniplus))/(parseFloat(catplus)+parseFloat(aniplus)))*100).toFixed(2)

      error_info.classList.add('inactive')
      resultados.classList.remove('inactive');

      if (validate_range(div_ce_cat)===false) {
        div_ce_cat.classList.add('verif');
      }

      if (validate_range(div_ce_ani)===false) {
        div_ce_ani.classList.add('verif');
      }

    } else {

      for (let valor of lista_input) {
        if (validate_value_type(valor)===false) {
          valor.classList.add('verif');
        }
      }

      error_info.classList.remove('inactive')
    }

    
}

btn_clean.addEventListener('click', clean)
function clean () {
    fecha.value = "";
    codigo.value = "";
    ce.value = "";

    input_ca.value = "";
    input_k.value = "";
    input_mg.value = "";
    input_na.value = "";
    input_al.value = "";
    input_b.value = "";
    input_cd.value = "";
    input_cu.value = "";
    input_fe.value = "";
    input_mn.value = "";

    input_cl.value = "";
    input_co3.value = "";
    input_hco3.value = "";
    input_no2.value = "";
    input_no3.value = "";
    input_so4.value = "";
    input_f.value = "";

    suma_cat.value = "";
    suma_ani.value = "";

    ce_cal_cat.value = "";
    ce_cal_ani.value = "";

    div_ce_cat.value = "";
    div_ce_ani.value = "";

    balance.value = "";

    div_ce_cat.classList.remove('verif');
    div_ce_ani.classList.remove('verif');

    error_info.classList.add('inactive');
    resultados.classList.add('inactive');

    for (let valor of lista_input) {
      valor.classList.remove('verif');
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHBDn-AamvPyojy52Fy1xYpehfBRjST6MtQX2JPzfNTEGo21BXk06qjZu4hIKWLccN/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.classList.remove('inactive');
      msg.innerHTML = "Informaci??n enviada con exito.";
      setTimeout(function(){
        msg.classList.add('inactive');
        clean()
      },5000)
    })
    .catch(error => console.error('Error!', error.message))
})




