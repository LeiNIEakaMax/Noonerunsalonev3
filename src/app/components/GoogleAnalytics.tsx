import { useEffect } from "react";

const GA_ID = "G-0V67MNBCT3";

export function GoogleAnalytics() {
  useEffect(() => {
    // 1. Initialize dataLayer and gtag if they don't exist
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    
    if (!w.gtag) {
      function gtag(...args: any[]) {
        w.dataLayer.push(args);
      }
      w.gtag = gtag;
      w.gtag("js", new Date());
    }

    // 2. Inject the Google Analytics script if it's not already there
    const scriptId = "google-analytics-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }

    // 3. Configure - this triggers a page_view by default
    // We call this every time the component mounts
    if (w.gtag) {
      w.gtag("config", GA_ID, {
        page_path: window.location.pathname + window.location.search,
      });
    }
  }, []);

  return null;
}
