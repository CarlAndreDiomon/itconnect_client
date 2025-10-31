export default function LandingPage() {
  return (
    <main className="fixed inset-0 z-50 flex-col h-screen flex justify-center items-center bg-blue-200 md:bg-white">
      <article className=" p-5 2xl:p-13 w-4/5 h-4/5 md:w-2/4 lg:w-2/5 xl:w-2/6 2xl:md:w-2/5 md:shadow-md md:border md:bg-blue-200 md:border-gray-500 md:shadow-gray-500 md:rounded-4xl flex flex-col">
        <header className="flex justify-center">
          <h1 className="text-center font-semibold text-4xl 2xl:text-6xl">
            Welcome
          </h1>
        </header>

        <section className="flex-1 flex justify-center items-center">
          <p className="text-center max-w-lg 2xl:max-w-xl text-lg 2xl:text-3xl">
            <span className="font-bold">IT Connects:</span> A collaborative
            platform for tech individuals to exchange ideas and build projects
            together.
          </p>
        </section>

        <footer className="flex justify-center mt-6">
          <a
            href="/"
            className="bg-blue-400 text-white text-lg 2xl:text-4xl 2xl:p-6 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Let&apos;s Start
          </a>
        </footer>
      </article>
    </main>
  );
}
