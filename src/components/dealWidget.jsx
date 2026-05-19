import { useState } from 'react';

export default function DealWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-2/3 -translate-y-1/2 z-50 flex items-stretch">
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="bg-black text-white px-2 py-20 text-xl font-bold"
      >
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-white text-xl mb-4 select-none pointer-events-none">
            {isOpen ? 'chevron_right' : 'chevron_left'}
          </span>

          <span className="[writing-mode:vertical-rl] rotate-180 leading-none">
            EXTRA DEALS 15% OFF
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'w-[610px]' : 'w-0'
        }`}
      >
        <div className="w-[610px] min-h-[400px] bg-red-100 dark:bg-zinc-900 dark:text-white border border-red-200 dark:border-zinc-700 p-8">
          <p className="text-center text-red-500 tracking-wide mb-6">
            Register now and enjoy
          </p>

          <div className="grid grid-cols-2 items-center mb-8">
            <div className="text-center text-red-500 border-r border-red-300">
              <h2 className="text-5xl font-bold leading-none">FREE</h2>
              <h2 className="text-5xl font-bold leading-none">SHIPPING</h2>
              <p className="font-bold mt-2">on your first order</p>
            </div>

            <div className="text-center text-red-500">
              <h2 className="text-7xl font-bold leading-none">15%</h2>
              <p className="text-3xl font-bold tracking-[0.5em] ml-4">OFF</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="flex">
              <input
                id="deal-email"
                name="deal-email"
                type="email"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                autoComplete="email"
                className="flex-1 border border-gray-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white px-5 py-3 text-center tracking-[0.25em] text-xs outline-none"
              />

              <button
                type="submit"
                className="bg-black text-white px-10 font-bold tracking-widest"
              >
                REGISTER
              </button>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-800 dark:text-gray-300">
              <input type="checkbox" className="mt-1 w-4 h-4" />
              <span>
                I agree to the{' '}
                <span className="underline cursor-pointer">
                  Terms & Conditions
                </span>{' '}
                and acknowledge that I have read the{' '}
                <span className="underline cursor-pointer">
                  Privacy & Cookie Policy
                </span>
                .
              </span>
            </label>

            <label className="flex items-start gap-3 text-sm text-gray-800 dark:text-gray-300">
              <input type="checkbox" className="mt-1 w-4 h-4" />
              <span>
                I’d like to receive exclusive offers and Phake news by email. I
                understand I can unsubscribe at any time.
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
