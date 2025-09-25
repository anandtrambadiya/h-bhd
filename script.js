window.addEventListener("DOMContentLoaded", () => {
  const isGreetingPage = document.getElementById("line1"); // Only exists on index.html
  const popup = document.getElementById("welcome-popup");

  if (isGreetingPage && popup) {
    popup.style.display = "flex"; // Show popup only on greeting page
  } else {
    runMessageFlow(); // Run message animation directly on message.html
  }
});

// 🎉 Called when user clicks "Got it!" on popup
function closePopup() {
  const popup = document.getElementById("welcome-popup");
  if (popup) popup.style.display = "none";

  // 🎶 Start music after interaction (mobile-safe)
  const music = document.getElementById("bg-music");
  if (music && music.paused) {
    music.play().catch(err => {
      console.warn("Autoplay blocked:", err);
    });
  }

  runGreetingAnimation();
  runMessageFlow(); // In case message elements are present on greeting page
}

// ✨ Greeting page animation
function runGreetingAnimation() {
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
}

// 💬 Message page storyline flow
function runMessageFlow() {
  const title = document.getElementById("subgroup-title");
  const messages = [
    document.getElementById("msg-anand"),
    document.getElementById("msg-dhara"),
    document.getElementById("msg-final")
  ];

  if (title && messages.every(Boolean)) {
    gsap.to(title, {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      delay: 0.5
    });

    setTimeout(() => {
      title.classList.add("fixed");
    }, 2000);

    messages.forEach((msg, index) => {
      setTimeout(() => {
        msg.classList.remove("hidden");
        msg.classList.add("visible");
      }, 3000 + index * 6500); // 6.5s gap between each
    });
  }
}

// 🧭 Navigation
function goToMessage() {
  window.location.href = "message.html";
}

function goBack() {
  window.location.href = "index.html";
}

// 🌸 Surprise animation
function triggerSurprise() {
  const container = document.getElementById("flower-container");
  if (container) {
    for (let i = 0; i < 30; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
      container.appendChild(flower);
    }
  }
}

// 💬 Legacy chat box (optional)
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
