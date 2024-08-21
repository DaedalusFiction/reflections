<template>
    <!-- TODO: Make this expanded version and add animation(s) -->
    <div
        class="col-span-12 cursor-pointer h-full md:col-span-6 lg:col-span-4 border hover:bg-backgroundAccent transition overflow-hidden border-[#D0CCA7] rounded-xl"
    >
        <div @click="handleSelectProject" class="h-full flex flex-col p-2">
            <div class="">
                <img
                    class="object-cover h-52 w-full filter grayscale rounded-lg"
                    :src="project.headerImage.src"
                    alt=""
                />
            </div>
            <div class="mt-2">
                <h3 class="text-3xl uppercase font-semibold">
                    {{ project.name }}
                </h3>
                <p class="line-clamp-2 overflow-hidden">
                    {{ project.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project, projectIndex } = defineProps(["project", "projectIndex"]);
const emit = defineEmits(["selectProject"]);
const handleSelectProject = () => {
    emit("selectProject", projectIndex);
};
</script>

<style scoped>
* {
    @apply transition;
}
</style>
