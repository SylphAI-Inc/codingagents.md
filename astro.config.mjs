import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://codingagent.md",
  devToolbar: { enabled: false },
  integrations: [starlight({
    title: "CodingAgent.md",
    description:
      "The Aggregator Hub for the AI Coding Agent Ecosystem. Every agent. Every format. One place.",
    logo: {
      light: "./src/assets/sylph-symbol-white.png",
      dark: "./src/assets/sylph-symbol-white.png",
      replacesTitle: false,
    },
    social: [
      {
        icon: "github",
        label: "GitHub",
        href: "https://github.com/SylphAI-Inc/coding_agent",
      },
    ],
    customCss: ["./src/styles/custom.css"],
    favicon: "/favicon.png",
    head: [
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://codingagent.md/og-image.png",
        },
      },
      {
        tag: "meta",
        attrs: {
          name: "twitter:card",
          content: "summary_large_image",
        },
      },
      {
        tag: "script",
        content: `document.addEventListener('DOMContentLoaded',()=>{const img=document.querySelector('.site-title img');if(img){img.style.cursor='pointer';img.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation();window.open('https://sylph.ai','_blank');});}});`,
      },
    ],
    sidebar: [
      {
        label: "Start Here",
        items: [
          { label: "Welcome", slug: "index" },
          { label: "Ecosystem Landscape", slug: "landscape" },
        ],
      },
      {
        label: "Coding Agents",
        autogenerate: { directory: "agents" },
      },
      {
        label: "Config Formats",
        autogenerate: { directory: "formats" },
      },
      {
        label: "Protocols",
        autogenerate: { directory: "protocols" },
      },
      {
        label: "Guides",
        autogenerate: { directory: "guides" },
      },
      {
        label: "Benchmarks",
        autogenerate: { directory: "benchmarks" },
      },
    ],
    editLink: {
      baseUrl:
        "https://github.com/SylphAI-Inc/coding_agent/edit/main/",
    },
    lastUpdated: true,
  }), react()],
});