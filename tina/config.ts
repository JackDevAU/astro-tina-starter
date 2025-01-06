import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          router({ document }) {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
          },
          {
            name: "pubDate",
            label: "Publication Date",
            type: "datetime",
          },
          {
            name: "updatedDate",
            label: "Updated Date",
            type: "datetime",
          },
          {
            name: "heroImage",
            label: "Hero Image",
            type: "image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "config",
        label: "Global Config",
        path: "src/content/config",
        format: "json",
        ui: {
          global: true,
        },        
        fields: [
          {
            name: "seo",
            label: "General site config",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Site title for SEO",
                type: "string",
                required: true,
              },
              {
                name: "description",
                label: "Site description for SEO",
                type: "string",
                required: true,
              },
              // Add more settings here...
            ],
          },
          // Add other config fields here...
        ]
        },
    ],
  },
});
