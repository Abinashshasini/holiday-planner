import { defineField, defineType } from "sanity";

export default defineType({
  name: "lead",
  title: "Callback Requests",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "number",
      title: "Mobile Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Closed", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "number",
      description: "submittedAt",
    },
    prepare({ title, subtitle, description }) {
      return {
        title: title ?? "Unknown",
        subtitle: `📞 ${subtitle ?? "—"}  •  ${description ? new Date(description).toLocaleString("en-IN") : ""}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
