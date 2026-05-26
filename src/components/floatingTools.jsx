import { useEffect, useState } from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa6';

// Flytande verktygen som visar sig direkt när man scrollar neråt
export default function FloatingTools() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    // Lyssnar på scroll händelser
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Tar bort scroll lyssnaren när man går till en annan sida, stänger fliken eller laddar om sidan så att den inte körs i bakgrunden
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollar användaren till toppen av sidan
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Rendera inget om användaren är längst upp på toppen
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      <div className="relative group">
        <button
          className="bg-white border-white dark:bg-zinc-900 dark:text-white dark:border-zinc-700 border w-12 h-12 flex items-center justify-center hover:bg-gray-100"
          aria-label="Open app deal"
        >
          <span className="material-symbols-outlined">phone_iphone</span>
        </button>

        <div className="absolute right-14 bottom-0 w-72 bg-white dark:bg-zinc-900 dark:text-white dark:border-zinc-700 border p-5 opacity-0 invisible translate-x-3 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300">
          <div className="bg-zinc-900 text-white text-center py-2 -mx-5 -mt-5 mb-5">
            <h2 className="text-xl font-bold">Get the app</h2>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Scan the QR code and get another deal.
          </p>

          <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 border flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 rounded-xl">
            QR CODE
          </div>

          <div className="flex justify-center gap-6 text-3xl mb-4">
            <button title="iPhone">
              <FaApple />
            </button>

            <button title="Android">
              <FaAndroid />
            </button>
          </div>

          <div className="bg-black text-white rounded-xl p-3 text-center">
            Use code <span className="font-bold">APP20</span> for 20% off
          </div>
        </div>
      </div>
      {/* Knappen för att scrolla tillbaka till toppen */}
      <button
        onClick={scrollToTop}
        className="bg-white text-black w-12 h-12 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 border border-white flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </button>
    </div>
  );
}
