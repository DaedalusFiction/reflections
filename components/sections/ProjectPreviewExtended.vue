<template>
    <div
        :id="project.name"
        class="col-span-12 lg:min-h-[25rem] fade-in-and-right md:col-span-6 border lg:col-span-12 lg:row-span-2 bg-backgroundAccent transition overflow-hidden border-[#D0CCA7] rounded-xl"
    >
        <div class="lg:grid grid-cols-12 lg:h-full gap-2 p-2">
            <div class="col-span-4 h-full">
                <img
                    class="object-cover w-full h-full rounded-lg"
                    :src="project.headerImage.src"
                    alt=""
                />
            </div>
            <div class="p-2 col-span-8 flex flex-col justify-between gap-4">
                <div class="flex justify-between gap-4">
                    <div>
                        <h3 class="text-3xl uppercase font-semibold">
                            {{ project.name }}
                        </h3>
                        <p class="text-sm font-sans">{{ project.industry }}</p>
                    </div>
                    <p>{{ project.year }}</p>
                </div>
                <div class="flex items-end justify-between gap-4">
                    <p>{{ project.description }}</p>
                    <ElementsArrowLink :href="project.href" text="Visit Site" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project, isSelectedProject, projectIndex } = defineProps([
    "project",
    "projectIndex",
    "isSelectedProject",
]);
</script>

<style scoped>
* {
    @apply transition;
}
.scroll-target {
    scroll-margin-top: 20rem;
}
</style>
