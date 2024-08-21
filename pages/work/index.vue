<template>
    <div class="container px-4 mx-auto my-12 lg:px-64">
        <h2 class="mt-24 mb-12">Work</h2>
        <div v-for="category in majorCategories" :key="category.header">
            <h3 class="border-t border-black pt-4 pb-8 text-3xl">
                {{ category.header }}
            </h3>
            <ul
                v-for="(publication, index) in category.publications"
                :key="publication.name"
            >
                <li class="pb-16 pt-8 grid md:grid-cols-12 gap-8">
                    <div
                        v-if="index > 0"
                        class="border-t border-black md:col-span-12"
                    ></div>
                    <div class="md:col-span-8 flex items-center">
                        <div>
                            <p class="text-sm">{{ publication.date }}</p>
                            <h3 class="font-header uppercase font-bold">
                                {{ publication.name }}
                            </h3>
                            <p class="my-4">{{ publication.description }}</p>
                            <ElementsArrowLink
                                :href="publication.href"
                                text="Visit Site"
                            />
                        </div>
                    </div>
                    <div class="md:col-span-4 flex items-center justify-center">
                        <img
                            :src="publication.image.src"
                            :alt="publication.image.alt"
                        />
                    </div>
                </li>
            </ul>
        </div>
        <div v-for="category in minorCategories" :key="category.header">
            <h3 class="pt-4 my-12 border-t border-black text-3xl">
                {{ category.header }}
            </h3>
            <div class="container mx-auto">
                <ul
                    v-for="publication in category.publications"
                    :key="publication.name"
                >
                    <li class="my-2">
                        <NuxtLink
                            v-if="publication.link"
                            :to="publication.link"
                        >
                            <p class="publication-link">
                                <span
                                    class="font-bold transition underline hover:text-[var(--color-primary)]"
                                    >{{ publication.name }}</span
                                >, {{ publication.publisher }},
                                {{ publication.date }}
                            </p>
                        </NuxtLink>
                        <p v-else class="publication-link">
                            <span class="font-bold">{{ publication.name }}</span
                            >, {{ publication.publisher }},
                            {{ publication.date }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import flavorImage from "../../assets/images/flavorMobile2.webp";
import angeloImage from "../../assets/images/angeloMobile1.webp";
import charleneImage from "../../assets/images/charleneLaptop2.webp";

const majorCategories = [
    {
        header: "Professional Projects",
        publications: [
            {
                name: "Flavor Catering",
                date: "2023",
                publisher: "VerbalEyze Press",
                description:
                    "Flavor Exceptional Catering was created by chefs Sandy Archer and Danny Neidermayer to bring delicious, affordable cuisine to the good people of Charlottesville, Virginia.",
                href: "https://flavorcville.com",
                image: {
                    src: flavorImage,
                    alt: "Flavor Exceptional Catering",
                },
            },
            {
                name: "Angelo Jewelry",
                date: "2023",
                publisher: "VerbalEyze Press",
                description:
                    "Lee Angelo and Pam Marraccini own and operate Angelo Jewelry, located right in the middle of Charlottesville's historic Downtown Mall. Lee creates hand-made jewelry in his workshop while Pam runs the business (and takes lovely, lovely photographs).",
                href: "https://angelojewelry.com",
                image: {
                    src: angeloImage,
                    alt: "Angelo Jewelry",
                },
            },
            {
                name: "Charlene Morris",
                date: "2022",
                publisher: "VerbalEyze Press",
                description:
                    "Charlene has been helping the people of Central Virginia navigate the complex and oft-confusing world of healthcare for years. She wanted a website that would be simple and user-friendly, as many of her clients are elderly, but would also capture her wonderful personality. So I made that.",
                href: "https://charlenemorris.com",
                image: {
                    src: charleneImage,
                    alt: "Charlene Morris' website",
                },
            },
        ],
    },
];

const minorCategories = [
    {
        header: "Personal Projects",
        publications: [
            {
                name: "MeetroidvaniaDB",
                date: "2024",
                publisher: "Video Game Database",
                link: "https://metroidvaniadb.com",
            },
            {
                name: "The Rumen",
                date: "2024",
                publisher: "Literary magazine",
                link: "https://therumen.com",
            },
            {
                name: "Red Brick Inc.",
                date: "2023",
                publisher: "Business website",
                link: "https://redbrickinc.com",
            },
            {
                name: "James Cole",
                date: "2023",
                publisher: "Author Portfolio",
                link: "https://jamescoleauthor.com",
            },
        ],
    },
    {
        header: "Awards and Accolades",
        publications: [
            {
                name: "Column Writing (2nd place)",
                date: "2014",
                publisher: "Virginia Collegiate Press Association",
                link: "",
            },
            {
                name: "Column Writing (3rd place)",
                date: "2015",
                publisher: "Virginia Collegiate Press Association",
                link: "",
            },
            {
                name: "Favorite Son",
                date: "1986-present",
                publisher: "My mother",
                link: "",
            },
        ],
    },
];
</script>

<style scoped>
.publication-link {
    @apply font-normal;
    text-transform: none;
    color: black;
}
</style>
