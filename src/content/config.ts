import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string()
    })
});

const lessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        week: z.string(),
        title: z.string(),
        sortOrder: z.number(),
        description: z.string()
    })
});



export const collections = {
    'posts': postsCollection,
    'lessons': lessonsCollection,
};