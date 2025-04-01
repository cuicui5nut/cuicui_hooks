import { defineConfig } from "dumi";
import { menus } from "./hooks/src/menus";
export default defineConfig({
  outputPath: "docs-dist",
  resolve: {
    atomDirs: [
      {
        type: "hooks",
        dir: "hooks/src",
      },
    ],
  },
  themeConfig: {
    name: "cHooks",
    nav: [
      { title: "指南", link: "/guide" },
      { title: "Hooks", link: "/hooks/use-boolean", activePath: "/hooks" },
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
