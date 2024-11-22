import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
    return (
        <>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-57XNJV4" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-57XNJV4');
        `}
            </Script> 
        </>
    );
}