// Fonction pour ajouter au panier
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Vérifier si l'article existe déjà dans le panier
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} a été ajouté au panier`);
}

// Gestionnaire d'événements pour les boutons "Commander"
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-button');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const recipe = this.closest('.recipe');
            const name = recipe.querySelector('.recipe-title').textContent;
            const priceText = recipe.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('Prix: ', '').replace(' MAD', ''));
            const image = recipe.querySelector('.recipe-image').src;
            
            addToCart(name, price, image);
        });
    });
});

// Gestionnaire pour le menu responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
});

// Fonction pour le bouton "Retour en haut"
window.onscroll = function() {
    const button = document.getElementById("back-to-top");
    if (button) {
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}