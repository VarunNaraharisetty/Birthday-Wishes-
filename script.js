(() => {
  const screens = [...document.querySelectorAll(".screen")];
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");
  const toast = document.getElementById("toast");
  let current = 0;
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function goTo(index) {
    current = (index + screens.length) % screens.length;
    screens.forEach((screen, i) => {
      screen.classList.toggle("active", i === current);
      screen.setAttribute("aria-hidden", i === current ? "false" : "true");
    });
    progressText.textContent = `${String(current + 1).padStart(2, "0")} / ${String(screens.length).padStart(2, "0")}`;
    progressBar.style.width = `${((current + 1) / screens.length) * 100}%`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("[data-next]").forEach(button => {
    button.addEventListener("click", () => goTo(current + 1));
  });

  document.querySelectorAll(".reason-card").forEach(card => {
    card.addEventListener("click", () => {
      const isRevealed = card.classList.toggle("revealed");
      card.setAttribute("aria-expanded", String(isRevealed));
      card.querySelector(".tap-hint").textContent = isRevealed ? "tap to hide ↑" : "tap to reveal ↗";
    });
  });

  const cakeButton = document.getElementById("cakeButton");
  const wishMessage = document.getElementById("wishMessage");
  cakeButton.addEventListener("click", () => {
    cakeButton.classList.add("blown");
    wishMessage.hidden = false;
    document.getElementById("cakeHint").textContent = "Wish sent into the universe. ✨";
    celebrate(55);
  });

  function celebrate(amount = 36) {
    const layer = document.getElementById("sparkleLayer");
    const colors = ["#ed8fb4", "#f7c7d9", "#c9b5e7", "#f4d68b", "#ffffff"];
    for (let i = 0; i < amount; i++) {
      const bit = document.createElement("span");
      bit.className = "confetti";
      bit.style.left = `${Math.random() * 100}%`;
      bit.style.background = colors[Math.floor(Math.random() * colors.length)];
      bit.style.animationDelay = `${Math.random() * 0.8}s`;
      bit.style.animationDuration = `${1.8 + Math.random() * 1.7}s`;
      bit.style.transform = `rotate(${Math.random() * 180}deg)`;
      layer.appendChild(bit);
      setTimeout(() => bit.remove(), 4300);
    }
  }

  document.getElementById("confettiButton").addEventListener("click", () => {
    celebrate(100);
    showToast("Happy Birthday, Boori! You deserve all the good things. ♡");
  });

  document.getElementById("replayButton").addEventListener("click", () => {
    cakeButton.classList.remove("blown");
    wishMessage.hidden = true;
    document.getElementById("cakeHint").textContent = "Tap the cake when you’re ready ✨";
    document.querySelectorAll(".reason-card").forEach(card => {
      card.classList.remove("revealed");
      card.setAttribute("aria-expanded", "false");
      card.querySelector(".tap-hint").textContent = "tap to reveal ↗";
    });
    goTo(0);
    showToast("Let’s make the moment last a little longer. ♡");
  });

  // Tiny decorative sparkles, kept subtle so the page stays quick on mobile.
  const sparkleLayer = document.getElementById("sparkleLayer");
  for (let i = 0; i < 12; i++) {
    const sparkle = document.createElement("span");
    sparkle.textContent = i % 2 ? "✧" : "·";
    sparkle.style.cssText = `position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;color:#d6b3c8;opacity:${0.2+Math.random()*0.35};font-size:${10+Math.random()*12}px;animation:float ${3+Math.random()*4}s ease-in-out infinite;animation-delay:${Math.random()*-4}s`;
    sparkleLayer.appendChild(sparkle);
  }

  goTo(0);
})();