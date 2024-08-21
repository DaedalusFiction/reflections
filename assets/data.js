import rumenScreencap from "../assets/images/rumenScreencap.webp";
import angeloShowcase from "../assets/images/laptopAngelo3.webp";
import mvdbShowcase from "../assets/images/mvdb_screencap.webp";

const portfolio = [
    {
        name: "MetroidvaniaDB",
        backgroundColor: "#09bc8a",
        headerImage: { src: mvdbShowcase, alt: "" },
        year: "2024",
        industry: "Video Games",
        deliverables: [
            "Website Design",
            "Website Development",
            "Database Generation",
            "Search Integration",
        ],
        location: "/work/metroidvaniaDB",
        href: "https://metroidvaniadb.com",
        gallery: [
            { src: "flavorDesktop.webp", alt: "", size: 6 },
            { src: "flavorTablet.webp", alt: "", size: 6 },
            { src: "flavorMobile.webp", alt: "", size: 12 },
            { src: "flavorMobile2.webp", alt: "", size: 6 },
            { src: "flavorTablet2.webp", alt: "", size: 6 },
            // { src: "/images/flavorDesktop.webp", alt: "", size: 12 },
        ],
        description:
            "MetroidvaniaDB a database of Metroidvanias, which is a portmanteau of Metroid and Castlevanias, two of the pioneering franchises in this exploration- and character-progression-based action platformer. I integrated Algolia Search with Firebase to make it easy for users to find games based on a variety of fields.",
    },
    {
        name: "The Rumen",
        backgroundColor: "#9B5DE5",
        // backgroundColor: "#EEB902",
        headerImage: { src: rumenScreencap, alt: "" },
        year: "2024",
        industry: "Literature",
        deliverables: [
            "Website Design",
            "Website Development",
            "Database Management",
        ],
        location: "/work/the-rumen",
        href: "https://therumen.com",
        gallery: [
            { src: "flavorDesktop.webp", alt: "", size: 6 },
            { src: "flavorTablet.webp", alt: "", size: 6 },
            { src: "flavorMobile.webp", alt: "", size: 12 },
            { src: "flavorMobile2.webp", alt: "", size: 6 },
            { src: "flavorTablet2.webp", alt: "", size: 6 },
            // { src: "/images/flavorDesktop.webp", alt: "", size: 12 },
        ],
        description:
            "Poet and academic James Cole and I collaborated on a literary journal that publishes fiction, poetry, and creative non-fiction. The journal is listed on Duotrope and in Poets & Writers. It uses Firebase as a BaaS and email.js to handle form emails.",
    },
    {
        name: "Angelo Jewelry",
        backgroundColor: "#FEE440",
        headerImage: { src: angeloShowcase, alt: "" },
        year: "2023",
        location: "/work/angelo-jewelry",
        href: "https://commerce-template.netlify.app",
        industry: "Retail",
        deliverables: [
            "Website Design",
            "Website Development",
            "Copywriting & Editing",
        ],
        gallery: [
            { src: "/images/laptopAngelo.webp", alt: "", size: 6 },
            { src: "/images/mobileAngelo1.webp", alt: "", size: 6 },
            { src: "/images/laptopAngelo3.webp", alt: "", size: 12 },
            { src: "/images/angeloTablet.webp", alt: "", size: 6 },
            { src: "/images/angeloMobile.webp", alt: "", size: 6 },
            { src: "/images/angeloMobile2.webp", alt: "", size: 12 },
        ],
        description:
            "Angelo Jewelry was founded in 1998 by Lee Angelo Marraccini and his wife, Pam. Located on the downtown mall in Charlottesville, Virginia, they offer hand-made jewelry crafted by Lee as well as a number of other nationally recognized jewelers.",
    },
];

export { portfolio };
