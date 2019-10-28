import { prismaObjectType } from "nexus-prisma";
import { idArg, intArg, stringArg } from "nexus";

export const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t => {
    t.prismaFields(["createUser", "createRole"]);
    t.field("createUser", {
      type: "User",
      args: {
        username: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
        role: stringArg({ required: true })
      },
      resolve: (_, param: any, ctx) => {
        const { email, username, password, role } = param;
        return ctx.prisma.createUser({
          email,
          username,
          password,
          role: { connect: { name: role } }
        });
      }
    });
    t.field("createRole", {
      type: "Role",
      args: {
        name: stringArg({ required: true }),
        nameCN: stringArg({ required: true }),
        desc: stringArg()
      },
      resolve: (_, param: any, ctx) => {
        const { name, nameCN, desc } = param;
        return ctx.prisma.createRole({ name, nameCN, desc });
      }
    });
  }
});
