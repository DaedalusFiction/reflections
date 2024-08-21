<template>
    <div ref="main" class="mt-24" id="main">
        <div class="">
            <section class="hero rounded-xl border mx-auto max-w-7xl">
                <div
                    class="flex items-center justify-center lg:justify-end lg:items-end w-full min-h-[85vh]"
                >
                    <div class="hero-text w-full py-16 flex lg:justify-end">
                        <p
                            class="text-[var(--color-text)] text-center backdrop-blur-lg lg:backdrop-blur-0 lg:text-start lg:w-[35rem] py-4 px-4 lg:px-16 text-3xl"
                        >
                            As a designer and web developer, I help authors,
                            artists, and creatives cultivate their online
                            presences.
                        </p>
                    </div>
                </div>
            </section>
            <section class="my-12 mx-auto max-w-7xl">
                <h2 id="portfolio" class="text-xl mb-2">Portfolio</h2>
                <div class="grid grid-cols-12 gap-3">
                    <component
                        v-for="(project, index) in portfolio"
                        :key="project.name"
                        :is="
                            selectedProject === index
                                ? SectionsProjectPreviewExtended
                                : SectionsProjectPreview
                        "
                        :project="portfolio[index]"
                        :projectIndex="index"
                        :isSelectedProject="selectedProject === index"
                        @selectProject="
                            handleSelectProject(index, project.name)
                        "
                    />
                </div>
            </section>
            <div class="border-t border-b py-12 bg-backgroundAccent">
                <section class="mx-auto max-w-7xl">
                    <h3 id="about" class="text-xl mb-2 uppercase font-bold">
                        About
                    </h3>
                    <div class="grid grid-cols-12 gap-12">
                        <div class="col-span-8 h-full flex items-center">
                            <div class="">
                                <p
                                    class="text-[var(--color-text)] text-3xl md:indent-52"
                                >
                                    My name is David Sorensen, and I believe
                                    that the number of underappreciated artists
                                    and creatives in this world is too damn
                                    high. My mission is to fix that.
                                </p>
                                <br />
                                <p>
                                    As a designer and web developer, I do that
                                    by creating virtual spaces that highlight
                                    the incredible work that people out there
                                    are doing. Whether you're a musician, actor,
                                    culinarian, poet, sculptor, cinematographer,
                                    novelist, painter, stylist, mechanic,
                                    playwright, weaver, potter, blacksmith,
                                    chef, cosmetologist, arborist, photographer,
                                    videographer, calligrapher, woodworker,
                                    luthier, or cobbler...
                                </p>
                                <br />
                                <div class="flex gap-1 items-center">
                                    <p>...Let's show the</p>
                                    <IconsWorld class="w-6" />
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-span-4 flex justify-center items-center"
                        >
                            <img
                                class="object-cover w-full filter max-h-96 grayscale hover:grayscale-0 transition rounded-lg"
                                src="~/assets/images/profile-river.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div>
            <section class="max-w-7xl mx-auto py-12">
                <h4 id="about" class="text-xl mb-2 uppercase font-bold">
                    Services
                </h4>
            </section>
            <SectionsSubscribe />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { portfolio } from "../assets/data";
import SectionsProjectPreview from "../components/sections/ProjectPreview.vue";
import SectionsProjectPreviewExtended from "../components/sections/ProjectPreviewExtended.vue";

const selectedProject = ref(0);

const handleSelectProject = (index, name) => {
    selectedProject.value = index;
    // navigateTo("#" + name);
    nextTick(() => {
        const element = document.getElementById(name);
        if (element) {
            const yOffset = -100; // 100 pixels from the top
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
};
</script>

<style scoped>
section {
    @apply px-4;
}

.hero {
    background: url("~/assets/images/background/rose2.webp");
    background-position: center;
    background-size: cover;
}

.titles {
    @apply h-8 lg:h-16;
    overflow: hidden;
}
</style>
