// This function is used to get a list of all cookies that loaded on the webpage. This will ensure the OTGPPConsent cookie used for CCPA is found.
function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // Return null if not found
  return null;
}

//Function to find consent values for CCPA or GDPR consent
function nbaPrivacy() {

  //Check if WBD object exists
  const WBD = window.WBD || {};
  const consentValue = WBD.UserConsent.getGppAPIstring() || getCookie('usprivacy') || getCookie('OTGPPConsent');

  // Check if Gpp consent exists
  if (consentValue) {
    //refresh Google Ads Manager so that it can load and pick up on this consent
    googletag.pubads().refresh();
    console.log('CONSENT SUCCESS - US Privacy cookie is found');
    console.log('CCPA OTGPPConsent Cookie value: ' + consentValue);
    console.log('GDPR eupubconsent-v2 Cookie value:' + getCookie("eupubconsent-v2"));
    //If consent isn't found for OTGPPConsent cookie, then check for GDPR consent
  } else if (getCookie("eupubconsent-v2") !== null) {
    // GDPR DOES APPLY
    //refresh Google Ads Manager so that it can load and pick up on this consent
    googletag.pubads().refresh();
    console.log('CONSENT SUCCESS - eupubconsent-v2 cookie is found');
    console.log('CCPA OTGPPConsent Cookie value: ' + consentValue);
    console.log('GDPR eupubconsent-v2 Cookie value:' + getCookie("eupubconsent-v2"));
  }
  // if no CCPA or GDPR consent is found then don't refresh Google Ads Manager
  else {
    //this error would mean that the OTGPPConsent and eupubconsent-v2 cookie both don't exist
    throw 'CONSENT PENDING - OTGPPConsent cookie (CCPA) not found, eupbconsent-v2 cookie (GDPR) not found'
  }
}
// if no CCPA or GDPR consent is found then don't refresh Google Ads Manager

// Function to check if either CCPA or GDPR consent exists
function nbaPrivacyCheck(reset = false) {
  try {
    // if consent exists then record consent check as successful
    if (reset) {
      window.nbaPrivacyStatus = 'nbaPrivacyFailure';
    } else {
      nbaPrivacy();
      window.nbaPrivacyStatus = 'nbaPrivacySuccess';
    }

  } catch (w) {
    console.warn('CONSENT PENDING - OTGPPConsent cookie (CCPA) not found, eupbconsent-v2 cookie (GDPR) not found');
    // if consent does not exist then record consent check as unsuccessful
    window.nbaPrivacyStatus = 'nbaPrivacyFailure';
  }
}

//run first check to see if consent exists to reload Google Ads
console.log('NBA Privacy Consent Check #1')
nbaPrivacyCheck(true)

//If consent does not exist then try and check for consent again in 3 seconds
setTimeout(nbaPrivacyCheckTimeout, 3000);

function nbaPrivacyCheckTimeout() {
  if (nbaPrivacyStatus === 'nbaPrivacyFailure') {
    console.log('NBA Privacy Consent Check #2')
    nbaPrivacyCheck()
  }
}

//If consent does not exist then try and check for consent again in 7 seconds
setTimeout(nbaPrivacyCheckTimeout2, 7000);

function nbaPrivacyCheckTimeout2() {
  if (nbaPrivacyStatus === 'nbaPrivacyFailure') {
    console.log('NBA Privacy Consent Check #3')
    nbaPrivacyCheck()
  }
}

//If consent still does not exist then send a failure message after 10 seconds
setTimeout(nbaPrivacyCheckTimeoutFailure, 10000);

function nbaPrivacyCheckTimeoutFailure() {
  if (nbaPrivacyStatus === 'nbaPrivacyFailure') {
    console.error('CONSENT FAILURE: OTGPPConsent cookie (CCPA) not found, eupbconsent-v2 cookie (GDPR) not found')
  }
}