import type { Config } from "tailwindcss";
export default {
  content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme:{ extend:{ colors:{ brand:{500:"#3b8bff",600:"#2a6df5",700:"#2256cc"} } } }, plugins:[]
} satisfies Config;
