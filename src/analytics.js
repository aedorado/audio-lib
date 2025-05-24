// src/analytics.js
export const initGA = () => {
  if (!window.gtag) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0Z1XMKRLZG";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-0Z1XMKRLZG");
  }
};

export const logPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-0Z1XMKRLZG", {
      page_path: url,
    });
  }
};
