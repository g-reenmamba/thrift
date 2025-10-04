function increaseQty(button) {
    let qty = button.parentElement.querySelector('.qty');
    qty.textContent = parseInt(qty.textContent) + 1;
  }
  
  function decreaseQty(button) {
    let qty = button.parentElement.querySelector('.qty');
    let value = parseInt(qty.textContent);
    if (value > 1) qty.textContent = value - 1;
  }