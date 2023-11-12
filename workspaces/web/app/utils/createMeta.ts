export const createMeta = (meta: any) => {
  if (!meta) {
    return [];
  }
  return [
    { title: meta.title },
    {
      name: "description",
      content: meta.description,
    },
    {
      property: "og:title",
      content: meta.title,
    },
    {
      property: "twitter:title",
      content: meta.title,
    },
  ];
};
