<template>
  <main class="w-screen flex place-content-center">
    <div
      class="bg-slate-300 border-black border dark:border-none dark:bg-gray-800 rounded-lg p-5 w-11/12 sm:w-8/12 md:w-7/12 lg:w-1/2"
    >
      <h1 class="font-bold text-center mb-4 text-xl text-black dark:text-white">
        Contact me
      </h1>
      <form class="flex flex-col">
        <!-- E-MAIL -->
        <section class="flex flex-col my-2">
          <label
            for="email"
            class="text-black dark:text-gray-300 pb-2 font-semibold"
            >E-Mail</label
          >
          <div
            class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2.5 items-center text-black dark:text-gray-50 rounded"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
            </span>

            <input
              type="email"
              name="email"
              class="bg-slate-400 dark:bg-gray-700 outline-none w-full px-2"
              required
            />
          </div>
        </section>
        <!-- SUBJECT -->
        <section class="flex flex-col my-2">
          <label
            for="subject"
            class="text-black dark:text-gray-300 pb-2 font-semibold"
            >Subject</label
          >
          <div
            class="flex bg-slate-400 dark:bg-gray-700 outline-none p-2.5 items-center text-black dark:text-gray-50 rounded"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              name="subject"
              class="bg-slate-400 dark:bg-gray-700 outline-none px-2 rounded w-full"
              required
            />
          </div>
        </section>
        <!-- TEXTAREA -->
        <section class="w-full flex flex-col my-2">
          <label
            class="leading-none text-black dark:text-gray-300 font-semibold"
            >Message</label
          >
          <textarea
            type="text"
            name="message"
            class="h-32 resize-none text-black dark:text-gray-50 p-3 outline-none mt-4 bg-slate-400 dark:bg-gray-700 rounded leading-5"
            required
          ></textarea>
        </section>
        <section class="flex items-center justify-center w-full">
          <button
            class="mt-2 font-semibold leading-none text-white py-4 px-6 bg-blue-700 rounded hover:bg-blue-600 active:scale-90"
          >
            Send message
          </button>
        </section>
      </form>
    </div>
  </main>
</template>
