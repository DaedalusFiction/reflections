// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            title: "Fictional Web",
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicons/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicons/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicons/favicon-16x16.png",
                },
                { rel: "manifest", href: "/favicons/site.webmanifest" },
                {
                    rel: "mask-icon",
                    href: "/favicons/safari-pinned-tab.svg",
                    color: "#5bbad5",
                },
            ],
            htmlAttrs: {
                lang: "en", // Set the default language
            },
            meta: [
                {
                    name: "description",
                    content: "Website design and development",
                },
            ],
        },
    },
    components: {
        dirs: ["~/components", "~/components/icons"],
    },
});
