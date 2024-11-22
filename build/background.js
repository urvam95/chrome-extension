chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: injectGoogleMapsScript,
  });
});

function injectGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDAFTIzTFVb5A0L2cfIuIC7RprXbtYaFiE&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  window.initMap = () => {
    console.log("Google Maps API loaded");
  };
}
