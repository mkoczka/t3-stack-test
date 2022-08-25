import { createRouter } from "./context";
import { z } from "zod";

export const colorRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.colors.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.colors.create({
        data: input,
      });
    },
  })
  .mutation("delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.colors.deleteMany({
        where: {
          id: input.id,
        },
      });
    },
  });
