import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://codingagents.md",
  devToolbar: { enabled: false },
  integrations: [starlight({
    title: "CodingAgents.md",
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
    favicon: "/favicon.ico",
    head: [
      // Favicon variants
      {
        tag: "link",
        attrs: {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      },
      // Open Graph
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://codingagents.md/og-image.png",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "og:type",
          content: "website",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "og:site_name",
          content: "CodingAgents.md",
        },
      },
      // Twitter
      {
        tag: "meta",
        attrs: {
          name: "twitter:card",
          content: "summary_large_image",
        },
      },
      {
        tag: "meta",
        attrs: {
          name: "twitter:site",
          content: "@SylphAI_Inc",
        },
      },
      // Additional Meta Tags
      {
        tag: "meta",
        attrs: {
          name: "author",
          content: "SylphAI",
        },
      },
      {
        tag: "meta",
        attrs: {
          name: "keywords",
          content: "coding agents, AI coding, Claude Code, Cursor, GitHub Copilot, Codex, MCP, agent SDK, AI development, code assistant",
        },
      },
      // JSON-LD Structured Data - Organization
      {
        tag: "script",
        attrs: { type: "application/ld+json" },
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CodingAgents.md",
          "url": "https://codingagents.md",
          "logo": "https://codingagents.md/favicon.png",
          "description": "The Aggregator Hub for the AI Coding Agent Ecosystem",
          "sameAs": ["https://github.com/SylphAI-Inc/codingagents.md"]
        }),
      },
      // JSON-LD Structured Data - WebSite with SearchAction
      {
        tag: "script",
        attrs: { type: "application/ld+json" },
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "CodingAgents.md",
          "url": "https://codingagents.md",
          "description": "The open directory for coding agents, models, SDKs, benchmarks, tools, MCPs, skills, protocols, and research.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://codingagents.md/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      },
      // Logo click handler
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
        label: "Agent SDKs",
        autogenerate: { directory: "sdks" },
      },
      {
        label: "Benchmarks",
        autogenerate: { directory: "benchmarks" },
      },
    ],
    editLink: {
      baseUrl:
        "https://github.com/SylphAI-Inc/codingagents.md/edit/main/",
    },
    lastUpdated: true,
  }), react()],
});