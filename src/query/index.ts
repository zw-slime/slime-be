import { prismaObjectType } from "nexus-prisma";
import { intArg, stringArg } from "nexus";
import { Search } from "../model";

export const Query = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields(["users"]);
    t.list.field("users", {
      type: "User",
      args: {
        pn: intArg({ required: true }),
        ps: intArg({ required: true }),
        search: stringArg({ required: true })
      },
      resolve: (_, param, ctx) => {
        const { pn, ps, search } = param as Search;
        return ctx.prisma.users({
          skip: (pn - 1) * ps,
          first: ps,
          where: { username_in: search }
        });
      }
    });
    t.list.field("roles", {
      type: "Role",
      args: {
        pn: intArg({ required: true }),
        ps: intArg({ required: true }),
        search: stringArg({ required: true })
      },
      resolve: (_, param, ctx) => {
        const { pn, ps, search } = param as Search;
        return ctx.prisma.roles({
          skip: (pn - 1) * ps,
          first: ps,
          where: {
            OR: [{ nameCN_contains: search }]
          }
        });
      }
    });
  }
});
