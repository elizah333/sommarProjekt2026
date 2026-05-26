import { useState } from 'react';

// Vid första besök får man dessa erbjudandepopup och cookiebanner
export default function Popups() {

  // Visar erbjudandepopupen om användaren inte redan stängt den tidigare
  const [showCookie, setShowCookie] = useState(
    localStorage.getItem('cookiesAccepted') !== 'true'
  );

// Visar cookiebannern om användaren inte redan accepterat eller avisat cookies
  const [showDeal, setShowDeal] = useState(
    localStorage.getItem('dealSeen') !== 'true'
  );

// Sparar att användaren accepterat cookies och stänger
  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookie(false);
  }

  // Sparar att användaren har nekat cookies och stänger
  function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookie(false);
  }

  // Sparar att användaren har sett och stänger erbjudandet
  function closeDeal() {
    localStorage.setItem('dealSeen', 'true');
    setShowDeal(false);
  }

  return (
    <>
      {showDeal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full">
            <button
              onClick={closeDeal}
              className="absolute -top-12 -right-2 text-white border border-white/70 rounded-full w-9 h-9 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="bg-gradient-to-b from-orange-100 via-white to-white rounded-2xl text-center border border-orange-100 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-5 text-orange-900">
                  Special Deals Just for You
                </h2>

                <div className="border border-red-200 bg-red-50 rounded-lg overflow-hidden mb-6">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 text-left">
                    New User
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="p-5 border-r border-red-200">
                      <p className="text-4xl font-bold text-red-500">
                        15<span className="text-lg">%OFF</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-2">No Min. Buy</p>
                    </div>

                    <div className="p-5 text-left">
                      <h3 className="text-lg font-bold text-red-500">
                        Sitewide Coupon
                      </h3>
                      <p className="text-sm text-gray-600">
                        Order today and save on all products.
                      </p>
                      <p className="text-xs text-gray-500 -400 mt-2">
                        Time-limited
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={closeDeal}
                  className="bg-black text-white w-full py-3 rounded-full font-semibold"
                >
                  Start shopping
                </button>
              </div>
            </div>
            <p className="text-xs text-white/80 text-center mt-4">
              Coupon confirmed after login.
            </p>
          </div>
        </div>
      )}

      {showCookie && (
        <div className="fixed bottom-5 left-0 right-0 z-[100] px-4 pb-4">
          <div className="max-w-3xl mx-auto bg-white rounded-md p-6 border">
            <p className="text-sm leading-6 text-gray-800 mb-6">
              We use cookies and similar technologies on our website to provide
              the service you request, and to aim to offer you the best website
              experience possible. You can “Reject All",“Accept All”, or set
              your cookie preference any time at your choice. By selecting
              “Accept All”, we will set all optional cookies, which help us
              analyse traffic, offer enhanced functionality, and personalize
              content and ads to complement your shopping experience with SHEIN.
              By selecting “Reject All”, you allow the use of strictly necessary
              cookies that make our website work. You may disable these by
              changing your browser settings, but this may affect how the
              website functions. To learn more about the cookies we use and to
              adjust your optional cookie settings, please select “Manage
              Cookies.” For more information about how we process the data we
              collect{' '}
              <button className="ml-1 text-blue-600 hover:underline">
                Click here to see our Privacy Policy.
              </button>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <button className="text-blue-700 font-bold hover:underline text-left sm:text-center">
                Manage cookies
              </button>

              <button
                onClick={acceptCookies}
                className="bg-black text-white py-2 font-bold"
              >
                Accept All
              </button>

              <button
                onClick={rejectCookies}
                className="bg-black text-white py-2 font-bold"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
