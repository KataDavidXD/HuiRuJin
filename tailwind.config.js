 /** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
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
          // Professional color palette
          primary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554",
          },
          // Ocean blue for diving theme
          ocean: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49",
          },
          // Gold accent for legal tradition
          gold: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03",
          },
          // Neutral grays
          neutral: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        fontFamily: {
          // Professional headings - system serif fonts
          serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
          // Modern body text - system sans fonts
          sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
          // Chinese optimized - system Chinese fonts
          'chinese': ["PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", "sans-serif"],
          // Monospace for code
          mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
        },
        fontSize: {
          // Custom font sizes
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
          '7xl': ['4.5rem', { lineHeight: '1' }],
          '8xl': ['6rem', { lineHeight: '1' }],
          '9xl': ['8rem', { lineHeight: '1' }],
        },
        spacing: {
          // Custom spacing
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        boxShadow: {
          // Custom shadows
          'professional': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'ocean': '0 10px 15px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05)',
          'gold': '0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -2px rgba(245, 158, 11, 0.05)',
        },
        animation: {
          // Custom animations
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "fade-in": "fade-in 0.5s ease-in-out",
          "slide-up": "slide-up 0.5s ease-out",
          "bounce-slow": "bounce 2s infinite",
          "pulse-slow": "pulse 3s infinite",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          "fade-in": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          "slide-up": {
            "0%": { transform: "translateY(20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        },
        backgroundImage: {
          // Custom gradients
          'gradient-professional': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          'gradient-ocean': 'linear-gradient(135deg, #0ea5e9 0%, #0c4a6e 100%)',
          'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #92400e 100%)',
          'gradient-hero': 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 50%, #f59e0b 100%)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.neutral.700'),
              maxWidth: 'none',
              h1: {
                fontFamily: theme('fontFamily.serif').join(', '),
                fontWeight: '700',
                color: theme('colors.neutral.900'),
              },
              h2: {
                fontFamily: theme('fontFamily.serif').join(', '),
                fontWeight: '600',
                color: theme('colors.neutral.800'),
              },
              h3: {
                fontFamily: theme('fontFamily.serif').join(', '),
                fontWeight: '600',
                color: theme('colors.neutral.800'),
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            },
          },
          lg: {
            css: {
              fontSize: '1.125rem',
              lineHeight: '1.75',
            },
          },
        }),
      },
    },
    plugins: [],
  }