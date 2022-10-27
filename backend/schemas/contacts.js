export default {
  name: "contacts",
  title: "Contacts",
  type: "document",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
