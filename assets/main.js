window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading").remove();
        }, 800);

        launchConfetti();
    }, 1800);
});

function launchConfetti() {
    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.1 },
    });
}

const text = "Happy Birthday Embun 🎉";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}

typing();

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 },
);

document.querySelectorAll(".fade-up,.timeline-item").forEach((el) => {
    observer.observe(el);
});

const achievementSection = document.querySelectorAll(".check-item");

const achievementObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                achievementSection.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 450);
                });
            }
        });
    },
    { threshold: 0.4 },
);

achievementObserver.observe(document.querySelector(".check-item"));

const timelineObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 },
);

document.querySelectorAll(".timeline-item").forEach((item) => {
    timelineObserver.observe(item);
});

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.addEventListener("click", async () => {
    if (!playing) {
        await music.play();
        btn.innerHTML = '<i class="ph ph-pause text-2xl"></i>';
        playing = true;
    } else {
        music.pause();
        btn.innerHTML = '<i class="ph ph-play text-2xl"></i>';
        playing = false;
    }
});

const floatContainer = document.getElementById("floating-container");

const icons = ["💖", "⭐", "🌸", "🎀", "🤍"];

for (let x = 0; x < 25; x++) {
    const item = document.createElement("div");

    item.classList.add("float-item");

    item.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = 14 + Math.random() * 18 + "px";
    item.style.animationDuration = 12 + Math.random() * 20 + "s";
    item.style.animationDelay = Math.random() * 10 + "s";

    floatContainer.appendChild(item);
}