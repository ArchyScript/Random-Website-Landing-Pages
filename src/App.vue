<template>
  <div>
    <router-view />
  </div>
</template>

<style>
/*
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html,
body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}
*/

.btn {
  @apply rounded-md shadow-md px-6 py-3 transition duration-300;
}
.btn-black-bg {
  @apply bg-black text-white hover:bg-gray-200 hover:text-mysqr-dark-dark;
}
.btn-white-bg {
  @apply bg-white text-black hover:bg-mysqr-dark-dark hover:text-gray-200;
}

/* Squareroof */
.mysqr-btn {
  @apply rounded-full px-6 py-3 transition duration-100;
}
.mysqr-btn-dark-bg {
  @apply bg-mysqr-dark-dark text-white;
}
.mysqr-btn-no-bg {
  @apply text-mysqr-dark-dark bg-transparent;
}
.mysqr-btn-hover-dark-bg {
  @apply hover:bg-mysqr-dark-dark hover:text-white;
}
.mysqr-btn-hover-main-bg {
  @apply hover:bg-mysqr-main hover:text-white;
}
.mysqr-btn-hover-no-bg {
  @apply hover:bg-transparent;
}

/* Stranerd */
.stranerd-btn {
  @apply rounded-lg py-2 px-6 transition duration-100;
}
.stranerd-btn-main-bg {
  @apply bg-stranerd-main text-white;
}
.stranerd-btn-no-bg {
  @apply bg-transparent text-stranerd-main border border-white;
}
</style>
