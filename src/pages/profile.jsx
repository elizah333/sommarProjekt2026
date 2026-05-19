import { useState } from 'react';

export default function Profile() {
  const [signedIn, setSignedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSignedIn(true);
  }

  if (signedIn) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center p-6 dark:text-white">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-zinc-900 dark:border-zinc-700 border rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">👤</div>

            <h1 className="text-3xl font-bold mb-3">Welcome back!</h1>

            <p className="text-gray-600 dark:text-gray-300">
              You are now signed in.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 dark:text-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Sign in</h1>

          <p className="text-gray-600 dark:text-gray-300">
            Access your profile, favorites and orders.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-900 dark:border-zinc-700 border p-6 rounded-2xl grid gap-4"
        >
          <input
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded-lg"
            placeholder="Email"
            type="email"
            required
          />

          <input
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded-lg"
            placeholder="Password"
            type="password"
            required
          />

          <button className="bg-black text-white p-3 rounded-full">
            Sign in
          </button>

          <button
            type="button"
            className="border dark:border-zinc-700 p-3 rounded-full"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}
