/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cream: "#ECE1CE",
                transparent: "transparent",
                white: "#ffffff",
                headerBlack: "1E1E1E",
            },

            fontFamily: {
                header: ["Bungee"],
                logo: ["Bungee Shade"],
            },
        },
    },
    plugins: [],
};
