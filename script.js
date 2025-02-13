document.getElementById("redPacket").addEventListener("click", function() {
    let packet = this;
    let message = document.getElementById("hiddenMessage");

    packet.classList.add("open");

    setTimeout(() => {
        message.style.display = "block";
    }, 500);

    dropCoins(20);
});

// Falling hearts animation
const heartCanvas = document.getElementById("heartCanvas");
const heartCtx = heartCanvas.getContext("2d");
heartCanvas.width = window.innerWidth;
heartCanvas.height = window.innerHeight;

let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * heartCanvas.width;
        this.y = Math.random() * -heartCanvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 3 + 1;
        this.opacity = Math.random();
    }

    draw() {
        heartCtx.fillStyle = `rgba(255, 50, 80, ${this.opacity})`;
        heartCtx.beginPath();
        heartCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        heartCtx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > heartCanvas.height) {
            this.y = 0;
            this.x = Math.random() * heartCanvas.width;
        }
    }
}

function createHearts() {
    for (let i = 0; i < 50; i++) {
        hearts.push(new Heart());
    }
}

function animateHearts() {
    heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animateHearts);
}

createHearts();
animateHearts();

// Falling Gold Coins
function dropCoins(count) {
    for (let i = 0; i < count; i++) {
        let coin = document.createElement("div");
        coin.classList.add("coin");
        coin.style.left = Math.random() * window.innerWidth + "px";
        coin.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(coin);
        setTimeout(() => coin.remove(), 3000);
    }
}

