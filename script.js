window.addEventListener("DOMContentLoaded", () => {
  // Greeting page animation
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const nextButton = document.getElementById("next-button");

  if (line1 && line2 && line3) {
    const tl = gsap.timeline();

    tl.from(line1, {
      duration: 1.2,
      opacity: 0,
      y: -30,
      ease: "bounce.out"
    });

    tl.from(line2, {
      duration: 1,
      scale: 0.2,
      opacity: 0,
      ease: "elastic.out(1, 0.5)"
    });

    tl.call(() => {
      const text = "Wish you a day full of smiles, sparkles, and sweet surprises";
      line3.innerHTML = "";
      let i = 0;

      const typing = setInterval(() => {
        line3.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(typing);
          if (nextButton) nextButton.style.display = "inline-flex";
        }
      }, 50);
    }, null, "+=0.5");
  }

  // Message page storyline flow
  const title = document.getElementById("subgroup-title");
  const messages = [
    document.getElementById("msg-anand"),
    document.getElementById("msg-dhara"),
    document.getElementById("msg-final")
  ];

  if (title && messages.length > 0) {
    // Step 1: Zoom in title to center
    gsap.to(title, {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      delay: 0.5
    });

    // Step 2: Float title to top
    setTimeout(() => {
      title.classList.add("fixed");
    }, 2000);

    // Step 3: Reveal messages one by one
    messages.forEach((msg, index) => {
      setTimeout(() => {
        msg.classList.remove("hidden");
        msg.classList.add("visible");
      }, 3000 + index * 6500); // 5s gap between each
    });
  }
});

// Navigation
function goToMessage() {
  window.location.href = "message.html";
}

function goBack() {
  window.location.href = "index.html";
}

// Surprise animation
function triggerSurprise() {
  const music = document.getElementById("bg-music");
  const container = document.getElementById("flower-container");
  if (container) {
    for (let i = 0; i < 30; i++) {
      let flower = document.createElement("div");
      flower.className = "flower";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
      container.appendChild(flower);
    }
  }
}

// Legacy chat box (optional)
function showMessage(who) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;

  chatBox.style.display = "block";
  chatBox.innerHTML = who === "anand"
    ? "Hey buddy! This website is our birthday gift to you 🎁"
    : "Aww thank you! You both made my day 💜";

  setTimeout(() => {
    chatBox.style.display = "none";
  }, 7000);
}
