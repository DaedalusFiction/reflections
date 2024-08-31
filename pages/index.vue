<template>
    <div ref="main" class="mt-24" id="main">
        <div class="">
            <section class="mx-auto max-w-7xl pb-16">
                <div
                    class="hero rounded-xl border flex items-center justify-center min-h-[85vh]"
                ></div>
            </section>

            <div id="about" class="border-t border-b py-16 bg-backgroundAccent">
                <section class="mx-auto max-w-7xl flex justify-center">
                    <div>
                        <h3 class="header">Who we are</h3>
                        <br />
                        <p class="text-[var(--color-text)] text-center">
                            Reflections is a Charlottesville therapy group
                            designed for anyone who identifies as female. We
                            discuss body image and cultural influence in a safe
                            and confidential environment.
                        </p>
                        <br />
                        <p class="text-[var(--color-text)] text-center">
                            In addition to sharing experiences, group therapy
                            helps patients combat negative self-talk while
                            learning new strategies to gain confidence.
                        </p>
                        <br />
                        <p class="text-[var(--color-text)] text-center">
                            Our next six-week session begins
                            <strong> October 1st, 2024. </strong>
                        </p>
                    </div>
                </section>
            </div>
            <section id="services" class="max-w-7xl mx-auto py-16">
                <h4 class="header">What we do</h4>
                <br />
                <div class="flex flex-col md:grid grid-cols-12 gap-8">
                    <div
                        class="col-span-12 md:col-span-5 h-full flex items-center"
                    >
                        <div>
                            <p class="text-[var(--color-text)]">
                                In a small group setting participants can work
                                through issues related to body image.
                            </p>
                            <br />
                            <p class="mb-2">
                                Body image therapy can help with:
                            </p>
                            <ul>
                                <li><p>&bull; Ruminating thoughts</p></li>
                                <li>
                                    <p>&bull; Comparing one's self to others</p>
                                </li>
                                <li><p>&bull; Food anxiety</p></li>
                                <li><p>&bull; Self-esteem</p></li>
                            </ul>
                            <br />
                            <p>
                                This form of therapy aims to improve how
                                participants perceive and feel about their
                                bodies, often addressing issues such as current
                                media culture, negative body image, disordered
                                eating, aging, and related emotional and
                                psychological struggles.
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-span-12 md:col-span-7 flex justify-center items-center"
                    >
                        <div>
                            <img
                                class="filter transition rounded-lg"
                                src="~/assets/images/reflectionsTwo.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="structure"
                class="border-t border-b py-16 bg-backgroundAccent"
            >
                <h5 class="header">How we heal</h5>
                <br />
                <div
                    class="max-w-7xl mx-auto flex flex-col md:grid grid-cols-12 gap-8"
                >
                    <div class="col-span-12 md:col-span-7">
                        <img
                            class="filter transition rounded-lg"
                            src="~/assets/images/reflectionsThree.webp"
                            alt=""
                        />
                    </div>
                    <div
                        class="col-span-12 md:col-span-5 h-full flex items-center"
                    >
                        <div>
                            <ul>
                                <li>
                                    <h6 class="text-xl">Skills Development</h6>
                                    <p class="md:pl-4 py-2">
                                        Build coping strategies and self-care
                                        techniques to manage negative thoughts
                                        and feelings about your body
                                    </p>
                                </li>
                                <li>
                                    <h6 class="text-xl">
                                        Support and Validation
                                    </h6>
                                    <p class="md:pl-4 py-2">
                                        Gain support from others who have
                                        similar experiences
                                    </p>
                                </li>
                                <li>
                                    <h6 class="text-xl">
                                        Cognitive Behavioral Techniques
                                    </h6>
                                    <p class="md:pl-4 py-2">
                                        Identify and challenge distorted
                                        thoughts about body image and replacing
                                        them with healthier perspectives
                                    </p>
                                </li>
                                <li>
                                    <h6 class="text-xl">
                                        Self-Acceptance Exercises
                                    </h6>
                                    <p class="md:pl-4 py-2">
                                        Engage in activities that promote
                                        self-compassion and acceptance of your
                                        body
                                    </p>
                                </li>
                                <li>
                                    <h6 class="text-xl">Education</h6>
                                    <p class="md:pl-4 py-2">
                                        Learn about body image, self-esteem, and
                                        the impact of societal standards and
                                        media
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <SectionsSubscribe />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

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
    background: url("~/assets/images/reflectionsOne.webp");
    background-position: center;
    background-size: cover;
}

.titles {
    @apply h-8 lg:h-16;
    overflow: hidden;
}

.header {
    @apply text-4xl font-header mb-2 text-center;
}
</style>
