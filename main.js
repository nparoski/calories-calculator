// carbs 4kcal in 1 gram
// protein 4kcal in 1 gram
// fat 9kcal in 1 gram

// 1. export this as module|component
let button = document.getElementById('btn-add');
let product = document.getElementById('inp-product');
let carbs = document.getElementById('inp-carbs');
let protein = document.getElementById('inp-protein');
let fat = document.getElementById('inp-fat');
let products = document.getElementById('products');
let amount = document.getElementById('inp-amount');

button.addEventListener('click',()=>{
  let kcal = ((carbs.value * 4) + (protein.value * 4) + (fat.value * 9))* amount.value;
  products.innerHTML += `
  <div class="product--item mb-3">
    <h5 class="product__name mb-0 d-inline">${product.value}</h5>
    <span class="small d-inline text-white-50">${100*amount.value} g / ml</span>
    <p class="product__kcal small mb-0 font-weight-light text-white-50">(${kcal} kcal)</p>
    <ul class="product__nutrients navbar-nav ml-2">
      <li>Carbs: ${carbs.value * amount.value}g <span class="small text-white-50">${carbs.value}(g)</span></li>
      <li>Protein: ${protein.value * amount.value}g <span class="small text-white-50">${protein.value}(g)</span></li>
      <li>Fat: ${fat.value * amount.value}g <span class="small text-white-50">${fat.value}(g)</span></li>
    </ul>
  </div>`;
  calcTotal();
  if(products.clientHeight >= 330){
    products.style.overflowY = "scroll";
    products.style.maxHeight = "330px";
  }
})

// 1. end of module|component

// 2. export this as module|component
const totalInfo = document.getElementById('total-info'); 
function calcTotal(){
  const productItem = document.querySelectorAll('.product--item');
  let totalCarbs=0;
  let totalProts=0;
  let totalFats=0;

  for (let i = 0; i < productItem.length; i++) {
    let carbs = productItem[i].children[3].children[0].textContent.split(" ")[1].replace('g','')
    let proteins = productItem[i].children[3].children[1].textContent.split(" ")[1].replace('g','')
    let fats = productItem[i].children[3].children[2].textContent.split(" ")[1].replace('g','')
    totalCarbs += parseFloat(carbs);
    totalProts += parseFloat(proteins);
    totalFats += parseFloat(fats);
  }
  let totalKcal = (totalCarbs*4)+(totalProts*4)+(totalFats*9);
  totalInfo.innerHTML = `
  <h4>Calories: ${totalKcal.toFixed(2)} <span class="small">(kcal)</span></h2>
  <h4>Carbs: ${totalCarbs.toFixed(2)} <span class="small">(g)</span></h2>
  <h4>Proteins: ${totalProts.toFixed(2)} <span class="small">(g)</span></h2>
  <h4>Fats: ${totalFats.toFixed(2)} <span class="small">(g)</span></h4>`
}
// 2. end of module|component 