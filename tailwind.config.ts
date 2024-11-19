import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	colors: {
  		'bright-orange': '#FDA214',
      'light-orange': '#FFB84A',
  		'light-gray-blue': '#BCCED9',
  		'dark-blue-gray': '#304859',
  		'dark-blue': '#152938',
  		'light-gray': '#F2F2F2',
  		'blue-gray': '#7191A5',
  		blue: '#6395B8',
      gray: "#DFE7EC",
  		white: '#FCFCFC',
  		inherit: 'inherit',
  		transparent: 'transparent',
  		current: 'currentColor'
  	},
  	fontSize: {
		sm: '0.9375rem',
  		base: '1.125rem',
  		lg: '1.25rem',
  		xl: '2rem',
  		'2xl': '2.75rem',
  		'3xl': '3rem',
  		'4xl': '3.75rem'
  	},
  	extend: {
  		fontFamily: {
  			'atkinson-hyperlegible': ["Atkinson Hyperlegible", "system-ui", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
