/**
 * Toggle function to activate or deactivate the newsletter modal window
 *
 * Adds a click handler to all elements with the "show_newsletter" class.
 * When one of these elements is clicked, it toggles the visibility state
 * of the element with the "newsletter" class, adding or removing the "active" class.
 * This allows you to show or hide the newsletter.
 */
function openNewsletterForm() {
  /**
   * Selects and contains all elements with the "show_newsletter" class.
   */
  const elements = document.getElementsByClassName("show_newsletter");

  /**
   * Initializes a for...of loop that browses each element in the "elements" collection.
   */
  for (const element of elements) {
    /**
     * Adds a click event listener to each element in the "elements" collection.
     * When an element is clicked, the arrow function is executed.
     */
    element.addEventListener("click", () => {
      /**
       * Selects the first element of the HTML page with the "newsletter" class.
       */
      const newsletter = document.querySelector(".newsletter");
      /**
       * Adds or removes the "active" class from the newsletter element.
       */
      newsletter.classList.toggle("active");
    });
  }
}

openNewsletterForm();

// COMPTE A REBOURS

const COUNTDOWN_ELEMENTS = {
  days: document.getElementById("day"),
  hours: document.getElementById("hour"),
  minutes: document.getElementById("minutes"),
  secondes: document.getElementById("secondes"),
};

function calculateCountDown(targetDate) {
  const currentDate = new Date().getTime();
  const countDownDate = new Date(targetDate).getTime();
  const timeLeft = countDownDate - currentDate;

  if (timeLeft <= 0) {
    return {
      daysContent: 0,
      hoursContent: 0,
      minutesContent: 0,
      secondesContent: 0,
    };
  }

  const secondesContent = Math.floor(timeLeft / 1000);
  const minutesContent = Math.floor(secondesContent / 60);
  const hoursContent = Math.floor(minutesContent / 60);
  const daysContent = Math.floor(hoursContent / 24);

  return {
    daysContent,
    hoursContent: hoursContent % 24,
    minutesContent: minutesContent % 60,
    secondesContent: secondesContent % 60,
  };
}

/**
 * Fonction pour mettre à jour le compte à rebours
 * @param {*} countDown
 */
function updateCountdown(countdown) {
  COUNTDOWN_ELEMENTS.days.textContent = countdown.daysContent;
  COUNTDOWN_ELEMENTS.hours.textContent = countdown.hoursContent;
  COUNTDOWN_ELEMENTS.minutes.textContent = countdown.minutesContent;
  COUNTDOWN_ELEMENTS.secondes.textContent = countdown.secondesContent;

  // Si le compte à rebours est terminé
  if (
    countdown.daysContent === 0 &&
    countdown.hoursContent === 0 &&
    countdown.minutesContent === 0 &&
    countdown.secondesContent === 0
  ) {
    // On stoppe le rafraichissement du compte à rebours
    clearInterval(COUNTDOWN_INTERVAL);

    const hiddenContent = {
      firstHeaderH2: document.getElementsByTagName("h2")[0],
      firstParagraph: document.getElementsByTagName("p")[0],
      countdown: document.querySelector(".countDown"),
      secondCallToAction: document.getElementsByClassName("btn_cta")[1],
    };
    for (const hiddenElement in hiddenContent) {
      if (hiddenContent.hasOwnProperty(hiddenElement)) {
        const content = hiddenContent[hiddenElement];
        if (content) {
          content.style.display = "none";
        }
      }
    }
  }
}

//Date cible du compte à rebours
const TARGET_DATE = new Date("March 16, 2024");

/**
 * Définition de l'interval de rafraichissement du compte à rebours
 * Rafraichissement toutes les 1000 ms => 1 sec
 */
const COUNTDOWN_INTERVAL = setInterval(() => {
  const countDown = calculateCountDown(TARGET_DATE);
  updateCountdown(countDown);
}, 1000);

/**
 * Récupère l'année en cours
 */
function getCurrentYear() {
  const footerYear = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = currentYear;
}
getCurrentYear();
