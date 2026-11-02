import { defineField, defineType, defineArrayMember } from 'sanity';

export const recentPostsType = defineType({
  type: 'document',
  name: 'recents',
  title: 'Recents',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'array',
      name: 'recentPosts',
      title: 'Recent Posts',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'post' }] })],
    }),
  ],
});
