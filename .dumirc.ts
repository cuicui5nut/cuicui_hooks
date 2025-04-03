import { defineConfig } from "dumi";
import { menus } from "./config/menus";
export default defineConfig({
  outputPath: "dist",
  alias: {
    cuicuiHooks: process.cwd() + "/packages/hooks/src/index.ts",
  },
  base: "/cuicui-hooks/",
  publicPath: "/cuicui-hooks/",
  resolve: {
    atomDirs: [
      {
        type: "hooks",
        dir: "packages/hooks/src",
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
