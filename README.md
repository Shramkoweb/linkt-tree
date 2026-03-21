# Link Tree

A fast, single-file-config link tree built with [Astro](https://astro.build/). Edit one TypeScript file, deploy, and
share all your links on a single page.

[Live Demo](https://links.shramko.dev/)

## Quick Start

**Prerequisites:** Node.js >= 22.12.0, [pnpm](https://pnpm.io/)

```bash
git clone https://github.com/Shramkoweb/linkt-tree.git
cd linkt-tree
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to see it running.

## Customization

All personal data lives in a single file: [`src/data/user.ts`](src/data/user.ts).

```ts
export const name = "Your Name";
export const profession = "Your Title";

export const links: UserLink[] = [
  {
    url: "https://example.com",
    icon: "github",
    title: "GitHub",
    description: "Short description of this link",
  },
];
```

**Available icons:** `github`, `instagram`, `linkedin`, `message`, `pdf`, `producthunt`, `reddit`, `rocket`, `star`,
`twitch`, `youtube`.

To use your own profile picture, replace `src/assets/user-profile-image.png`.

## Commands

| Command        | Action                               |
|:---------------|:-------------------------------------|
| `pnpm dev`     | Start dev server at `localhost:4321` |
| `pnpm build`   | Type-check and build to `./dist/`    |
| `pnpm preview` | Preview production build locally     |

## Project Structure

```
├── src/
│   ├── assets/          # Images (profile picture)
│   ├── components/      # UI components (Profile, Link, List)
│   │   └── icons/       # SVG icon components
│   ├── data/            # User configuration (user.ts)
│   ├── layouts/         # Page layouts
│   └── pages/           # Page routes
├── public/              # Static assets (favicon, robots.txt)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Tech Stack

- [Astro](https://astro.build/) v6 — static site generation with on-demand rendering via Vercel adapter
- [TypeScript](https://www.typescriptlang.org/) — type-safe link configuration
- [Sharp](https://sharp.pixelplumbing.com/) — optimized image processing
- [Inter](https://rsms.me/inter/) — typeface via Fontsource

## Deployment

The project is configured for [Vercel](https://vercel.com/) out of the box (`@astrojs/vercel` adapter + web analytics).
To deploy elsewhere, swap the adapter in `astro.config.mjs` —
see [Astro deployment docs](https://docs.astro.build/en/guides/deploy/).

## Contributing

Contributions, issues, and feature requests are welcome.

## License

[MIT](./LICENSE) © 2024-present Serhii Shramko
