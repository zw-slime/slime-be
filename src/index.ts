import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import datamodelInfo from "../generated/nexus-prisma/datamodel-info";
import { prisma } from "../generated/prisma-client";
import * as path from "path";
import { GraphQLServer } from "graphql-yoga";

const Query = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t => t.prismaFields(["*"])
});

const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: prisma
  },
  outputs: {
    schema: path.join(__dirname, "../generated/schema.graphql"),
    typegen: path.join(__dirname, "../generated/nexus.ts")
  }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});
server.start(() => console.log("server is running on http://localhost:4000"));
