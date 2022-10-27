export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "github",
      title: "GitHub Link",
      type: "string",
    },
    {
      name: "livelink",
      title: "Live Link",
      type: "string",
    },
  ],
};
