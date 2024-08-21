<template>
    <div :id="project.title">
        <div class="container mx-auto py-12 px-4">
            <div class="lg:grid grid-cols-12 gap-12">
                <div class="col-span-12 row-span-1 flex items-center">
                    <h4
                        class="text-xl lg:text-6xl font-extrabold uppercase mb-8 lg:mb-0"
                    >
                        {{ project.title }}
                    </h4>
                </div>
                <div class="col-span-12 lg:col-span-7 lg:row-span-4">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-4">
                            <p>Year:</p>
                            <br />
                            <p>Industry:</p>
                            <br />
                            <p>Deliverables:</p>
                        </div>
                        <div class="col-span-8 lg:col-span-4">
                            <p>{{ project.year }}</p>
                            <br />
                            <p>{{ project.industry }}</p>
                            <br />
                            <p
                                v-for="deliverable in project.deliverables"
                                :key="deliverable"
                            >
                                {{ deliverable }}
                            </p>
                        </div>
                        <div
                            class="col-span-12 lg:col-span-4 flex items-end justify-end"
                        >
                            <ElementsArrowLink
                                :href="project.href"
                                text="Visit Site"
                            />
                        </div>
                        <br />
                        <br />
                    </div>
                    <h4 class="text-2xl font-bold">
                        {{ project.description }}
                    </h4>
                </div>
                <div class="col-span-12 lg:col-span-5">
                    <img
                        class="object-cover my-8 lg:my-0"
                        :src="project.headerImage.src"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

const { project } = defineProps(["project"]);
onMounted(() => {
    document.getElementById(project.title).style.backgroundColor =
        project.backgroundColor;
});
</script>

<style scoped></style>
