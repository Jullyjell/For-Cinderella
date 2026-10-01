const quotes = [
    "Tidak menerima penolakan pokonyaa😡 Kita janjian di chat sekarang, no ngaret ngaret club. See you Cinderella 💖✨",
    "Hehee cieee yang langsung ngeklik 'Mau'...🤭 Pokonya weekend ini jadwal kamu aku yg book full yaakk neng😁",
    "Aku sengaja bikin web ini biar kamu tau kalo weekend besok it's our day bgttt it's bcz we can meet again disanaaa😣",
    "Ga sabar bgtt mauu bawa incess jalan' lagi, nyari tempat nongkrong lagi, nyari jajan lagi, and especially nnton netflix bareng lagii (katanyaa)😭😭"
];

let quoteIndex = 0;
const quoteText = document.getElementById('quote-text');
const envelope = document.getElementById('envelope');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dynamicMessage = document.getElementById('dynamic-message');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music')

function buatHujanEfek(daftarEmoji) {
    for (let i = 0; i < 40; i++) {
        const elemenEmoji = document.createElement('div');
        elemenEmoji.classList.add('emoji-drop');
        elemenEmoji.innerText = daftarEmoji[Math.floor(Math.random() * daftarEmoji.length)];
        elemenEmoji.style.left = (Math.random() * 100) + "vw";
        elemenEmoji.style.animationDelay = (Math.random() * 0.8) + "s";
        elemenEmoji.style.fontSize = (Math.random() * 15 + 20) +"px";

        document.body.appendChild(elemenEmoji);

        setTimeout(() => {
            elemenEmoji.remove();
        }, 3300);
    }
}

function terima() {
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(err => console.log("Musik butuh interaksi user dulu"));
        if (musicToggle) {
            musicToggle.classList.add('rotating');
            musicToggle.textContent = '🎵';
        }
    }

    buatHujanEfek(['💖', '❤️', '💘', '💝', '🫶🏻', '✨']);
    
    if (dynamicMessage) {
        dynamicMessage.style.display = 'block';
        dynamicMessage.innerHTML = "🎉 <b>Yeaayyy, Beneran kan bb??</b> Sekarang coba kamu klik <b>amplop surat</b> diatas buat ngebuka pesan rahasia dari aku hehe😉✨";
    }

    setTimeout(() => {
        alert('Aaaaakkk😣, Beneran yaa pwettyyy👉🏻👈🏻 Kita janjian di chat sekarang, no ngaret ngaret club, See you Cinderella 💖✨');
    }, 500);
}

function kabur() {
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '9999';
    noBtn.style.width = '120px';

    const batasX = window.innerWidth - noBtn.offsetWidth - 20;
    const batasY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.max(10, Math.random() * batasX);
    const y = Math.max(10, Math.random() * batasY);

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

if (envelope) {
    envelope.addEventListener('click', () => {
        buatHujanEfek(['🌸', '🧸', '🐣', '✨', '🌼']);

        quoteIndex = (quoteIndex + 1) % quotes.length;
        if (quoteText) {
            quoteText.style.opacity = 0;
            setTimeout(() => {
                quoteText.textContent = `"${quotes[quoteIndex]}"`;
                quoteText.style.opacity = 1;
            }, 200);
        }
    });
}

if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(err => console.log("Musik butuh interaksi user duluu"));
            musicToggle.classList.add('rotating');
            musicToggle.textContent = '🎵';
        } else {
            bgMusic.paused();
            musicToggle.classList.remove('rotating');
            musicToggle.textContent = '🔇';
        }
    });
}