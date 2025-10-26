export default function LandingPage() {
  return (
    <main className="h-screen flex justify-center items-center bg-blue-200">
      <article className="p-5 w-4/5 h-4/5 md:shadow-md md:border md:border-gray-500 md:shadow-gray-500 md:rounded-4xl flex flex-col">
        <header className="flex justify-center">
          <h1 className="text-center font-semibold text-4xl">Welcome</h1>
        </header>

        <section className="flex-1 flex justify-center items-center">
          <p className="text-center max-w-lg text-lg">
            <span className="font-bold">IT Connects:</span> A collaborative
            platform for tech individuals to exchange ideas and build projects
            together.
          </p>
        </section>

        <footer className="flex justify-center mt-6">
          <a
            href="/"
            className="bg-blue-400 text-white text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Let&apos;s Start
          </a>
        </footer>
      </article>
    </main>
  );
}
