window.onload = function () {
  const email = localStorage.getItem("userEmail");
  if (email) {
    const userInfo = document.getElementById("user-info");
    if (userInfo) {
      userInfo.innerHTML = `<i class="fa-solid fa-user"></i> ${email}`;
    }

    const inscrireLink = document.getElementById("inscrire-link");
    const connexionLink = document.getElementById("connexion-link");
    const deconnexionLink = document.getElementById("deconnexion-link");

    if (inscrireLink) inscrireLink.style.display = "none";
    if (connexionLink) connexionLink.style.display = "none";
    if (deconnexionLink) deconnexionLink.style.display = "inline";

    if (deconnexionLink) {
      deconnexionLink.addEventListener("click", function () {
        localStorage.removeItem("userEmail");
        alert("Vous êtes déconnecté !");
        window.location.href = "index.html";
      });
    }
  }
};
