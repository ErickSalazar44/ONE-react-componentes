/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "10px 10px 30px 0px rgba(0, 0, 0, 0.06)",
            },
            colors: {
                main: "#6278F7",
                bl: "#212121",
            },
            keyframes: {
                success: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                modal: "success 0.5s ease-out",
            },
        },
    },
    plugins: [],
};
