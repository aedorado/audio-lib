/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // saffron: {
        //   50: '#FFF9F0',
        //   100: '#FFF2E0',
        //   300: '#F7C17B',
        //   500: '#E6A758',
        //   600: '#D98E36',
        //   700: '#B8722A',
        //   800: '#94591F'
        // },
        ocean: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          300: '#7DD3FC',
          500: '#38BDF8',
          600: '#0EA5E9',
          700: '#0284C7',
          800: '#0369A1'
        },
        blossom: {
          50: '#FFF5F7',
          100: '#FFE3EC',
          300: '#FFB8D2',
          500: '#F78FB3',
          600: '#EC6A97',
          700: '#C14472',
          800: '#9D355A'
        },
        saffron: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          300: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151'
        },
        vedic: {
          50: '#FFFDF5',
          100: '#FFF9E6',
          300: '#FCE7B2',
          500: '#E5C87B',
          600: '#D1B462',
          700: '#A28B48',
          800: '#7A6A37'
        },
        sage: {
          50: '#F4FBF7',
          100: '#E3F7EB',
          300: '#A8DDBE',
          500: '#6FCF97',
          600: '#57BA81',
          700: '#3C8F60',
          800: '#2E704B'
        }
      }
    }
  },
  plugins: [],
}


