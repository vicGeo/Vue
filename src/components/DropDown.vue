<template>
  <div class="">
    <div class="group inline-block relative">
      <button
        class="relative inline-flex items-center mx-1 px-4 py-2 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
      >
        <span class="mr-1">Details</span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul class="absolute hidden text-green-700 pt-1 group-hover:block">
        <li class="">
          <a
            class="rounded-t bg-green-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
            >My time</a
          >
        </li>
        <li class="">
          <a
            class="bg-green-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
            >Profile</a
          >
        </li>
        <li class="">
          <a
            class="rounded-b bg-green-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
