import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "package",
  title: "Tour Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "3 Nights / 4 Days"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'e.g. "\u20b911,999"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Heritage", value: "heritage" },
          { title: "Beach", value: "beach" },
          { title: "Nature", value: "nature" },
          { title: "Tribal", value: "tribal" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: 'Key attractions (e.g. "Konark Sun Temple")',
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "included",
      title: "What is Included",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "excluded",
      title: "What is Excluded",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "itineraryDay",
          title: "Day",
          fields: [
            defineField({ name: "day", title: "Day Number", type: "number" }),
            defineField({ name: "title", title: "Day Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "day" },
            prepare(selection) {
              return { title: `Day ${selection.subtitle}: ${selection.title}` };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "location" },
    prepare(selection) {
      return { title: selection.title, subtitle: selection.subtitle };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
