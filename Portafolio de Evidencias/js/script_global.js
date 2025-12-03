// =================================================
// === LÓGICA DEL MODO NAVIDAD (DAVID ROMERO)    ===
// === CÓDIGO ENVUELTO EN window.onload PARA     ===
// === ASEGURAR QUE LOS ELEMENTOS HTML EXISTAN   ===
// =================================================

// Variables globales (deben estar fuera de window.onload para ser accesibles)
let isChristmas = false;
let snowInterval;
let fireworksActive = false;
let canvas;
let ctx;
let particles = [];

// Función principal del botón (debe ser global para el onclick en el HTML)
function toggleChristmas() {
    const body = document.body;
    const btn = document.getElementById('navidad-btn');
    
    isChristmas = !isChristmas;

    if (isChristmas) {
        // ACTIVAR MODALIDAD
        body.classList.add('christmas-mode');
        btn.textContent = "❌ Apagar Navidad";
        if (canvas) canvas.style.display = 'block';
        startSnowAndGifts();
        startFireworks();
    } else {
        // DESACTIVAR MODALIDAD
        body.classList.remove('christmas-mode');
        btn.textContent = "🎄 Navidad";
        if (canvas) canvas.style.display = 'none';
        stopSnowAndGifts();
        stopFireworks();
    }
}


// Ejecutar la lógica de inicialización SÓLO cuando la página esté completamente cargada
window.onload = function() {
    // 1. Inicialización de Canvas
    canvas = document.getElementById('canvas-fireworks');
    if (canvas) {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    } else {
        console.error("Error: Elemento Canvas no encontrado. El Portafolio no funcionará en Modo Navidad.");
    }
};

// --- LÓGICA DE NIEVE Y REGALOS ---

function createFallingItem() {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    
    // Randomizar si es nieve o regalo (30% probabilidad de regalo)
    const isGift = Math.random() > 0.7; 
    item.textContent = isGift ? '🎁' : '❄️';
    item.style.fontSize = Math.random() * 20 + 15 + 'px';
    
    item.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 3 + 4; 
    item.style.animationDuration = duration + 's';
    item.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, duration * 1000 + (parseFloat(item.style.animationDelay) * 1000));
}

function startSnowAndGifts() {
    // Evitar múltiples intervalos
    if (snowInterval) clearInterval(snowInterval); 
    snowInterval = setInterval(createFallingItem, 300);
}

function stopSnowAndGifts() {
    clearInterval(snowInterval);
    document.querySelectorAll('.falling-item').forEach(e => e.remove());
}

// --- LÓGICA DE FUEGOS ARTIFICIALES (Canvas) ---

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

function createParticle(x, y) {
    const particleCount = 30;
    const colors = ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: x,
            y: y,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 5 + 2,
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 3 + 1,
            alpha: 1,
            decay: Math.random() * 0.02 + 0.01
        });
    }
}

function loopFireworks() {
    if (!fireworksActive || !ctx) return;
    
    // Limpiar canvas con rastro (efecto trail)
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    // Generar explosión aleatoria ocasionalmente
    if (Math.random() < 0.03) { 
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height * 0.7);
    }

    // Actualizar partículas
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 1; 
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (p.alpha <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(loopFireworks);
}

function startFireworks() {
    fireworksActive = true;
    loopFireworks();
}

function stopFireworks() {
    fireworksActive = false;
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    particles = [];
}