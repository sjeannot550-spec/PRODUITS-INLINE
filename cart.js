let panier = JSON.parse(localStorage.getItem('monPanier')) || [];

function majBadgePanier() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = panier.length;
        countElement.style.display = panier.length > 0 ? "block" : "none";
    }
}

function ajouterAuPanier(nom, prix) {
    panier.push({ nom: nom, prix: parseFloat(prix.replace(',', '.')) });
    localStorage.setItem('monPanier', JSON.stringify(panier));
    majBadgePanier();
    alert(nom + " ajouté au panier !");
}

// Initialisation au chargement de chaque page
document.addEventListener('DOMContentLoaded', majBadgePanier);