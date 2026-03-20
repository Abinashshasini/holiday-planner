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

    // ── Pricing ────────────────────────────────────────────────
    defineField({
      name: "originalPrice",
      title: "Original Price (₹)",
      type: "number",
      description: "Full price before any discount",
      validation: (Rule) =>
        Rule.required().positive().error("Must be a positive number"),
    }),
    defineField({
      name: "discountedPrice",
      title: "Discounted Price (₹)",
      type: "number",
      description: "The sale price shown to customers",
      validation: (Rule) =>
        Rule.required()
          .positive()
          .error("Must be a positive number")
          .custom((discountedPrice, context) => {
            const original = context.document?.originalPrice as number;
            if (original && (discountedPrice as number) >= original)
              return "Discounted price must be less than the original price";
            return true;
          }),
    }),
    defineField({
      name: "isOnSale",
      title: "On Sale",
      type: "boolean",
      description: "Show a sale badge and strike-through the original price",
      initialValue: false,
    }),
    // ──────────────────────────────────────────────────────────

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
    select: {
      title: "title",
      subtitle: "location",
      isOnSale: "isOnSale",
      originalPrice: "originalPrice",
      discountedPrice: "discountedPrice",
    },
    prepare({ title, subtitle, isOnSale, originalPrice, discountedPrice }) {
      const price = `₹${discountedPrice?.toLocaleString("en-IN")} (was ₹${originalPrice?.toLocaleString("en-IN")})`;
      const saleTag = isOnSale ? " 🏷️ Sale" : "";
      return {
        title: `${title}${saleTag}`,
        subtitle: [subtitle, price].filter(Boolean).join(" · "),
      };
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
