import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'black': '#060606'
            },
            fontFamily: {
                sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "2xs": ".625rem" //10px
            }
        },
    },
    plugins: [],
};
