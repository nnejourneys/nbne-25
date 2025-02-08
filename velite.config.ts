import { defineConfig, defineCollection, s } from "velite"; 

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
    slug: `/tours/${data.slug.split("/").pop()}`,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const tours = defineCollection({
    name: "Tours",
    pattern: "tours/**/*.mdx",
    schema: s
      .object({
        slug: s.path(),
        draft: s.boolean().default(false),
        title: s.string().max(99).optional(),
        subtitle: s.string().max(99).optional(), 
        keywords: s.string().optional(),
        days: s.string().max(99).optional(),
        description: s.string().max(999).optional(),
        bg_image: s.string().optional().optional(),
        image: s.string().optional(),
        type: s.string().max(99).optional(),
        tourtype: s.string().max(99).optional(),
        category: s.string().max(99).optional(),
        cat: s.string().max(99).optional(),
        tags: s.array(s.string()).optional(),
        weight: s.number().optional(),
        touricon: s.string().max(99).optional(),
        overview: s.array(s.object({ label: s.string(), icon: s.string(), data: s.string() })).optional(),
        overs: s.array(s.object({ l: s.string(), d: s.union([s.string(), s.number()])})).optional(),
        highlights: s.array(s.string()).optional(),
        inclusions: s.array(s.string()).optional(),
        exclusions: s.array(s.string()).optional(),
        accommodation: s.string().max(99).optional(),
        meals: s.string().max(99).optional(),
        refreshments: s.string().optional(),
        faq: s.array(s.object({ title: s.string(), text: s.string() })).optional(),
        galleryimages: s.array(s.string()).optional(),
        othertours: s.array(s.object({ title: s.string(), link: s.string(), image: s.string() })).optional(),
        body: s.mdx(),
      })
      .transform(computedFields),
  });

  const posts = defineCollection({
    name: "Posts",
    pattern: "posts/**/*.mdx",
    schema: s
      .object({
        slug: s.path(),
        draft: s.boolean().default(false),
        title: s.string().max(99).optional(),
        date: s.coerce.date(),
        excerpt: s.string().max(299).optional(),
        author: s.array(s.object({ name: s.string(), picture: s.string(), initials: s.string() })).optional(),
        coverImage: s.string().optional(), 
        ogImage: s.string().optional(),
        body: s.mdx(),
      })
      .transform(computedFields),
  });

     
 export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, tours },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
