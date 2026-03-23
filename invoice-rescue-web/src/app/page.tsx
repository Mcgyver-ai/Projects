export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-zinc-950 font-sans p-4 sm:p-8 lg:p-12 text-zinc-900 dark:text-zinc-50">
      
      {/* Top Navigation / Brand */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-8 px-2 sm:px-0">
        <span className="font-bold text-xl tracking-tight">Invoice Rescue</span>
        <button className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
          Log in
        </button>
      </div>

      <main className="flex flex-col w-full max-w-5xl gap-6">
        
        {/* 1. Hero Section (Card) */}
        <section className="flex flex-col items-center text-center gap-6 bg-white dark:bg-zinc-900 p-10 sm:p-20 rounded-3xl shadow-sm border border-zinc-200/50 dark:border-zinc-800">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            Recover unpaid invoices <span className="text-blue-600 dark:text-blue-400">stress-free.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl text-balance">
            Stop chasing down clients. Let Invoice Rescue handle the follow-ups professionally, 
            so you can focus on running your business and getting paid faster.
          </p>
          <button className="mt-4 rounded-full bg-zinc-900 dark:bg-zinc-50 px-8 py-4 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">
            Get Started for Free
          </button>
        </section>

        {/* 2. Benefits Section (Grid of Cards) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-800">
            <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 text-xl">
              ⏱️
            </div>
            <h3 className="text-lg font-bold mb-2">Save Countless Hours</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Automate polite but persistent payment reminders. Never waste time drafting follow-up emails again.
            </p>
          </div>

          <div className="flex flex-col p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-800">
            <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 text-xl">
              🤝
            </div>
            <h3 className="text-lg font-bold mb-2">Preserve Relationships</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our proven templates ensure you get paid without alienating the clients you&apos;ve worked hard to win.
            </p>
          </div>

          <div className="flex flex-col p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200/50 dark:border-zinc-800">
            <div className="h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 text-xl">
              📈
            </div>
            <h3 className="text-lg font-bold mb-2">Increase Cash Flow</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Businesses using structured follow-ups recover overdue payments faster. Get the money you&apos;ve earned.
            </p>
          </div>
        </section>

        {/* 3. How It Works Section (Card) */}
        <section className="flex flex-col items-center bg-white dark:bg-zinc-900 p-10 sm:p-16 rounded-3xl shadow-sm border border-zinc-200/50 dark:border-zinc-800 gap-12 text-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How it works</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-balance">
              Get started in minutes. We handle the awkward conversations so you don&apos;t have to.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl relative">
            <div className="flex flex-col items-center relative z-10">
              <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 flex items-center justify-center font-bold text-zinc-900 dark:text-zinc-50 mb-4 shadow-sm">
                1
              </div>
              <h4 className="font-semibold mb-2">Add your invoice</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Securely enter the details of the overdue payment.</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 flex items-center justify-center font-bold text-zinc-900 dark:text-zinc-50 mb-4 shadow-sm">
                2
              </div>
              <h4 className="font-semibold mb-2">We follow up</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">We send a sequence of professional reminders on your behalf.</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 flex items-center justify-center font-bold text-zinc-900 dark:text-zinc-50 mb-4 shadow-sm">
                3
              </div>
              <h4 className="font-semibold mb-2">You get paid</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">The client pays you directly, resolving the outstanding balance.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-500 pb-8">
        <p>© {new Date().getFullYear()} Invoice Rescue. All rights reserved.</p>
      </footer>

    </div>
  );
}
