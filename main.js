// carbs 4kcal in 1 gram
// protein 4kcal in 1 gram
// fat 9kcal in 1 gram

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
  if(products.clientHeight >= 330){
    products.style.overflowY = "scroll";
    products.style.maxHeight = "330px";
  }
})