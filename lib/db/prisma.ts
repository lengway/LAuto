import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL?.trim());

function createMissingDatabaseUrlProxy(): PrismaClient {
  return new Proxy(
    {},
    {
      get() {
        throw new Error("DATABASE_URL is not configured");
      },
    }
  ) as PrismaClient;
}

export const prisma =
  globalForPrisma.prisma ??
  (hasDatabaseUrl
    ? new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
      })
    : createMissingDatabaseUrlProxy());

if (process.env.NODE_ENV !== "production" && hasDatabaseUrl) {
  globalForPrisma.prisma = prisma;
}
