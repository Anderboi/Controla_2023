const NotFound = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-7xl lg:text-9xl text-primary-600 dark:text-primary-500 mb-4 font-extrabold tracking-tight">
            404
          </h1>
          <p className="dark:text-white mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 py-2.5 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 text-center text-sm font-medium focus:outline-none focus:ring-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
