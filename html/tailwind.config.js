/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,html}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                summer: {
                    1: '#931D0A',
                    2: '#D1340B',
                    3: '#F65E0A',
                    4: '#F69A2C',
                    5: '#F7E609'
                }
            }
        }
    },
    plugins: [],
};
