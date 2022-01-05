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
</style>
