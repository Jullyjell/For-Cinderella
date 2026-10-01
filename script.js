const quotes = [
    "Tidak menerima penolakan pokoknya 😍 Kita janjian di chat sekarang, no ngaret ngaret club. See you Cinderella 💖✨",
    "Hehee cieee yang langsung ngeklik 'Mau' 🥺 Pokonya weekend ini jadwal kamu buat aku yaa 😚",
    "Aku sengaja bikin web ini biar kamu tau kalo weekend besok it's our day bgttt it's bcz we can meet again disanaaa🥰",
    "Ga sabar bgtt mau bawa incess jalan lagi, nyari tempat nongkrong lagi, nyari jajan lagi, and especially nnton netflix bareng lagiii"
];


const quoteText = document.getElementById('quote-text');
const envelope = document.getElementById('envelope');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dynamicMessage = document.getElementById('dynamic-message');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');


// ========================================
// TIMER QUOTES
// ========================================

let quoteRunId = 0;


// ========================================
// EFEK HUJAN EMOJI
// ========================================

function buatHujanEfek(daftarEmoji) {

    for (let i = 0; i < 40; i++) {

        const elemenEmoji = document.createElement('div');

        elemenEmoji.classList.add('emoji-drop');

        elemenEmoji.innerText =
            daftarEmoji[Math.floor(Math.random() * daftarEmoji.length)];

        elemenEmoji.style.left =
            (Math.random() * 100) + "vw";

        elemenEmoji.style.animationDelay =
            (Math.random() * 0.8) + "s";

        elemenEmoji.style.fontSize =
            (Math.random() * 15 + 20) + "px";

        document.body.appendChild(elemenEmoji);

        setTimeout(() => {
            elemenEmoji.remove();
        }, 4300);
    }
}


// ========================================
// TAMPILKAN QUOTES SATU-SATU
// ========================================

function mulaiQuotes() {

    if (!quoteText || quotes.length === 0) return;

    // Batalkan proses quotes sebelumnya
    quoteRunId++;

    const currentRun = quoteRunId;
    let index = 0;


    function tampilkanQuote() {

        // Kalau ada proses lama, hentikan
        if (currentRun !== quoteRunId) return;


        // Tampilkan quote saat ini
        quoteText.style.opacity = 0;


        setTimeout(() => {

            // Cek lagi apakah masih proses yang aktif
            if (currentRun !== quoteRunId) return;

            quoteText.textContent = quotes[index];

            quoteText.style.opacity = 1;


            // Kalau ini quote terakhir, berhenti di sini
            if (index >= quotes.length - 1) {
                return;
            }


            index++;


            // Tunggu 3 detik sebelum pindah
            setTimeout(() => {

                if (currentRun !== quoteRunId) return;

                // Fade out
                quoteText.style.opacity = 0;


                // Jeda sebentar sebelum quote berikutnya
                setTimeout(() => {

                    if (currentRun !== quoteRunId) return;

                    tampilkanQuote();

                }, 500);

            }, 3000);

        }, 500);
    }


    tampilkanQuote();
}


// ========================================
// TOMBOL "YES"
// ========================================

function terima() {

    // Nyalakan musik
    if (bgMusic && bgMusic.paused) {

        bgMusic.play().catch(() => {
            console.log("Musik membutuhkan interaksi user.");
        });

        if (musicToggle) {
            musicToggle.classList.add('rotating');
            musicToggle.textContent = '🎵';
        }
    }


    // Hujan emoji
    buatHujanEfek([
        '💖',
        '❤️',
        '💘',
        '💝',
        '🫶🏻',
        '✨'
    ]);


    // Buka envelope
    if (envelope) {
        envelope.classList.add('opened');
    }


    // Mulai quotes
    mulaiQuotes();


    // Tampilkan pesan bawah
    if (dynamicMessage) {

        dynamicMessage.style.display = 'block';

        dynamicMessage.innerHTML =
            "🎉 <b>Yeaayyy, Beneran kan bb??</b> 💖✨";
    }


    // Ubah tulisan tombol
    if (yesBtn) {
        yesBtn.textContent = "Yeeaayyy 💖";
    }
}


// ========================================
// TOMBOL "NGGA MAU" KABUR
// ========================================

function kabur() {

    if (!noBtn) return;

    noBtn.style.position = 'fixed';

    noBtn.style.zIndex = '9999';

    noBtn.style.width = '120px';


    const batasX =
        window.innerWidth - noBtn.offsetWidth - 20;

    const batasY =
        window.innerHeight - noBtn.offsetHeight - 20;


    const x =
        Math.max(10, Math.random() * batasX);

    const y =
        Math.max(10, Math.random() * batasY);


    noBtn.style.left = x + 'px';

    noBtn.style.top = y + 'px';
}


// ========================================
// MUSIC TOGGLE
// ========================================

if (musicToggle && bgMusic) {

    musicToggle.addEventListener('click', () => {

        if (bgMusic.paused) {

            bgMusic.play().catch(() => {
                console.log("Musik membutuhkan interaksi user.");
            });

            musicToggle.classList.add('rotating');

            musicToggle.textContent = '🎵';

        } else {

            bgMusic.pause();

            musicToggle.classList.remove('rotating');

            musicToggle.textContent = '🔇';
        }

    });

}
