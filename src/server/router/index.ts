// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { colorRouter } from "./color";
import { typographyRouter } from "./typography";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("colors.", colorRouter)
  .merge("typography.", typographyRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
