const elForm = document.querySelector(".form-box");
const elInput = elForm.querySelector(".form-box__input");
const elInputOrder = elForm.querySelector(".form-box__input-num");
const elList = document.querySelector(".list");
const arrList = [
  {
    product_name: "Apple",
    order_num: 7
  },
  {
    product_name: "CocaCola",
    order_num: 1
  }
];

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  let inputValue = elInput.value.trim();
  let orderValue = Number(elInputOrder.value.trim());

  let new_obj = {
    product_name: inputValue,
    order_num: orderValue
  }

  arrList.push(new_obj);
  // console.log(arrList);
  shoppingList(arrList);
})
shoppingList(arrList);

function shoppingList(arr) {
  elList.innerHTML = "";
  elInput.value = "";
  elInputOrder.value = "";
  arr.forEach(element => {

    let liElement = document.createElement("li");
    let textElement = document.createElement("p");
    let orderElement = document.createElement("span");
    let deleteBtn = document.createElement("button");


    liElement.classList.add("item");
    textElement.classList.add("item__text");
    orderElement.classList.add("item__number");
    deleteBtn.classList.add("item__btn");

    textElement.textContent = element.product_name;
    orderElement.textContent = element.order_num;
    deleteBtn.type = "button";

    textElement.prepend(orderElement);
    liElement.append(textElement,deleteBtn);

    elList.appendChild(liElement);
  });
}

