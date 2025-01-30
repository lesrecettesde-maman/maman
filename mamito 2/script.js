document.querySelectorAll('.order-link').forEach(link => {
    link.addEventListener('click', event => {
      const recipeName = link.getAttribute('data-recipe'); // Nom de la recette
      const baseUrl = link.getAttribute('href'); // Ton lien fixe
      const message = `Bonjour, je souhaite commander le « ${recipeName} ».`;
      const whatsappURL = `${baseUrl}?text=${encodeURIComponent(message)}`;
  
      // Ouvre le lien WhatsApp avec le message pré-rempli
      window.open(whatsappURL, '_blank');
      event.preventDefault(); // Empêche le comportement par défaut
    });
  });
  document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.dataset.item;
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${item} a été ajouté au panier.`);
    });
  });
});
// Sélection du conteneur du panier et du total
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;

// Fonction pour ajouter un élément au panier
function addToCart(event) {
  // Récupérer l'article correspondant au bouton cliqué
  const button = event.target;
  const recipe = button.closest(".recipe");
  const title = recipe.querySelector(".recipe-title").innerText;
  const imageSrc = recipe.querySelector(".recipe-image").src;
  const priceText = recipe.querySelector(".price").innerText;
  const price = parseFloat(priceText.replace("Prix: ", "").replace(" MAD", ""));

  // Créer un élément pour afficher l'article dans le panier
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <img src="${imageSrc}" alt="${title}" />
    <p>${title}</p>
    <p>${priceText}</p>
  `;

  // Ajouter l'article au panier
  cartItemsContainer.appendChild(cartItem);

  // Mettre à jour le prix total
  totalPrice += price;
  totalPriceElement.innerText = `Total : ${totalPrice} MAD`;
}

// Ajouter des écouteurs d'événements à tous les boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
// Initialisation du panier
const cart = [];

// Ajouter un écouteur d'événements pour tous les boutons "Ajouter au panier"
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const recipe = event.target.closest(".recipe");
    const title = recipe.querySelector(".recipe-title").innerText;
    const price = parseFloat(recipe.querySelector(".price").innerText.replace("Prix: ", "").replace(" MAD", ""));
    const imageSrc = recipe.querySelector(".recipe-image").src;

    // Ajouter l'article au panier
    cart.push({ title, price, imageSrc });

    // Enregistrer dans le localStorage (pour persister)
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} a été ajouté au panier !`);
  });
});

// Afficher le contenu du panier sur une page dédiée (cart.html)
