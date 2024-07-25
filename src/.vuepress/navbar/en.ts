import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "分类",
    icon: "edit",
    prefix: "/posts/",
    children: [
      { text: "前端", icon: "edit", link: "前端" },
      { text: "后端", icon: "edit", link: "后端" },
      { text: "运维", icon: "edit", link: "运维" },
      { text: "计科", icon: "edit", link: "计科" },
      { text: "算法", icon: "edit", link: "算法" },
      { text: "懂王", icon: "edit", link: "懂王" },
      { text: "其他", icon: "edit", link: "其他" },
    ],
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag",
  },
]);
