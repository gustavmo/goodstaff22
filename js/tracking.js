var idSite = 3;
var matomoTrackingApiUrl = "//matomo.goodstaff.at/piwik.php";

var _paq = window._paq = window._paq || [];  
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);