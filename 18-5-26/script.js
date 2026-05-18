// ── DATA ──
const movies = [
    { title: "Dune: Part Two", year: 2024, match: "98%", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&q=70" },
    { title: "Shadow Realm", year: 2025, match: "97%", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&q=70" },
    { title: "Neon Horizon", year: 2024, match: "94%", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=70" },
    { title: "The Last Veil", year: 2025, match: "91%", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=70" },
    { title: "Prism", year: 2024, match: "88%", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=300&q=70" },
    { title: "Undertow", year: 2026, match: "95%", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&q=70" },
    { title: "Crimson Peak", year: 2025, match: "90%", img: "https://images.unsplash.com/photo-1500462918081-acca4f733f6f?w=300&q=70" },
    { title: "Starfall", year: 2026, match: "93%", img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&q=70" },
];

const picks = [
    { title: "Dust & Bone", year: 2024, match: "96%", img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=70" },
    { title: "Cold Meridian", year: 2025, match: "92%", img: "https://images.unsplash.com/photo-1490079027102-cd08f2308818?w=300&q=70" },
    { title: "Echo Protocol", year: 2026, match: "98%", img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&q=70" },
    { title: "Velvet Dark", year: 2025, match: "87%", img: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=300&q=70" },
    { title: "Remnants", year: 2024, match: "91%", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=70" },
    { title: "Mirage", year: 2026, match: "94%", img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=300&q=70" },
    { title: "The Witness", year: 2025, match: "89%", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=70" },
    { title: "After Glow", year: 2024, match: "86%", img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=70" },
];

const trailers = [
    { title: "Dune: Part Two", sub: "Epic sci-fi saga returns", badge: "NOW STREAMING", ytId: "Way9Dexny3w", thumb: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80", genre: "Sci-Fi", dur: "2h 46m" },
    { title: "Oppenheimer", sub: "The story that changed the world", badge: "AWARD WINNER", ytId: "uYPbbksJxIg", thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80", genre: "Drama", dur: "3h 0m" },
    { title: "Interstellar", sub: "Beyond the stars, beyond time", badge: "CLASSIC", ytId: "zSWdZVtXT7E", thumb: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", genre: "Sci-Fi", dur: "2h 49m" },
    { title: "The Dark Knight", sub: "Why so serious?", badge: "TOP RATED", ytId: "EXeTwQWrcwY", thumb: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600&q=80", genre: "Action", dur: "2h 32m" },
    { title: "Blade Runner 2049", sub: "A new chapter in the saga", badge: "NITFLIX PICK", ytId: "gCcx85zbxz4", thumb: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80", genre: "Sci-Fi", dur: "2h 44m" },
    { title: "Inception", sub: "Your mind is the scene", badge: "MIND-BENDING", ytId: "YoHD9XEInc0", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80", genre: "Thriller", dur: "2h 28m" },
    { title: "The Avengers", sub: "Earth's mightiest heroes unite", badge: "BLOCKBUSTER", ytId: "eOrNdBpGMv8", thumb: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&q=80", genre: "Action", dur: "2h 23m" },
    { title: "Gladiator II", sub: "The battle for Rome begins again", badge: "NEW RELEASE", ytId: "8xhowCDQkfY", thumb: "https://images.unsplash.com/photo-1604975999044-188777d4bbce?w=600&q=80", genre: "Action", dur: "2h 28m" },
    { title: "Avatar: The Way of Water", sub: "Return to Pandora", badge: "4K ULTRA HD", ytId: "a8Gx8wiNbs8", thumb: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80", genre: "Sci-Fi", dur: "3h 12m" },
    { title: "The Batman", sub: "Vengeance is his name", badge: "DARK EDITION", ytId: "mqqft2x_Aa4", thumb: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", genre: "Action", dur: "2h 56m" },
    { title: "John Wick 4", sub: "No way out. No mercy.", badge: "ACTION KING", ytId: "qEVUtrk8_B4", thumb: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80", genre: "Action", dur: "2h 49m" },
    { title: "Spider-Man: No Way Home", sub: "The multiverse breaks open", badge: "FAN FAVOURITE", ytId: "JfVOs4VSpmA", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&q=80", genre: "Action", dur: "2h 28m" },
    { title: "Parasite", sub: "Greed, class and a plan that spirals", badge: "OSCAR WINNER", ytId: "5xH0HfJHsaY", thumb: "https://images.unsplash.com/photo-1500462918081-acca4f733f6f?w=600&q=80", genre: "Thriller", dur: "2h 12m" },
    { title: "Tenet", sub: "Time runs both ways", badge: "NITFLIX PICK", ytId: "LdOM0x0XDMo", thumb: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&q=80", genre: "Thriller", dur: "2h 30m" },
    { title: "Top Gun: Maverick", sub: "Feel the need for speed again", badge: "CROWD PLEASER", ytId: "qSqVVswa420", thumb: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&q=80", genre: "Action", dur: "2h 11m" },
    { title: "Everything Everywhere", sub: "All at once, across the multiverse", badge: "AWARD WINNER", ytId: "wxN1T1uxQ2g", thumb: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80", genre: "Sci-Fi", dur: "2h 19m" },
    { title: "Joker", sub: "Put on a happy face", badge: "DARK CLASSIC", ytId: "zAGVQLHvwOY", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", genre: "Drama", dur: "2h 2m" },
    { title: "The Revenant", sub: "Blood lost. Life found.", badge: "SURVIVAL", ytId: "QRfj1VCg16E", thumb: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80", genre: "Drama", dur: "2h 36m" },
];

const galleryImgs = [
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80", size: "large" },
    { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", size: "medium" },
    { src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80", size: "small" },
    { src: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=700&q=80", size: "wide" },
    { src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80", size: "small" },
    { src: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&q=80", size: "medium" },
    { src: "https://images.unsplash.com/photo-1497015289639-54688650d173?w=600&q=80", size: "medium" },
    { src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=700&q=80", size: "wide" },
    { src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80", size: "small" },
];

const faqs = [
    { q: "What is Nitflix?", a: "Nitflix is a streaming service offering award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
    { q: "How much does Nitflix cost?", a: "Plans range from ₹149 to ₹799 a month. No extra fees, no contracts." },
    { q: "Where can I watch?", a: "Watch anywhere, anytime on any device — Smart TV, laptop, phone, or tablet." },
    { q: "How do I cancel?", a: "No contracts, no commitments. Cancel your account online in two clicks, anytime." },
    { q: "What can I watch?", a: "Thousands of feature films, TV shows, documentaries, anime, and Nitflix Originals." },
];


// ── WISHLIST STATE ──
let wishlist = [];

// ── CURRENT TRAILER INDEX ──
let currentTrailerIdx = 0;


// ── BUILD MOVIE CARD ──
function buildCard(m) {
    return `
    <div class="card">
        <img src="${m.img}" alt="${m.title}" loading="lazy">
        <div class="card-overlay">
            <div class="card-title">${m.title}</div>
            <div class="card-meta">
                <span class="match">${m.match}</span>
                <span>${m.year}</span>
            </div>
            <div class="card-actions">
                <button class="card-btn play">&#9654;</button>
                <button class="card-btn" onclick='addToWishlist(${JSON.stringify(m)})'>&#10025;</button>
            </div>
        </div>
    </div>`;
}

// ── RENDER MOVIE CARDS ──
document.getElementById('trending-row').innerHTML = movies.map(buildCard).join('');
document.getElementById('picks-row').innerHTML = picks.map(buildCard).join('');


// ── RENDER TRAILERS ──
const tg = document.getElementById('trailers-grid');

// "Play All" button injected above the grid
const playAllBtn = document.createElement('button');
playAllBtn.className = 'btn-primary';
playAllBtn.style.cssText = 'margin-bottom:24px;letter-spacing:2px;';
playAllBtn.innerHTML = '&#9654;&#9654; Play All ' + trailers.length + ' Trailers';
playAllBtn.onclick = () => openVideo(0);
tg.parentElement.insertBefore(playAllBtn, tg);

trailers.forEach((t, i) => {
    const d = document.createElement('div');
    d.className = 'trailer-card';
    d.setAttribute('data-idx', i);
    d.innerHTML = `
    <div class="trailer-thumb" onclick="openVideo(${i})">
        <img src="${t.thumb}" alt="${t.title}" loading="lazy">
        <div class="play-overlay"><div class="play-circle">&#9654;</div></div>
        <div class="trailer-badge">${t.badge}</div>
        <div style="position:absolute;bottom:8px;right:10px;background:rgba(0,0,0,.7);
                    color:#aaa;font-size:.65rem;padding:2px 7px;border-radius:3px;">
            ${i + 1} / ${trailers.length}
        </div>
    </div>
    <div class="trailer-info">
        <h3>${t.title}</h3>
        <p>${t.sub}</p>
        <div class="trailer-meta">
            <span>&#127917; ${t.genre}</span>
            <span>&#9203; ${t.dur}</span>
            <span onclick="openVideo(${i})"
                  style="margin-left:auto;color:#E50914;font-weight:700;cursor:pointer;
                         padding:4px 10px;border:1px solid #E50914;border-radius:3px;
                         font-size:.72rem;letter-spacing:1px;transition:.2s;"
                  onmouseover="this.style.background='#E50914';this.style.color='#fff'"
                  onmouseout="this.style.background='transparent';this.style.color='#E50914'">
                &#9654; PLAY
            </span>
        </div>
    </div>`;
    tg.appendChild(d);
});


// ── RENDER GALLERY ──
const gg = document.getElementById('gallery-grid');
galleryImgs.forEach((g, i) => {
    const d = document.createElement('div');
    d.className = `gi ${g.size}`;
    d.innerHTML = `<img src="${g.src}" alt="Gallery ${i + 1}" loading="lazy">`;
    d.addEventListener('click', () => openLightbox(i));
    gg.appendChild(d);
});


// ── RENDER FAQ ──
document.getElementById('faq-list').innerHTML = '';
faqs.forEach(f => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `<button class="faq-q">${f.q}<span class="faq-icon">+</span></button><div class="faq-a">${f.a}</div>`;
    item.querySelector('.faq-q').addEventListener('click', () => {
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!open) item.classList.add('open');
    });
    document.getElementById('faq-list').appendChild(item);
});


// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});


// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));


// ════════════════════════════════════════
//  VIDEO MODAL  — Prev / Next / Counter
// ════════════════════════════════════════

function openVideo(idx) {
    currentTrailerIdx = (idx + trailers.length) % trailers.length;
    const t = trailers[currentTrailerIdx];

    // Load iframe
    document.getElementById('yt-frame').src =
        `https://www.youtube.com/embed/${t.ytId}?autoplay=1&rel=0`;

    // Text info
    document.getElementById('vt-title').textContent = t.title;
    document.getElementById('vt-sub').textContent = t.sub + '  ·  ' + t.genre + '  ·  ' + t.dur;

    // Counter  e.g.  3 / 18
    document.getElementById('vt-counter').textContent =
        (currentTrailerIdx + 1) + ' / ' + trailers.length;

    // Highlight active card
    document.querySelectorAll('.trailer-card').forEach((el, i) => {
        el.style.outline = (i === currentTrailerIdx) ? '2px solid #E50914' : 'none';
    });

    document.getElementById('video-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function videoPrev() {
    openVideo(currentTrailerIdx - 1);
}

function videoNext() {
    openVideo(currentTrailerIdx + 1);
}

function closeVideo() {
    document.getElementById('video-modal').classList.remove('show');
    document.getElementById('yt-frame').src = '';
    document.body.style.overflow = '';
    document.querySelectorAll('.trailer-card').forEach(el => el.style.outline = 'none');
}

// Click outside modal to close
document.getElementById('video-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('video-modal')) closeVideo();
});


// ── LIGHTBOX ──
let lbIdx = 0;

function openLightbox(i) {
    lbIdx = i;
    document.getElementById('lb-img').src = galleryImgs[i].src;
    document.getElementById('lightbox').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('show');
    document.body.style.overflow = '';
}

function lbNav(dir) {
    lbIdx = (lbIdx + dir + galleryImgs.length) % galleryImgs.length;
    document.getElementById('lb-img').src = galleryImgs[lbIdx].src;
}

document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
});


// ── AUTH MODAL ──
let mode = 'signin';

function openModal(m) {
    mode = m;
    updateModal();
    document.getElementById('modal-backdrop').classList.add('show');
}

function closeModal() {
    document.getElementById('modal-backdrop').classList.remove('show');
}

function closeModalOutside(e) {
    if (e.target === document.getElementById('modal-backdrop')) closeModal();
}

function switchModal() {
    mode = mode === 'signin' ? 'signup' : 'signin';
    updateModal();
}

function updateModal() {
    const si = mode === 'signin';
    document.getElementById('modal-title').textContent = si ? 'Sign In' : 'Create Account';
    document.getElementById('modal-btn').textContent = si ? 'Sign In' : 'Sign Up Free';
    document.getElementById('modal-name-wrap').style.display = si ? 'none' : 'block';
    document.getElementById('modal-switch').innerHTML = si
        ? 'New to Nitflix? <a onclick="switchModal()">Create an account</a>'
        : 'Already have an account? <a onclick="switchModal()">Sign in</a>';
}

document.getElementById('modal-btn').addEventListener('click', () => {
    const email = document.querySelector('.modal input[type="email"]').value;
    const password = document.querySelector('.modal input[type="password"]').value;

    if (mode === 'signin') {
        console.log("=== SIGN IN DATA ===");
        console.log("Email:", email);
        console.log("Password:", password);
    } else {
        const name = document.querySelector('#modal-name-wrap input').value;
        console.log("=== SIGN UP DATA ===");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }
});


// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', e => {
    const videoOpen = document.getElementById('video-modal').classList.contains('show');
    const lbOpen = document.getElementById('lightbox').classList.contains('show');

    if (e.key === 'Escape') { closeModal(); closeVideo(); closeLightbox(); }

    if (videoOpen) {
        if (e.key === 'ArrowLeft') videoPrev();
        if (e.key === 'ArrowRight') videoNext();
    }
    if (lbOpen) {
        if (e.key === 'ArrowLeft') lbNav(-1);
        if (e.key === 'ArrowRight') lbNav(1);
    }
});


// ── REGISTER REDIRECT ──
function goToRegister() {
    window.location.href = "web.html";
}


// ── PLAN BUTTON → PAYMENT MODAL (jQuery) ──
$('.plan button').click(function () {
    const planName = $(this).closest('.plan').find('.plan-name').text();
    const planPrice = $(this).closest('.plan').find('.plan-price').text();
    $('#payment-backdrop').addClass('show');
    console.log("Selected Plan:", planName);
    console.log("Price:", planPrice);
});

function closePayment() {
    $('#payment-backdrop').removeClass('show');
}

$('#payNowBtn').click(function () {
    const name = $('#cardName').val();
    const card = $('#cardNumber').val();
    const expiry = $('#expiry').val();
    const cvv = $('#cvv').val();

    if (!name || !card || !expiry || !cvv) {
        alert("Please fill all payment details");
        return;
    }

    console.log("=== PAYMENT DETAILS ===");
    console.log("Card Holder:", name);
    console.log("Card Number:", card);
    console.log("Expiry:", expiry);
    console.log("CVV:", cvv);

    $('.modal').append('<div class="success-message">Payment Successful ✅</div>');

    setTimeout(() => {
        closePayment();
        $('.success-message').remove();
        $('#cardName, #cardNumber, #expiry, #cvv').val('');
    }, 2000);
});

$('#payment-backdrop').click(function (e) {
    if (e.target.id === 'payment-backdrop') closePayment();
});


// ── WISHLIST ──
function addToWishlist(movie) {
    if (wishlist.find(item => item.title === movie.title)) {
        alert("Already in Wishlist ❤️");
        return;
    }
    wishlist.push(movie);
    updateWishlist();
    toggleWishlist();
    alert(movie.title + " added to Wishlist ❤️");
}

function updateWishlist() {
    document.getElementById('wishlist-count').innerText = wishlist.length;

    let html = '';
    if (wishlist.length === 0) {
        html = `<p style="color:white;text-align:center;margin-top:20px;">No movies in wishlist ❤️</p>`;
    } else {
        wishlist.forEach((item, index) => {
            html += `
            <div class="wishlist-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="wishlist-info">
                    <h4>${item.title}</h4>
                    <p>${item.year}</p>
                    <p style="color:#46d369">${item.match} Match</p>
                    <button class="remove-btn" onclick="removeWishlist(${index})">Remove</button>
                </div>
            </div>`;
        });
    }
    document.getElementById('wishlist-items').innerHTML = html;
}

function removeWishlist(index) {
    wishlist.splice(index, 1);
    updateWishlist();
}

function toggleWishlist() {
    document.getElementById('wishlist-panel').classList.toggle('show');
}