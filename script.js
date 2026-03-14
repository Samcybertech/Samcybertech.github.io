// Existing JS from previous + matrix rain integration

// Hamburger, smooth scroll, dark mode, active nav (unchanged)

// Matrix rain (from previous)
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // fade trail
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0'; // green matrix color
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, x) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    const posX = x * fontSize;
    ctx.fillText(text, posX, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }
    drops[x]++;
  });
}

setInterval(draw, 40); // ~25 fps
