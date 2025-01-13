import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      isTitle: true,
      required: true
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true
    }
  ]
}