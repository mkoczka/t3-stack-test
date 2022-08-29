import { createRouter } from "./context";
import { z } from "zod";

export const typographyRouter = createRouter()
  .query("getAll", {
    resolve({ ctx }) {
      return ctx.prisma.typography.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    resolve({ ctx, input }) {
      return ctx.prisma.typography.create({
        data: {
          ...input,
        },
      });
    },
  });
