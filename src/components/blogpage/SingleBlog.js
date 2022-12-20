const SingleBlog = ({title, liveLink, date, description}) => {
  return (
    <>
      <article class="md:grid md:grid-cols-4 md:items-baseline">
        <div class="md:col-span-3 group relative flex flex-col items-start">
          <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <a
              href={liveLink}
              target="_blank"
            >
              <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span class="relative z-10">{title}</span>
            </a>
          </h2>
          <div class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
            <span
              class="absolute inset-y-0 left-0 flex items-center"
            >
              <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
            </span>
            {date}
          </div>
          <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div
            aria-hidden="true"
            class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              class="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500"
        >
          {date}
        </div>
      </article>
    </>
  );
};

export default SingleBlog;
