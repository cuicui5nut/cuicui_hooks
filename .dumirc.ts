import { defineConfig } from "dumi";
import { menus } from "./src/menus";
export default defineConfig({
  outputPath: "docs-dist",
  resolve: {
    atomDirs: [
      {
        type: "hooks",
        dir: "src/hooks",
      },
    ],
  },
  themeConfig: {
    name: "cHooks",
    nav: [
      { title: "指南", link: "/guide" },
      { title: "Hooks", link: "/hooks" },
    ],
    sidebar: {
      "/guide": [
        {
          title: " ",
          children: [
            {
              title: "介绍",
              link: "/guide",
            },
          ],
        },
      ],
      "/hooks": menus,
    },
  },
});
