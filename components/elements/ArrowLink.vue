<template>
    <div ref="arrowLinkContext">
        <NuxtLink :href="href" class="cursor-pointer"
            ><div class="relative arrow-link inline-block">
                <p
                    class="font-header uppercase arrow-text inline-block whitespace-nowrap"
                >
                    {{ text }}
                </p>
                <div class="inline-block absolute right-0 arrow opacity-0">
                    <IconsArrowRight color="#1d1e18" />
                </div></div
        ></NuxtLink>
    </div>
</template>

<script setup>
const { href, text } = defineProps(["href", "text"]);
import gsap from "gsap";
import { ref, onMounted, onUnmounted } from "vue";
const arrowLinkContext = ref();
let ctx;
onMounted(() => {
    ctx = gsap.context((self) => {
        const arrowLinks = gsap.utils.toArray(".arrow-link");
        arrowLinks.forEach((arrowLink) => {
            const animation = gsap
                .timeline({ paused: true })
                .to(".arrow-text", { x: -20, duration: 0.25 })
                .to(".arrow", { x: 7, opacity: 100, duration: 0.1 }, "-=.1")
                .to(".arrow", { rotation: 720, duration: 0.35 }, "+=.2");
            arrowLink.addEventListener("mouseenter", () => {
                animation.play();
            });
            arrowLink.addEventListener("mouseleave", () => {
                animation.reverse();
            });
        });
    }, arrowLinkContext.value);
});
onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped></style>
