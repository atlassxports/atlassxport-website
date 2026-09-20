(function () {
  "use strict";

  function businessCardFrontSVG() {
    return (
      '<svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ATLASSXPORT business card, front">' +
        '<rect width="900" height="500" fill="#14100d"/>' +
        // giant outlined mountain, echoing the logo's "A"
        '<polygon points="470,500 700,90 930,500" fill="none" stroke="#f6f0e1" stroke-opacity=".07" stroke-width="2"/>' +
        '<polygon points="560,500 700,250 840,500" fill="none" stroke="#f6f0e1" stroke-opacity=".07" stroke-width="2"/>' +
        // three slashes from the logo colours
        '<polygon points="660,500 705,500 900,305 900,260" fill="#c81e3e"/>' +
        '<polygon points="725,500 770,500 900,370 900,325" fill="#1f7a48"/>' +
        '<polygon points="790,500 835,500 900,435 900,390" fill="#e8720c"/>' +
        '<image href="assets/logo.png" x="80" y="120" width="150" height="117" preserveAspectRatio="xMidYMid meet"/>' +
        '<text x="80" y="332" font-family="Arial, sans-serif" font-weight="800" font-size="50" letter-spacing="7" fill="#f6f0e1">ATLASSXPORT</text>' +
        '<rect x="82" y="356" width="56" height="4" fill="#e8720c"/>' +
        '<text x="80" y="398" font-family="Arial, sans-serif" font-weight="600" font-size="20" letter-spacing="1" fill="#f6f0e1" opacity=".7">Fresh produces, sourced from Morocco.</text>' +
      "</svg>"
    );
  }

  // QR module data for https://atlassxports.co.uk (generated offline, error-correction M).
  var qrPatch =
    '<rect x="720" y="360" width="110" height="110" rx="6" fill="#f6f0e1"/>' +
    '<path d="M725 365h4v4h-4zM729 365h4v4h-4zM733 365h4v4h-4zM737 365h4v4h-4zM741 365h4v4h-4zM745 365h4v4h-4zM749 365h4v4h-4zM765 365h4v4h-4zM785 365h4v4h-4zM797 365h4v4h-4zM801 365h4v4h-4zM805 365h4v4h-4zM809 365h4v4h-4zM813 365h4v4h-4zM817 365h4v4h-4zM821 365h4v4h-4zM725 369h4v4h-4zM749 369h4v4h-4zM761 369h4v4h-4zM765 369h4v4h-4zM777 369h4v4h-4zM785 369h4v4h-4zM797 369h4v4h-4zM821 369h4v4h-4zM725 373h4v4h-4zM733 373h4v4h-4zM737 373h4v4h-4zM741 373h4v4h-4zM749 373h4v4h-4zM765 373h4v4h-4zM785 373h4v4h-4zM797 373h4v4h-4zM805 373h4v4h-4zM809 373h4v4h-4zM813 373h4v4h-4zM821 373h4v4h-4zM725 377h4v4h-4zM733 377h4v4h-4zM737 377h4v4h-4zM741 377h4v4h-4zM749 377h4v4h-4zM765 377h4v4h-4zM773 377h4v4h-4zM781 377h4v4h-4zM797 377h4v4h-4zM805 377h4v4h-4zM809 377h4v4h-4zM813 377h4v4h-4zM821 377h4v4h-4zM725 381h4v4h-4zM733 381h4v4h-4zM737 381h4v4h-4zM741 381h4v4h-4zM749 381h4v4h-4zM761 381h4v4h-4zM765 381h4v4h-4zM769 381h4v4h-4zM773 381h4v4h-4zM777 381h4v4h-4zM785 381h4v4h-4zM789 381h4v4h-4zM797 381h4v4h-4zM805 381h4v4h-4zM809 381h4v4h-4zM813 381h4v4h-4zM821 381h4v4h-4zM725 385h4v4h-4zM749 385h4v4h-4zM757 385h4v4h-4zM761 385h4v4h-4zM769 385h4v4h-4zM773 385h4v4h-4zM777 385h4v4h-4zM785 385h4v4h-4zM797 385h4v4h-4zM821 385h4v4h-4zM725 389h4v4h-4zM729 389h4v4h-4zM733 389h4v4h-4zM737 389h4v4h-4zM741 389h4v4h-4zM745 389h4v4h-4zM749 389h4v4h-4zM757 389h4v4h-4zM765 389h4v4h-4zM773 389h4v4h-4zM781 389h4v4h-4zM789 389h4v4h-4zM797 389h4v4h-4zM801 389h4v4h-4zM805 389h4v4h-4zM809 389h4v4h-4zM813 389h4v4h-4zM817 389h4v4h-4zM821 389h4v4h-4zM761 393h4v4h-4zM769 393h4v4h-4zM785 393h4v4h-4zM789 393h4v4h-4zM725 397h4v4h-4zM737 397h4v4h-4zM745 397h4v4h-4zM749 397h4v4h-4zM757 397h4v4h-4zM769 397h4v4h-4zM773 397h4v4h-4zM777 397h4v4h-4zM781 397h4v4h-4zM793 397h4v4h-4zM801 397h4v4h-4zM733 401h4v4h-4zM737 401h4v4h-4zM741 401h4v4h-4zM753 401h4v4h-4zM757 401h4v4h-4zM761 401h4v4h-4zM765 401h4v4h-4zM773 401h4v4h-4zM777 401h4v4h-4zM781 401h4v4h-4zM789 401h4v4h-4zM797 401h4v4h-4zM821 401h4v4h-4zM725 405h4v4h-4zM729 405h4v4h-4zM733 405h4v4h-4zM737 405h4v4h-4zM749 405h4v4h-4zM757 405h4v4h-4zM765 405h4v4h-4zM773 405h4v4h-4zM781 405h4v4h-4zM793 405h4v4h-4zM797 405h4v4h-4zM805 405h4v4h-4zM817 405h4v4h-4zM821 405h4v4h-4zM729 409h4v4h-4zM741 409h4v4h-4zM745 409h4v4h-4zM765 409h4v4h-4zM769 409h4v4h-4zM777 409h4v4h-4zM785 409h4v4h-4zM801 409h4v4h-4zM805 409h4v4h-4zM725 413h4v4h-4zM729 413h4v4h-4zM737 413h4v4h-4zM745 413h4v4h-4zM749 413h4v4h-4zM753 413h4v4h-4zM757 413h4v4h-4zM765 413h4v4h-4zM773 413h4v4h-4zM777 413h4v4h-4zM781 413h4v4h-4zM785 413h4v4h-4zM793 413h4v4h-4zM797 413h4v4h-4zM809 413h4v4h-4zM817 413h4v4h-4zM821 413h4v4h-4zM737 417h4v4h-4zM741 417h4v4h-4zM745 417h4v4h-4zM753 417h4v4h-4zM757 417h4v4h-4zM761 417h4v4h-4zM765 417h4v4h-4zM769 417h4v4h-4zM777 417h4v4h-4zM793 417h4v4h-4zM797 417h4v4h-4zM801 417h4v4h-4zM809 417h4v4h-4zM813 417h4v4h-4zM821 417h4v4h-4zM725 421h4v4h-4zM733 421h4v4h-4zM737 421h4v4h-4zM741 421h4v4h-4zM745 421h4v4h-4zM749 421h4v4h-4zM753 421h4v4h-4zM761 421h4v4h-4zM769 421h4v4h-4zM777 421h4v4h-4zM781 421h4v4h-4zM801 421h4v4h-4zM805 421h4v4h-4zM813 421h4v4h-4zM821 421h4v4h-4zM729 425h4v4h-4zM733 425h4v4h-4zM745 425h4v4h-4zM753 425h4v4h-4zM777 425h4v4h-4zM793 425h4v4h-4zM805 425h4v4h-4zM817 425h4v4h-4zM725 429h4v4h-4zM729 429h4v4h-4zM737 429h4v4h-4zM741 429h4v4h-4zM749 429h4v4h-4zM761 429h4v4h-4zM769 429h4v4h-4zM773 429h4v4h-4zM789 429h4v4h-4zM793 429h4v4h-4zM797 429h4v4h-4zM801 429h4v4h-4zM805 429h4v4h-4zM809 429h4v4h-4zM813 429h4v4h-4zM757 433h4v4h-4zM765 433h4v4h-4zM769 433h4v4h-4zM773 433h4v4h-4zM777 433h4v4h-4zM781 433h4v4h-4zM789 433h4v4h-4zM805 433h4v4h-4zM809 433h4v4h-4zM821 433h4v4h-4zM725 437h4v4h-4zM729 437h4v4h-4zM733 437h4v4h-4zM737 437h4v4h-4zM741 437h4v4h-4zM745 437h4v4h-4zM749 437h4v4h-4zM765 437h4v4h-4zM777 437h4v4h-4zM781 437h4v4h-4zM785 437h4v4h-4zM789 437h4v4h-4zM797 437h4v4h-4zM805 437h4v4h-4zM809 437h4v4h-4zM817 437h4v4h-4zM821 437h4v4h-4zM725 441h4v4h-4zM749 441h4v4h-4zM757 441h4v4h-4zM761 441h4v4h-4zM769 441h4v4h-4zM773 441h4v4h-4zM781 441h4v4h-4zM789 441h4v4h-4zM805 441h4v4h-4zM809 441h4v4h-4zM813 441h4v4h-4zM817 441h4v4h-4zM821 441h4v4h-4zM725 445h4v4h-4zM733 445h4v4h-4zM737 445h4v4h-4zM741 445h4v4h-4zM749 445h4v4h-4zM761 445h4v4h-4zM765 445h4v4h-4zM769 445h4v4h-4zM777 445h4v4h-4zM781 445h4v4h-4zM789 445h4v4h-4zM793 445h4v4h-4zM797 445h4v4h-4zM801 445h4v4h-4zM805 445h4v4h-4zM809 445h4v4h-4zM817 445h4v4h-4zM725 449h4v4h-4zM733 449h4v4h-4zM737 449h4v4h-4zM741 449h4v4h-4zM749 449h4v4h-4zM757 449h4v4h-4zM761 449h4v4h-4zM773 449h4v4h-4zM789 449h4v4h-4zM801 449h4v4h-4zM805 449h4v4h-4zM809 449h4v4h-4zM813 449h4v4h-4zM725 453h4v4h-4zM733 453h4v4h-4zM737 453h4v4h-4zM741 453h4v4h-4zM749 453h4v4h-4zM761 453h4v4h-4zM765 453h4v4h-4zM773 453h4v4h-4zM801 453h4v4h-4zM805 453h4v4h-4zM813 453h4v4h-4zM821 453h4v4h-4zM725 457h4v4h-4zM749 457h4v4h-4zM761 457h4v4h-4zM769 457h4v4h-4zM773 457h4v4h-4zM777 457h4v4h-4zM789 457h4v4h-4zM809 457h4v4h-4zM725 461h4v4h-4zM729 461h4v4h-4zM733 461h4v4h-4zM737 461h4v4h-4zM741 461h4v4h-4zM745 461h4v4h-4zM749 461h4v4h-4zM757 461h4v4h-4zM761 461h4v4h-4zM769 461h4v4h-4zM773 461h4v4h-4zM777 461h4v4h-4zM781 461h4v4h-4zM785 461h4v4h-4zM789 461h4v4h-4zM793 461h4v4h-4zM797 461h4v4h-4zM801 461h4v4h-4zM817 461h4v4h-4zM821 461h4v4h-4z" fill="#14100d"/>';

  function businessCardBackSVG() {
    return (
      '<svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ATLASSXPORT business card, back">' +
        '<rect width="900" height="500" fill="#14100d"/>' +
        // logo-colour edge
        '<rect x="0" y="0" width="12" height="167" fill="#c81e3e"/>' +
        '<rect x="0" y="167" width="12" height="166" fill="#1f7a48"/>' +
        '<rect x="0" y="333" width="12" height="167" fill="#e8720c"/>' +
        '<image href="assets/logo.png" x="726" y="60" width="90" height="70" preserveAspectRatio="xMidYMid meet"/>' +
        '<text x="80" y="150" font-family="Arial, sans-serif" font-weight="800" font-size="46" letter-spacing="1" fill="#f6f0e1">Nizar Sridi</text>' +
        '<text x="80" y="192" font-family="Arial, sans-serif" font-weight="700" font-size="17" letter-spacing="4" fill="#e8720c">MANAGING DIRECTOR</text>' +
        '<rect x="82" y="224" width="56" height="4" fill="#c81e3e"/>' +
        '<text x="80" y="290" font-family="Arial, sans-serif" font-size="20" fill="#f6f0e1">atlassxports@gmail.com</text>' +
        '<text x="80" y="324" font-family="Arial, sans-serif" font-size="20" fill="#f6f0e1">+44 7544 692201</text>' +
        '<text x="80" y="376" font-family="Arial, sans-serif" font-weight="700" font-size="14" letter-spacing="4" fill="#f6f0e1" opacity=".6">UK  ·  MOROCCO</text>' +
        '<text x="80" y="454" font-family="Arial, sans-serif" font-size="11" letter-spacing="1" fill="#f6f0e1" opacity=".4">ATLASSXPORT AND IMPORT LIMITED</text>' +
        qrPatch +
        '<text x="775" y="486" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#f6f0e1" opacity=".55">atlassxports.co.uk</text>' +
      "</svg>"
    );
  }

  function downloadSVG(markup, filename) {
    var blob = new Blob([markup], { type: "image/svg+xml" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  document.querySelectorAll("[data-card-front]").forEach(function (el) { el.innerHTML = businessCardFrontSVG(); });
  document.querySelectorAll("[data-card-back]").forEach(function (el) { el.innerHTML = businessCardBackSVG(); });

  var downloadFront = document.querySelector("[data-download-front]");
  if (downloadFront) {
    downloadFront.addEventListener("click", function () {
      downloadSVG(businessCardFrontSVG(), "atlasxport-business-card-front.svg");
    });
  }
  var downloadBack = document.querySelector("[data-download-back]");
  if (downloadBack) {
    downloadBack.addEventListener("click", function () {
      downloadSVG(businessCardBackSVG(), "atlasxport-business-card-back.svg");
    });
  }
})();
