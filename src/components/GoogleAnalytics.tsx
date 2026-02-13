import { useEffect } from "react";

const GA_ID = "G-0V67MNBCT3";

export function GoogleAnalytics() {
  useEffect(() => {
    // If gtag already exists, just configure again
    if ((window as any).gtag) {
      (window as any).gtag("config", GA_ID);
      return;
    }

    // Create dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    (window as any).gtag = gtag;
    gtag("js", new Date());

    // Inject script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    script.onload = () => {
      // IMPORTANT: config AFTER script is loaded
      gtag("config", GA_ID, {
        send_page_view: true,
      });
    };

    document.head.appendChild(script);
  }, []);

  return null;
}
