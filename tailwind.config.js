module.exports = {
    theme: {
        //
        fontFamily: {
            header: ["Archivo", "sans-serif"],
            sans: ["Inter", "sans-serif"],
            serif: ["Newsreader", "serif"],
        },
        extend: {
            colors: {
                primary: "#F58A07",
                secondary: "#f71d00",
                accent: "#70D6FF",
                // background: "#F5F2DD",
                // backgroundAccent: "#fffceb",
                background: "#EDE7D9",
                backgroundAccent: "#F5F3F5",
                text: "#1d1e18",
            },
            boxShadow: {
                "sm-top": "0 -1px 2px 0 rgb(0 0 0 / 0.05)",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            borderColor: {
                // DEFAULT: "#1d1e18",
                DEFAULT: "#D0CCA7",
            },
        },
    },
};
