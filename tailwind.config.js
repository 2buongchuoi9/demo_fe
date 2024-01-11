/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1445c5",
                line: "#dcdcdc",
                op: "var(--op)",
                hover: "#f0f0f0",
            },
            width: { wrap: "80rem" },
        },
    },
    plugins: [],
}
