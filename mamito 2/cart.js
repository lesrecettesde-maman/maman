document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('cart-total-price');
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartList.appendChild(li);
    });
  
    const prices = { Cakes: 10, Desserts: 8, Pain: 5 };
    const total = cart.reduce((sum, item) => sum + (prices[item] || 0), 0);
    totalPrice.textContent = total.toFixed(2);
  });
  