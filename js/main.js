(function () {
  "use strict";

  var arrowSVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function card(p) {
    var cls = "showcase-card reveal" + (p.flagship ? " showcase-card--flagship" : "");
    return (
      '<a class="' + cls + '" href="product.html?product=' + p.slug + '" style="background:' + p.color + '">' +
        '<span class="photo-card">' +
          '<img src="' + p.image + '" alt="Fresh Moroccan ' + p.name.toLowerCase() + '" loading="lazy">' +
        "</span>" +
        '<span class="card-row">' +
          '<span class="card-name">' + p.name + "</span>" +
          '<span class="card-arrow" aria-hidden="true">' + arrowSVG + "</span>" +
        "</span>" +
      "</a>"
    );
  }

  // ---- mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- footer year ----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- scroll reveal ----
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function initReveal() {
    // Extra elements that ease in as they scroll into view.
    document.querySelectorAll(".product-stats, .cta-row, .more-products, .journey, .markets-map")
      .forEach(function (el) { el.classList.add("reveal"); });

    var targets = document.querySelectorAll(".reveal");

    // Stagger siblings that arrive together (grid cards, steps, etc.).
    var groups = new Map();
    targets.forEach(function (el) {
      var list = groups.get(el.parentElement) || [];
      list.push(el);
      groups.set(el.parentElement, list);
    });
    groups.forEach(function (list) {
      if (list.length < 2) return;
      list.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", Math.min(i, 4) * 90 + "ms");
      });
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---- about: interactive markets map ----
  var marketData = {
    ma: { title: "Morocco", text: "Where it starts — our sourcing base." },
    uk: { title: "United Kingdom", text: "Primary market — our home base for delivery." },
    fr: { title: "France", text: "A growing market alongside the UK." }
  };
  var marketMap = document.querySelector("[data-markets-map]");
  if (marketMap) {
    var mapSvg = marketMap.querySelector("[data-map-svg]");
    var marketFlags = marketMap.querySelectorAll("[data-market]");
    var marketCard = marketMap.querySelector("[data-market-card]");
    var marketCardTitle = marketCard.querySelector("[data-market-card-title]");
    var marketCardText = marketCard.querySelector("[data-market-card-text]");
    var openFlag = null;
    var phoneMap = window.matchMedia("(max-width: 720px)");

    // Full world on wide screens; zoomed to the Atlantic/Europe on phones so the flags stay readable.
    function setMapView() {
      mapSvg.setAttribute("viewBox", phoneMap.matches ? "355 70 270 218" : "0 0 1000 490");
      if (openFlag) placeMarketCard(openFlag);
    }
    function placeMarketCard(flag) {
      var box = marketMap.getBoundingClientRect();
      var ring = flag.querySelector(".flag-ring").getBoundingClientRect();
      var half = marketCard.offsetWidth / 2;
      var x = ring.left + ring.width / 2 - box.left;
      marketCard.style.left = Math.max(half + 4, Math.min(box.width - half - 4, x)) + "px";
      marketCard.style.top = ring.top - box.top + "px";
    }
    function closeMarketCard() {
      marketFlags.forEach(function (f) { f.setAttribute("aria-expanded", "false"); });
      marketCard.hidden = true;
      openFlag = null;
    }
    function toggleMarket(flag) {
      var wasOpen = flag.getAttribute("aria-expanded") === "true";
      closeMarketCard();
      if (wasOpen) return;
      var data = marketData[flag.dataset.market];
      marketCardTitle.textContent = data.title;
      marketCardText.textContent = data.text;
      marketCard.hidden = false;
      flag.setAttribute("aria-expanded", "true");
      openFlag = flag;
      placeMarketCard(flag);
    }
    marketFlags.forEach(function (flag) {
      flag.addEventListener("click", function (e) { e.stopPropagation(); toggleMarket(flag); });
      flag.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMarket(flag); }
      });
    });
    document.addEventListener("click", closeMarketCard);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMarketCard(); });
    if (phoneMap.addEventListener) phoneMap.addEventListener("change", setMapView);
    else phoneMap.addListener(setMapView);
    window.addEventListener("resize", function () { if (openFlag) placeMarketCard(openFlag); });
    setMapView();
  }

  // ---- quality: interactive process explorer ----
  var stepper = document.querySelector("[data-stepper]");
  if (stepper) {
    var qSteps = [
      { color: "#145c39", title: "Source",
        text: "Trusted growers and packing partners across Morocco.",
        list: ["Family farms & growers", "Trusted packing partners", "Morocco\u2019s main growing regions"] },
      { color: "#c2410c", title: "Select",
        text: "Chosen for freshness, colour, size and what each market needs.",
        list: ["Freshness", "Colour & appearance", "Variety & size"] },
      { color: "#8a5a3b", title: "Pack",
        text: "Packed with care and ready to travel.",
        list: ["Packed with care", "Ready to travel", "Built around the market"] },
      { color: "#c81e3e", title: "Export",
        text: "From packhouse to final shipment, clear and reliable.",
        list: ["Clear communication", "Responsive service", "Reliable delivery"] }
    ];
    var qTabs = stepper.querySelectorAll(".q-tab");
    var qScenes = stepper.querySelectorAll(".scene");
    var qStage = stepper.querySelector("[data-stage]");
    var qCopy = stepper.querySelector("[data-q-copy]");
    var qTitle = stepper.querySelector("[data-q-title]");
    var qText = stepper.querySelector("[data-q-text]");
    var qList = stepper.querySelector("[data-q-list]");
    var qGhost = stepper.querySelector("[data-q-ghost]");
    var qCurrent = 0;
    var qVisible = false;

    var Q_TIME = 4000;       // auto-advance
    var Q_HOLD = 9000;       // pause after the visitor picks a step
    var qTimer = null;
    var qHeld = false;       // mouse resting over the explorer
    var qUser = false;       // visitor just chose a step

    function qPlay() {
      clearTimeout(qTimer);
      var on = !reduceMotion && qVisible;
      stepper.classList.toggle("is-playing", on);
      stepper.classList.toggle("is-held", qHeld || qUser);
      if (!on || qHeld) return;
      if (qUser) {
        qTimer = setTimeout(function () {
          qUser = false;
          stepper.classList.remove("is-playing");
          void stepper.offsetWidth;
          qPlay();
        }, Q_HOLD);
      } else {
        qTimer = setTimeout(function () { qGo(qCurrent + 1); }, Q_TIME);
      }
    }

    function qGo(i, focus, byUser) {
      qUser = !!byUser;
      qCurrent = (i + qSteps.length) % qSteps.length;
      var d = qSteps[qCurrent];
      qTabs.forEach(function (t, n) {
        var on = n === qCurrent;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      qScenes.forEach(function (s, n) { s.classList.toggle("is-active", n === qCurrent); });
      stepper.style.setProperty("--stage", d.color);
      qStage.setAttribute("aria-labelledby", "q-tab-" + qCurrent);
      qTitle.textContent = d.title;
      qText.textContent = d.text;
      qList.innerHTML = d.list.map(function (t) { return "<li>" + t + "</li>"; }).join("");
      qGhost.textContent = "0" + (qCurrent + 1);
      qCopy.classList.remove("is-swapping");
      void qCopy.offsetWidth;
      qCopy.classList.add("is-swapping");
      if (focus) qTabs[qCurrent].focus();
      // keep the active pill in view on phones (horizontal tab row)
      var row = qTabs[qCurrent].parentNode;
      if (row.scrollWidth > row.clientWidth) {
        row.scrollTo({ left: qTabs[qCurrent].offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
      }
      // restart the progress bar animation
      stepper.classList.remove("is-playing");
      void stepper.offsetWidth;
      qPlay();
    }

    qTabs.forEach(function (tab, n) {
      tab.addEventListener("click", function () { qGo(n, false, true); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = qCurrent + 1;
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = qCurrent - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = qSteps.length - 1;
        if (next !== null) { e.preventDefault(); qGo(next, true, true); }
      });
    });
    // pause while a mouse is over the explorer; touch never pauses it
    stepper.addEventListener("mouseenter", function () {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) { qHeld = true; clearTimeout(qTimer); stepper.classList.add("is-held"); }
    });
    stepper.addEventListener("mouseleave", function () {
      if (qHeld) { qHeld = false; stepper.classList.remove("is-playing"); void stepper.offsetWidth; qPlay(); }
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        qVisible = entries[0].isIntersecting;
        qPlay();
      }, { threshold: 0.15 }).observe(stepper);
    }
  }

  // ---- home: rotating hero photo ----
  var rotator = document.querySelector("[data-hero-rotator]");
  if (rotator && !reduceMotion) {
    var slides = rotator.querySelectorAll("img");
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 3500);
  }

  // ---- home: product grid ----
  var grid = document.querySelector("[data-product-grid]");
  if (grid && window.PRODUCTS) {
    grid.innerHTML = window.PRODUCTS.map(card).join("");
    // Balance the last row of cards (the flagship spans the full first row).
    var rest = grid.querySelectorAll(".showcase-card:not(.showcase-card--flagship)");
    var leftover = rest.length % 3;
    if (leftover === 1 && rest.length >= 4) {
      // e.g. 4 cards → two rows of two, rather than three plus one
      for (var k = rest.length - 4; k < rest.length; k++) rest[k].classList.add("span-half");
    } else if (leftover === 1) rest[rest.length - 1].classList.add("span-full");
    if (leftover === 2) {
      rest[rest.length - 1].classList.add("span-half");
      rest[rest.length - 2].classList.add("span-half");
    }
  }

  // ---- about: product chips ----
  var chipBox = document.querySelector("[data-product-chips]");
  if (chipBox && window.PRODUCTS) {
    chipBox.innerHTML = window.PRODUCTS.map(function (p) {
      return '<a class="ab-chip" style="--chip:' + p.color + '" href="product.html?product=' + p.slug + '">' + p.name + "</a>";
    }).join("");
  }

  // ---- product template ----
  var productRoot = document.querySelector("[data-product-page]");
  if (productRoot && window.PRODUCTS) {
    var params = new URLSearchParams(location.search);
    var slug = params.get("product");
    var product = window.PRODUCTS.find(function (p) { return p.slug === slug; }) || window.PRODUCTS[0];

    document.title = product.name + " — ATLASSXPORT";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", product.description);

    var hero = document.querySelector("[data-product-hero]");
    hero.style.background = product.color;
    document.documentElement.style.setProperty("--tint", product.color);

    var img = document.querySelector("[data-product-image]");
    img.src = product.image;
    img.alt = "Fresh Moroccan " + product.name.toLowerCase();
    document.querySelector("[data-product-name]").textContent = product.name;
    document.querySelector("[data-product-tagline]").textContent = product.slogan;
    document.querySelector("[data-product-description]").textContent = product.description;

    document.querySelector("[data-region]").textContent = product.region;
    document.querySelector("[data-season]").textContent = product.season;
    document.querySelector("[data-packaging]").textContent = product.packaging;
    document.querySelector("[data-calibre]").textContent = product.calibre;

    var more = document.querySelector("[data-more-products]");
    if (more) {
      var others = window.PRODUCTS.filter(function (p) { return p.slug !== product.slug; });
      more.innerHTML = others.map(card).join("");
    }
  }

  initReveal();

  // ---- contact: populate product select from central data ----
  var productSelect = document.querySelector("[data-product-select]");
  if (productSelect && window.PRODUCTS) {
    window.PRODUCTS.forEach(function (p) {
      var opt = document.createElement("option");
      opt.value = p.name;
      opt.textContent = p.name;
      productSelect.appendChild(opt);
    });
  }

  // ---- contact form (front end only — no backend wired up yet) ----
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // NOTE: hook a real submission (fetch to an email/API service) here later.
      // The form is left intact in the DOM so a backend can read FormData(form).
      var note = document.querySelector("[data-form-note]");
      form.reset();
      form.hidden = true;
      if (note) {
        note.hidden = false;
        note.focus();
      }
    });
  }

  // ---- scroll polish: progress line, auto-hiding header, hero parallax ----
  (function () {
    if (reduceMotion) return;

    var header = document.querySelector(".site-header");
    var menu = document.querySelector(".nav-links");
    var hero = document.querySelector(".home-hero");
    var heroLayer = hero && hero.querySelector(".hero-rotator");

    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";

      if (header) {
        var menuOpen = menu && menu.classList.contains("open");
        var goingDown = y > lastY + 6;
        var goingUp = y < lastY - 6;
        header.classList.toggle("is-scrolled", y > 8);
        if (y < 120 || goingUp || menuOpen) header.classList.remove("is-hidden");
        else if (goingDown) header.classList.add("is-hidden");
      }
      if (Math.abs(y - lastY) > 6) lastY = y;

      if (heroLayer) {
        var r = hero.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          var limit = r.height * 0.03;
          var shift = Math.max(-limit, Math.min(limit, -r.top * 0.18));
          heroLayer.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0) scale(1.05)";
        }
      }
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    if (header) {
      header.addEventListener("focusin", function () { header.classList.remove("is-hidden"); });
    }
    update();
  })();
})();
