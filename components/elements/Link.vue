<template>
    <div ref="main">
        <div id="animated-link" class="link">
            <NuxtLink :to="href"><slot /></NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { text, href } = defineProps(["text", "href"]);
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap/dist/gsap";
const main = ref();
let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {
        const title = document.querySelector("#animated-link");
        const animation = gsap
            .timeline({ paused: true })
            .to(".link", {
                ease: "linear",
                duration: 0.15,
                padding: "0.25rem 2rem",
                backgroundColor: "var(--color-primary)",
                border: "1px solid var(--color-primary)",
            })
            .to(
                ".link *",
                { color: "white", ease: "linear", duration: 0.15 },
                "<"
            );
        title.addEventListener("mouseenter", () => {
            animation.play();
        });
        title.addEventListener("mouseleave", () => {
            animation.reverse();
        });
        gsap.to(".link", { x: 0 });
    }, main.value);
});
onUnmounted(() => {
    ctx.revert();
});
</script>

<style scoped>
.link {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
}
</style>
