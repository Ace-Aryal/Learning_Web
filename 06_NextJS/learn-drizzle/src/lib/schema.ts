import { z } from "zod";
export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Title is required"),
});
export type Blog = z.infer<typeof blogSchema>;
