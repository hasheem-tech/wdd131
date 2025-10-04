const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select_input = document.getElementById("product-name");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.innerText = product.name;
  select_input.appendChild(option);
});



const form = document.querySelector("form");


let review_count = parseInt(localStorage.getItem("review_count")) || 0;

form.addEventListener("submit", (e)=>{
  review_count++;
  localStorage.setItem("review_count", review_count);
  
})

