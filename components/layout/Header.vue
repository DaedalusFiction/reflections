<template>
    <header class="fixed top-0 z-20 w-full">
        <div class="p-4 flex justify-between">
            <nav class="flex gap-4">
                <NuxtLink class="hover:text-primary transition" to="#about"
                    ><p>Who we are</p></NuxtLink
                >
                <NuxtLink class="hover:text-primary transition" to="#services"
                    ><p>What we do</p></NuxtLink
                >
                <NuxtLink class="hover:text-primary transition" to="#structure"
                    ><p>How we heal</p></NuxtLink
                >
                <NuxtLink class="hover:text-primary transition" to="#contact"
                    ><p>Contact</p></NuxtLink
                >
            </nav>
            <NuxtLink
                to="/"
                class="link flex gap-4 items-center translate-y-1.5"
            >
                <h1
                    id="logo"
                    class="logo whitespace-nowrap font-light font-header"
                >
                    <span class="span1">Charlottesville</span
                    ><span class="span2 text-[var(--color-primary)]"
                        >Reflections</span
                    >
                </h1></NuxtLink
            >
            <!-- <button
                class="text-2xl font-extrabold animation-underline"
                @click="expand"
            >
                {{ expanded ? "CLOSE" : "MENU" }}
            </button> -->
        </div>
    </header>

    <Transition>
        <nav
            v-if="expanded"
            class="fixed top-0 bg-transparent transition-colors duration-300 h-screen w-screen flex items-center p-4 z-10"
            :class="expanded && 'expanded'"
        >
            <ul class="container mx-auto p-4">
                <li class="my-4" v-for="item in menuItems" :key="item.href">
                    <NuxtLink
                        class="font-header tracking-tighter text-3xl md:text-8xl hover:uppercase font-extrabold"
                        :to="item.href"
                        @click="expand"
                        >{{ item.text }}</NuxtLink
                    >
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap/dist/gsap";

const main = ref();
let ctx;
onMounted(() => {
    ctx = gsap.context((self) => {
        const logo = document.querySelector("#logo");
        const logoAnimation = gsap
            .timeline({ paused: true })
            .fromTo(".logo .span1", { width: "1rem" }, { width: "10rem" })
            .fromTo(".logo .span2", { width: "1rem" }, { width: "8rem" }, "<");
        logo.addEventListener("mouseenter", () => {
            logoAnimation.play();
        });
        logo.addEventListener("mouseleave", () => {
            logoAnimation.reverse();
        });
    }, main.value);
});
onUnmounted(() => {
    ctx.revert();
});
const expanded = ref(false);
const expand = () => {
    expanded.value = !expanded.value;
};

const menuItems = [
    { text: "work", href: "/work" },
    { text: "about", href: "/about" },
    { text: "contact", href: "/contact" },
];
</script>

<style scoped>
span {
    display: inline-block;
    width: 1rem;
    overflow: hidden;
}
.expanded {
    @apply bg-[var(--color-background)];
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
