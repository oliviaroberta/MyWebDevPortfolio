/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // rose-300
        ring: "var(--color-ring)", // rose-300
        background: "var(--color-background)", // white
        foreground: "var(--color-foreground)", // gray-800
        primary: {
          DEFAULT: "var(--color-primary)", // stone-100
          foreground: "var(--color-primary-foreground)", // gray-800
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // rose-300
          foreground: "var(--color-secondary-foreground)", // gray-800
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-400
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // stone-100
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // sage-400
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-800
        },
        card: {
          DEFAULT: "var(--color-card)", // stone-50
          foreground: "var(--color-card-foreground)", // gray-800
        },
        success: {
          DEFAULT: "var(--color-success)", // green-400
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // orange-300
          foreground: "var(--color-warning-foreground)", // gray-800
        },
        error: {
          DEFAULT: "var(--color-error)", // red-400
          foreground: "var(--color-error-foreground)", // white
        },
        // Brand-specific colors
        sage: "var(--color-accent)", // sage-400
        rose: "var(--color-secondary)", // rose-300
        cream: "var(--color-primary)", // stone-100
        charcoal: "var(--color-text-primary)", // gray-800
        warm: "var(--color-cta)", // amber-400
        surface: "var(--color-surface)", // stone-50
        elevated: "var(--color-surface-elevated)", // stone-100
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(232, 180, 184, 0.15)',
        'warm-lg': '0 8px 24px rgba(232, 180, 184, 0.2)',
        'soft': '0 2px 8px rgba(44, 44, 44, 0.1)',
        'glow': '0 0 20px rgba(232, 180, 184, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}