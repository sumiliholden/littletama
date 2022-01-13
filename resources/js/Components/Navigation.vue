<template>
    <nav class="sticky flex items-center justify-between flex-wrap bg-pink-500 p-6">
        <div class="flex items-center">
            <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
        </div>
        <!-- left header section -->
        <div class="items-center hidden space-x-8 lg:flex">
            <a class="rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="#">Home</a>
            <a class="rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="#">Products</a>
             <a class="rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
            <a class="rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="#">About Us</a>
            <a class="rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="#">Contact Us</a>
        </div>
        <!-- right header section -->
        <div class="flex items-center space-x-2">
            <a href="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            </a>
            <!-- <a href="#" class="p-2 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a> -->
        </div>
    </nav>
</template>
