<template>
    <header class="flex w-full md:p-6 justify-center md:justify-between">
        <nuxt-link :to="'/'" class="logo">
            3D Print Shop
        </nuxt-link>

         <nav class="navigation">
            <nuxt-link :to="'/'" class="navigation__link">
                <span class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="navigation__icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                </span>
                <span class="hidden md:block">Home</span>
            </nuxt-link>
            <nuxt-link :to="'/products'" class="navigation__link">
                <span class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="navigation__icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="3" y1="21" x2="21" y2="21" />
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                      <line x1="5" y1="21" x2="5" y2="10.85" />
                      <line x1="19" y1="21" x2="19" y2="10.85" />
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                </span>
                <span class="hidden md:block">Products</span>
            </nuxt-link>
            <nuxt-link :to="'/account'" class="navigation__link">
                <span class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="navigation__icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </span>
                <span class="hidden md:block">Account</span>
            </nuxt-link>
            <nuxt-link :to="'/cart'" class="navigation__link">
                <span class="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="navigation__icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 10 12 4 17 10" />
                        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
                        <circle cx="12" cy="15" r="2" />
                    </svg>
                </span>
                <span class="hidden md:block">Cart</span>
            </nuxt-link>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.logo {
    @apply hidden md:flex text-xl lg:text-2xl font-black text-gray-700;
}

.navigation {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    @apply fixed flex bottom-2 left-0 right-0 mx-2 z-50 h-14 max-h-14 bg-gray-50 border-gray-100 border;
    @apply md:relative md:shadow-none md:bg-transparent md:border-none;
}

.navigation__link {
    @apply p-4 flex flex-grow justify-center text-center outline-none;
}

.navigation__icon {
    @apply w-6 text-gray-600;
}

.navigation .nuxt-link-exact-active, .navigation .nuxt-link-exact-active svg  {
    @apply text-green-400
}
</style>
