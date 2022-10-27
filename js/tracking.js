const idSite = 3;
const matomoTrackingApiUrl = "//matomo.goodstaff.at/piwik.php";

const _paq = window._paq = window._paq || [];  
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);