/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },

      backgroundColor: {
        bgPrimary: "var(--bg-primary)",
        bgPrimaryEL: "var(--bg-primary-e-l)",
        bgWhites: "var(--bg-whites)",
        bgBlacks: "var(--bg-blacks)",
        bgPurles: "var(--bg-purles)",
        bgGrays: "var(--bg-grays)",
        bgSecondary: "var(--bg-secondary)",

        // buttons color 
        btnPrimary: "var(--btn-primary)",
        btnSecondary: "var(--btn-secondary)",
      },
      colors: {
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-yellow)",
        textWhites: "var(--text-whites)",
        textBlacks: "var(--text-blacks)",
        textGrays: "var(--text-grays)",
        textLink: "var(--text-link)",
        textDanger: "var(--text-danger)",
        textSuccess: "var(--text-success)",
      },
      boxShadow: {
        primary: "var(--box-shadow-primary)",
        primaryLg: "var(--box-shadow-primary-lg)",

        secondary: "var(--box-shadow-secondary)",
        secondaryLg: "var(--box-shadow-secondary-lg)",

        thricary: "var(--box-shadow-thricary)",
        thricaryLg: "var(--box-shadow-thricary-lg)",
      },

      spinSlow: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        "xs": '450px'
      }


    },
  },
  plugins: [],
};
