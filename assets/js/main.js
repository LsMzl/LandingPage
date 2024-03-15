function openNewsletterForm() {
  let newsletter = document.querySelector(".newsletter");
  newsletter.classList.toggle("active");
}

// COMPTE A REBOURS

const daysContent = document.querySelector(".day");
const hoursContent = document.querySelector(".hour");
const minutesContent = document.querySelector(".minutes");
const secondesContent = document.querySelector(".secondes");

function countDown() {
  // Date actuelle
  const now = new Date().getTime();
  // Date cible
  const countDownDate = new Date("September 15, 2024").getTime();
  // Temps restant
  const timeLeft = countDownDate - now;

  // Convertion du timestamp en jours
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  // Convertion du timestamp en heures
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  // Convertion du timestamp en minutes
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  // Convertion du timestamp en secondes
  const secondes = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysContent.innerHTML = days;
  hoursContent.innerHTML = hours;
  minutesContent.innerHTML = minutes;
  secondesContent.innerHTML = secondes;
}

const countDownInterval = setInterval(() => {
  countDown();
}, 1000);
