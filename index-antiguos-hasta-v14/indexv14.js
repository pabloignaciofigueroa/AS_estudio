/* ============================================================
   AS · indexv14 — motion + interactions
   Vanilla + GSAP/ScrollTrigger (CDN)
   ============================================================ */
(() => {
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";

  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------- 1. CUSTOM CURSOR ---------- */
  const cursor = $(".cursor");
  const cursorDot = $(".cursor-dot");
  if (cursor && window.matchMedia("(pointer: fine)").matches) {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; cursorDot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`; });
    const raf = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    raf();
    const hoverables = "a, button, [data-hover], .proj__thumb, .proof__slide, .service";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(hoverables)) cursor.classList.add("is-hover"); });
    document.addEventListener("mouseout",  (e) => { if (e.target.closest(hoverables)) cursor.classList.remove("is-hover"); });
    document.addEventListener("mousedown", () => cursor.classList.add("is-down"));
    document.addEventListener("mouseup",   () => cursor.classList.remove("is-down"));
  }

  /* ---------- 2. HEADER SCROLL STATE ---------- */
  const header = $(".site-header");
  const headerScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  headerScroll();
  window.addEventListener("scroll", headerScroll, { passive: true });

  /* ---------- 3. TYPED HEADER ---------- */
  const typed = $("[data-typed]");
  if (typed && !prefersReduced) {
    const words = typed.dataset.typed.split(",").map(w => w.trim()).filter(Boolean);
    let wIdx = 0, cIdx = 0, deleting = false;
    typed.textContent = "";
    const tick = () => {
      const word = words[wIdx];
      if (!deleting) {
        cIdx++;
        typed.textContent = word.slice(0, cIdx);
        if (cIdx === word.length) { deleting = true; return setTimeout(tick, 1800); }
        setTimeout(tick, 80 + Math.random() * 40);
      } else {
        cIdx--;
        typed.textContent = word.slice(0, cIdx);
        if (cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; return setTimeout(tick, 240); }
        setTimeout(tick, 40);
      }
    };
    setTimeout(tick, 1200);
  }

  /* ---------- 4. HERO PARTICLES (canvas, Poisson-inspired) ---------- */
  (() => {
    const canvas = $(".hero__particles");
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, particles = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    // simplified Poisson-like: grid jitter distribution
    const seed = () => {
      particles = [];
      const density = Math.max(70, Math.floor((w * h) / 9000));
      for (let i = 0; i < density; i++) {
        const size = Math.random() * 2.2 + 0.4;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: size,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.12 - 0.04,
          alpha: Math.random() * 0.6 + 0.25,
          hue: Math.random() > 0.55 ? "#ffffff" : "#8cb0ff",
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    let mouseX = -9999, mouseY = -9999;
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        p.phase += 0.01;
        // mouse repulsion
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (14000 - d2) / 14000;
          p.x += (dx / Math.sqrt(d2 + 1)) * f * 0.6;
          p.y += (dy / Math.sqrt(d2 + 1)) * f * 0.6;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const twinkle = 0.5 + 0.5 * Math.sin(p.phase);
        ctx.beginPath();
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = p.alpha * (0.35 + 0.65 * twinkle);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 8500) {
            const o = (1 - d2 / 8500) * 0.28;
            ctx.strokeStyle = `rgba(180, 205, 255, ${o})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
  })();

  /* ---------- 5. GSAP REVEALS ---------- */
  if (hasGSAP && !prefersReduced) {
    // Hero content reveal on load
    const heroTitleLines = $$("[data-split]");
    gsap.set(heroTitleLines, { yPercent: 110, opacity: 0 });
    gsap.to(heroTitleLines, {
      yPercent: 0, opacity: 1, duration: 1.2, ease: "expo.out", stagger: 0.12, delay: 0.2,
    });

    $$("[data-reveal]").forEach((el) => {
      const delay = parseFloat(el.dataset.revealDelay || 0);
      gsap.fromTo(el,
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "expo.out", delay,
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    });

    // Hero image parallax
    const heroImg = $("[data-hero-img]");
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 12,
        scale: 1.18,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    }
  } else {
    // fallback
    document.body.classList.add("no-gsap");
    $$("[data-reveal]").forEach((el, i) => {
      el.style.setProperty("--r-delay", 80 * i);
    });
  }

  /* ---------- 6. HORIZONTAL PROOF SCROLL ---------- */
  if (hasGSAP && !prefersReduced) {
    const track = $(".proof__track");
    const viewport = $(".proof__viewport");
    if (track && viewport) {
      const distance = () => track.scrollWidth - viewport.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: ".proof",
          start: "top top+=80",
          end: () => "+=" + distance(),
          scrub: 0.8,
          pin: ".proof",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const fill = $("[data-proof-fill]");
            const count = $("[data-proof-count]");
            const total = $$(".proof__slide").length;
            if (fill) fill.style.width = `${Math.min(100, Math.max(4, self.progress * 100))}%`;
            if (count) {
              const idx = Math.min(total, Math.max(1, Math.ceil(self.progress * total) || 1));
              count.textContent = `${String(idx).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
            }
          },
        },
      });
    }
  }

  /* ---------- 7. PROJECT GALLERY MORPHING ---------- */
  $$("[data-proj]").forEach((proj) => {
    const hero = $(".proj__hero", proj);
    const mainImg = $("[data-proj-main]", proj);
    const idxOut = $("[data-proj-idx]", proj);
    const thumbs = $$(".proj__thumb", proj);
    thumbs.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("is-active")) return;
        thumbs.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        const full = btn.dataset.full;
        const alt = btn.dataset.alt || btn.querySelector("img")?.alt || mainImg.alt || "";
        hero.classList.add("is-morphing");
        const preload = new Image();
        preload.onload = () => {
          mainImg.src = full;
          mainImg.alt = alt;
          requestAnimationFrame(() => hero.classList.remove("is-morphing"));
        };
        preload.src = full;
        if (idxOut) idxOut.textContent = `${String(i + 1).padStart(2, "0")} / ${String(thumbs.length).padStart(2, "0")}`;
      });
    });
  });

  /* ---------- 8. COUNTERS ---------- */
  $$("[data-counter]").forEach((el) => {
    const out = $("[data-counter-out]", el);
    const to = parseFloat(el.dataset.to || "0");
    const from = parseFloat(el.dataset.from || "0");
    if (!out) return;
    const run = () => {
      if (prefersReduced) { out.textContent = to; return; }
      const obj = { v: from };
      if (hasGSAP) {
        gsap.to(obj, {
          v: to, duration: 1.8, ease: "expo.out",
          onUpdate: () => { out.textContent = Math.round(obj.v); },
        });
      } else {
        out.textContent = to;
      }
    };
    if (hasGSAP && window.ScrollTrigger) {
      ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: run });
    } else {
      run();
    }
  });

  /* ---------- 9. SMOOTH ANCHOR LINKS ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---------- 10. REFRESH ST ON LOAD ---------- */
  window.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
})();
