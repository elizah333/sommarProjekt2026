import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaPinterest,
  FaApple,
  FaAndroid,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcApplePay,
} from 'react-icons/fa6';

// Footer med navigeringslänkar, sociala medier, nyhetsbrev form och betalningsmetoder
export default function Footer() {
  // Hämtar aktuella året så att copyright är alltid uppdaterat
  const year = new Date().getFullYear();

  // Återanvändbar css sträng för alla footer länkar för att undvika upprepning
  const footerLink =
    'cursor-pointer text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white';

  return (
    <footer className="mt-16 bg-zinc-100 dark:bg-zinc-950 dark:text-white border-t dark:border-zinc-800">
      <div className="w-full px-8 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl mx-auto">
          {/* Vänster kolumn med 3 olika listor */}
          <section>
            <h2 className="font-bold mb-4 text-black dark:text-white">
              PHAKE INFO
            </h2>

            <ul className="space-y-2">
              <li className={footerLink}>About PHAKE</li>
              <li className={footerLink}>Affiliate</li>
              <li className={footerLink}>Fashion Blogger</li>
              <li className={footerLink}>Careers</li>
              <li className={footerLink}>Digital Services Act</li>
              <li className={footerLink}>Submit a Complaint</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold mb-4 text-black dark:text-white">
              HELP & SUPPORT
            </h2>

            <ul className="space-y-2">
              <li className={footerLink}>Shipping Info</li>
              <li className={footerLink}>Return</li>
              <li className={footerLink}>Refund</li>
              <li className={footerLink}>How To Order</li>
              <li className={footerLink}>How To Track</li>
              <li className={footerLink}>Size Guide</li>
              <li className={footerLink}>Ranking Policy</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold mb-4 text-black dark:text-white">
              CUSTOMER CARE
            </h2>

            <ul className="space-y-2">
              <li className={footerLink}>Contact us</li>
              <li className={footerLink}>Payment & Taxes</li>
              <li className={footerLink}>Bonus Point</li>
              <li className={footerLink}>Share & Earn</li>
              <li className={footerLink}>FAQ</li>
            </ul>
          </section>
        </div>
        {/* Höger kolumn, sociala medier, nyhetsbrev och betalningsmetoder */}
        <div>
          <div className="flex flex-col xl:flex-row gap-12 mb-8">
            <section>
              <h2 className="font-bold mb-4 text-black dark:text-white">
                FIND US ON
              </h2>

              <div className="flex flex-wrap gap-5 text-2xl">
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaXTwitter />
                </button>
                <button>
                  <FaYoutube />
                </button>
                <button>
                  <FaPinterest />
                </button>
                <button>
                  <FaTiktok />
                </button>
              </div>
            </section>

            <section>
              <h2 className="font-bold mb-4 text-black dark:text-white">APP</h2>

              <div className="flex gap-5 text-3xl">
                <button>
                  <FaApple />
                </button>

                <button>
                  <FaAndroid />
                </button>
              </div>
            </section>
          </div>

          <section>
            <h2 className="font-bold mb-3 text-black dark:text-white">
              SIGN UP FOR PHAKE NEWS
            </h2>

            <form className="space-y-4 max-w-2xl">
              <div className="flex">
                <input
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  className="flex-1 border dark:border-zinc-700 dark:bg-zinc-900 dark:text-white px-4 py-3"
                />

                <button className="bg-black text-white px-8 sm:px-12 font-bold">
                  Subscribe
                </button>
              </div>

              <div className="flex">
                <select
                  id="newsletter-country"
                  name="newsletter-country"
                  className="border bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-white px-3 py-3 w-24"
                >
                  <option>SE +46</option>
                  <option>US +1</option>
                </select>

                <input
                  id="newsletter-phone"
                  name="newsletter-phone"
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                  className="flex-1  border-y border-r dark:border-zinc-700 dark:bg-zinc-900 dark:text-white px-4 py-3"
                />

                <button className="bg-black text-white px-8 sm:px-12 font-bold">
                  Subscribe
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-5 max-w-3xl leading-relaxed">
              By clicking the SUBSCRIBE button, you agree to our{' '}
              <span className="text-blue-700 cursor-pointer hover:underline">
                Privacy & Cookie Policy
              </span>
              . If you want to unsubscribe from marketing email, please proceed
              to our{' '}
              <span className="text-blue-700 cursor-pointer hover:underline">
                privacy center
              </span>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-bold mb-4 text-black dark:text-white">
              WE ACCEPT
            </h2>

            <div className="flex flex-wrap gap-4 text-4xl text-gray-700 dark:text-gray-300">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcAmex />
              <FaCcApplePay />
            </div>
          </section>
        </div>
      </div>

      {/* Nedre rad med copyright och juridiska länkar */}
      <div className="border-t dark:border-zinc-800 px-6 py-6 text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-4">
          <p>©2026-{year} Phake All Rights Reserved</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 underline">
            <span className={footerLink}>Privacy Center</span>
            <span className={footerLink}>Privacy & Cookie Policy</span>
            <span className={footerLink}>Manage Cookies</span>
            <span className={footerLink}>Terms & Conditions</span>
            <span className={footerLink}>Company Information</span>
            <span className={footerLink}>Ad Choice</span>
            <span className={footerLink}>DMCA Protected</span>
            <span className={footerLink}>Trusted Commerce</span>
            <span className={`${footerLink} flex items-center gap-1`}>
              <span className="material-symbols-outlined text-[12px]">
                location_on
              </span>
              Sweden
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
