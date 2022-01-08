<template>
  <div>
    <router-view />
  </div>
</template>

<style>
.btn {
  @apply rounded-md shadow-md px-6 py-3 transition duration-300;
}
.btn-black-bg {
  @apply bg-black text-white hover:bg-gray-200 hover:text-gray-800;
}
.btn-white-bg {
  @apply bg-white text-black hover:bg-gray-800 hover:text-gray-200;
}

/* Squareroof */
.mysqr-btn {
  @apply rounded-full px-6 py-2 transition duration-100;
}
.mysqr-btn-black-bg {
  @apply bg-gray-800 text-white;
}
.mysqr-btn-no-bg {
  @apply text-gray-800 bg-transparent;
}
.mysqr-btn-hover-black-bg {
  @apply hover:bg-gray-800 hover:text-white;
}
.mysqr-btn-hover-main-bg {
  @apply hover:bg-mysqr-main hover:text-white;
}
.mysqr-btn-hover-no-bg {
  @apply hover:bg-transparent hover:text-gray-800;
}
</style>
