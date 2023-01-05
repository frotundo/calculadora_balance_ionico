// -------------- variables de inf -------------
let fecha = document.querySelector('.fecha');
let codigo = document.querySelector('.codigo');
let ce = document.querySelector('.ce');

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
let balance = document.querySelector('.balance')

// -------------- variables de botones -------------
const btn_calc = document.querySelector('.btn-calcular')
const btn_clean = document.querySelector('.btn-borrar')


btn_calc.addEventListener('click', calc)
function calc() {
    suma_cat.value =((parseFloat(input_ca.value)*pe_ca)+(parseFloat(input_k.value)*pe_k)+(parseFloat(input_mg.value)*pe_mg)+(parseFloat(input_na.value)*pe_na)+(parseFloat(input_al.value)*pe_al)+(parseFloat(input_b.value)*pe_b)+(parseFloat(input_cd.value)*pe_cd)+(parseFloat(input_cu.value)*pe_cu)+(parseFloat(input_fe.value)*pe_fe)+(parseFloat(input_mn.value)*pe_mn));

    ce_cal_cat.value = suma_cat.value*100;

    div_ce_cat.value = ce_cal_cat.value/ce.value;

    suma_ani.value = ((parseFloat(input_cl.value)*pe_cl)+(parseFloat(input_co3.value)*pe_co3)+(parseFloat(input_hco3.value)*pe_hco3)+(parseFloat(input_no2.value)*pe_no2)+(parseFloat(input_no3.value)*pe_no3)+(parseFloat(input_so4.value)*pe_so4)+(parseFloat(input_f.value)*pe_f))
    
    ce_cal_ani.value = suma_ani.value*100;

    div_ce_ani.value = ce_cal_ani.value/parseFloat(ce.value);

    balance.value = (suma_cat.value-suma_ani.value)/(suma_cat.value-suma_ani.value)*100

    resultados.classList.remove('inactive');
}

btn_clean.addEventListener('click', clean)
function clean () {
    fecha.value = "";
    codigo.value = "";
    ce.value = "";

    input_ca.value = 0;
    input_k.value = 0;
    input_mg.value = 0;
    input_na.value = 0;
    input_al.value = 0;
    input_b.value = 0;
    input_cd.value = 0;
    input_cu.value = 0;
    input_fe.value = 0;
    input_mn.value = 0;

    input_cl.value = 0;
    input_co3.value = 0;
    input_hco3.value = 0;
    input_no2.value = 0;
    input_no3.value = 0;
    input_so4.value = 0;
    input_f.value = 0;

    suma_cat.value = 0;
    suma_ani.value = 0;

    ce_cal_cat.value = 0;
    ce_cal_ani.value = 0;

    div_ce_cat.value = 0;
    div_ce_ani.value = 0;

    balance.value = 0;

    resultados.classList.add('inactive')
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHBDn-AamvPyojy52Fy1xYpehfBRjST6MtQX2JPzfNTEGo21BXk06qjZu4hIKWLccN/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })