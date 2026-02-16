/**
 * 여승준 ♥ 최은희 Wedding Invitation
 *
 * 1. Language toggle (KO/EN)
 * 2. Scroll reveal animations
 * 3. Hero parallax fade
 * 4. Calendar rendering + D-Day countdown
 * 5. Gallery carousel + arrows + dots + counter
 * 6. Location transport tabs + copy address
 * 7. Account copy buttons
 * 8. Toast notifications
 */

document.addEventListener('DOMContentLoaded', () => {

    // ════════════════════════════════════════════════════════
    // CONFIG
    // ════════════════════════════════════════════════════════
    const WEDDING_DATE = new Date(2026, 4, 2, 17, 30, 0); // May 2, 2026 5:30 PM
    const VENUE_ADDRESS = '서울 서초구 신흥안길 40-15';
    const VENUE_ADDRESS_EN = '40-15 Sinheungan-gil, Seocho District, Seoul';

    // ════════════════════════════════════════════════════════
    // 0. BACKGROUND MUSIC
    // ════════════════════════════════════════════════════════
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    if (bgMusic && musicToggle) {
        bgMusic.volume = 0.4;

        function setPlaying(playing) {
            if (playing) {
                bgMusic.play().then(() => {
                    musicToggle.classList.add('is-playing');
                }).catch(() => {});
            } else {
                bgMusic.pause();
                musicToggle.classList.remove('is-playing');
            }
        }

        // Try autoplay
        setPlaying(true);

        // If browser blocked autoplay, start on first user interaction
        function startOnInteraction() {
            if (bgMusic.paused) {
                setPlaying(true);
            }
            document.removeEventListener('click', startOnInteraction);
            document.removeEventListener('touchstart', startOnInteraction);
            document.removeEventListener('scroll', startOnInteraction);
        }

        document.addEventListener('click', startOnInteraction, { once: false });
        document.addEventListener('touchstart', startOnInteraction, { once: false });
        document.addEventListener('scroll', startOnInteraction, { once: false });

        // Toggle button
        musicToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            setPlaying(bgMusic.paused);
        });
    }

    // ════════════════════════════════════════════════════════
    // 1. LANGUAGE TOGGLE
    // ════════════════════════════════════════════════════════
    const langToggle = document.getElementById('langToggle');
    const htmlEl = document.documentElement;

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-lang');
            const next = current === 'ko' ? 'en' : 'ko';
            htmlEl.setAttribute('data-lang', next);
            htmlEl.setAttribute('lang', next);

            const label = langToggle.querySelector('.lang-toggle__label');
            if (label) label.textContent = label.getAttribute('data-' + next);
        });
    }

    // ════════════════════════════════════════════════════════
    // 2. SCROLL REVEAL
    // ════════════════════════════════════════════════════════
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ════════════════════════════════════════════════════════
    // 3. HERO PARALLAX FADE
    // ════════════════════════════════════════════════════════
    const heroContent = document.querySelector('.hero__content');
    const heroSection = document.querySelector('.hero');

    if (heroContent && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < heroHeight) {
                const progress = scrolled / heroHeight;
                heroContent.style.opacity = Math.max(0, 1 - progress * 1.2);
                heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
            }
        }, { passive: true });
    }

    // ════════════════════════════════════════════════════════
    // 4. CALENDAR
    // ════════════════════════════════════════════════════════
    function renderCalendar() {
        const container = document.getElementById('calendarGrid');
        if (!container) return;

        const year = WEDDING_DATE.getFullYear();
        const month = WEDDING_DATE.getMonth();
        const weddingDay = WEDDING_DATE.getDate();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December'];

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let html = `<p class="calendar__month-label">${monthNames[month]} ${year}</p>`;
        html += '<table class="calendar__grid"><thead><tr>';

        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => {
            html += `<th>${d}</th>`;
        });
        html += '</tr></thead><tbody><tr>';

        for (let i = 0; i < firstDay; i++) html += '<td></td>';

        for (let day = 1; day <= daysInMonth; day++) {
            const dow = (firstDay + day - 1) % 7;
            if (dow === 0 && day !== 1) html += '</tr><tr>';

            if (day === weddingDay) {
                html += `<td class="is-wedding-day"><span>${day}</span></td>`;
            } else {
                html += `<td>${day}</td>`;
            }
        }

        const lastDow = (firstDay + daysInMonth - 1) % 7;
        for (let i = lastDow + 1; i < 7; i++) html += '<td></td>';

        html += '</tr></tbody></table>';
        container.innerHTML = html;
    }

    renderCalendar();

    // D-Day Countdown
    function updateCountdown() {
        const now = new Date();
        const diff = WEDDING_DATE - now;

        if (diff <= 0) {
            document.getElementById('countDays').textContent = 'D-Day';
            document.getElementById('countHours').textContent = '';
            document.getElementById('countMinutes').textContent = '';
            document.getElementById('countSeconds').textContent = '';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countDays').textContent = String(days).padStart(3, '0');
        document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ════════════════════════════════════════════════════════
    // 5. GALLERY CAROUSEL
    // ════════════════════════════════════════════════════════
    const track = document.getElementById('galleryTrack');
    const dotsContainer = document.getElementById('galleryDots');
    const currentSlideEl = document.getElementById('galleryCurrentSlide');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');

    if (track && dotsContainer) {
        const slides = track.querySelectorAll('.gallery__slide');
        const total = slides.length;

        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'gallery__dot' + (i === 0 ? ' is-active' : '');
            dot.setAttribute('data-index', i);
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.gallery__dot');

        function getActiveIndex() {
            const trackRect = track.getBoundingClientRect();
            const center = trackRect.left + trackRect.width / 2;
            let closestIndex = 0;
            let closestDist = Infinity;

            slides.forEach((slide, i) => {
                const slideRect = slide.getBoundingClientRect();
                const slideCenter = slideRect.left + slideRect.width / 2;
                const dist = Math.abs(slideCenter - center);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestIndex = i;
                }
            });

            return closestIndex;
        }

        function updateIndicators() {
            const idx = getActiveIndex();
            dots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));
            if (currentSlideEl) currentSlideEl.textContent = idx + 1;
        }

        function scrollToSlide(index) {
            if (index < 0) index = 0;
            if (index >= total) index = total - 1;
            slides[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }

        track.addEventListener('scroll', updateIndicators, { passive: true });

        if (prevBtn) prevBtn.addEventListener('click', () => scrollToSlide(getActiveIndex() - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => scrollToSlide(getActiveIndex() + 1));

        dotsContainer.addEventListener('click', (e) => {
            const dot = e.target.closest('.gallery__dot');
            if (dot) scrollToSlide(parseInt(dot.dataset.index, 10));
        });
    }

    // ════════════════════════════════════════════════════════
    // 6. LOCATION TRANSPORT TABS
    // ════════════════════════════════════════════════════════
    document.querySelectorAll('.location__tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const transport = tab.dataset.transport;
            document.querySelectorAll('.location__tab').forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');
            document.querySelectorAll('.location__transport-panel').forEach(p => p.classList.remove('is-active'));
            const panel = document.querySelector(`.location__transport-panel[data-panel="${transport}"]`);
            if (panel) panel.classList.add('is-active');
        });
    });

    // Copy address buttons
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const copyAddressCar = document.getElementById('copyAddressCar');

    function getAddress() {
        const lang = htmlEl.getAttribute('data-lang');
        return lang === 'en' ? VENUE_ADDRESS_EN : VENUE_ADDRESS;
    }

    if (copyAddressBtn) {
        copyAddressBtn.addEventListener('click', () => {
            copyToClipboard(getAddress(), htmlEl.getAttribute('data-lang') === 'en' ? 'Address copied' : '주소가 복사되었습니다');
        });
    }

    if (copyAddressCar) {
        copyAddressCar.addEventListener('click', () => {
            copyToClipboard(getAddress(), htmlEl.getAttribute('data-lang') === 'en' ? 'Address copied' : '주소가 복사되었습니다');
        });
    }

    // ════════════════════════════════════════════════════════
    // 7. ACCOUNT COPY BUTTONS
    // ════════════════════════════════════════════════════════
    document.querySelectorAll('.accounts__copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const account = btn.dataset.account;
            const msg = htmlEl.getAttribute('data-lang') === 'en' ? 'Account number copied' : '계좌번호가 복사되었습니다';
            copyToClipboard(account, msg);
        });
    });

    // ════════════════════════════════════════════════════════
    // 8. TOAST + CLIPBOARD
    // ════════════════════════════════════════════════════════
    let toastEl = null;
    let toastTimeout = null;

    function showToast(message) {
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.className = 'toast';
            document.body.appendChild(toastEl);
        }
        clearTimeout(toastTimeout);
        toastEl.textContent = message;
        toastEl.classList.add('is-visible');
        toastTimeout = setTimeout(() => toastEl.classList.remove('is-visible'), 2000);
    }

    function copyToClipboard(text, successMessage) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(successMessage);
            }).catch(() => fallbackCopy(text, successMessage));
        } else {
            fallbackCopy(text, successMessage);
        }
    }

    function fallbackCopy(text, successMessage) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast(successMessage);
        } catch (e) {
            showToast('Copy failed');
        }
        document.body.removeChild(textarea);
    }

    // ════════════════════════════════════════════════════════
    // SMOOTH SCROLL
    // ════════════════════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ════════════════════════════════════════════════════════
    // 9. IMAGE PROTECTION & ZOOM SNAP-BACK
    // ════════════════════════════════════════════════════════
    // Block right-click on images
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // Block drag on images
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // Snap back to normal zoom when user releases pinch
    if (window.visualViewport) {
        let zoomTimeout;
        window.visualViewport.addEventListener('resize', () => {
            clearTimeout(zoomTimeout);
            if (window.visualViewport.scale > 1) {
                zoomTimeout = setTimeout(() => {
                    if (window.visualViewport.scale > 1) {
                        document.body.style.transition = 'none';
                        window.scrollTo({ top: window.scrollY, behavior: 'instant' });
                        // Reset zoom by toggling viewport meta
                        const meta = document.querySelector('meta[name="viewport"]');
                        const original = meta.getAttribute('content');
                        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
                        setTimeout(() => {
                            meta.setAttribute('content', original);
                        }, 100);
                    }
                }, 300);
            }
        });
    }

});
