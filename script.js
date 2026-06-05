function show(id) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function openLetter() {
    document.getElementById('audio').play();
    show('letter-content');
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#999'; ctx.fillRect(0,0,300,150);

canvas.addEventListener('touchmove', (e) => {
    ctx.globalCompositeOperation = 'destination-out';
    const r = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.arc(e.touches[0].clientX - r.left, e.touches[0].clientY - r.top, 40, 0, Math.PI*2);
    ctx.fill();
    e.preventDefault();
}, {passive: false});
