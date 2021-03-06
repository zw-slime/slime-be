/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    public?: boolean | null; // Boolean
    public_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    type?: NexusGenInputs['TypeWhereInput'] | null; // TypeWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  RoleWhereInput: { // input type
    AND?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    createAt?: any | null; // DateTime
    createAt_gt?: any | null; // DateTime
    createAt_gte?: any | null; // DateTime
    createAt_in?: any[] | null; // [DateTime!]
    createAt_lt?: any | null; // DateTime
    createAt_lte?: any | null; // DateTime
    createAt_not?: any | null; // DateTime
    createAt_not_in?: any[] | null; // [DateTime!]
    desc?: string | null; // String
    desc_contains?: string | null; // String
    desc_ends_with?: string | null; // String
    desc_gt?: string | null; // String
    desc_gte?: string | null; // String
    desc_in?: string[] | null; // [String!]
    desc_lt?: string | null; // String
    desc_lte?: string | null; // String
    desc_not?: string | null; // String
    desc_not_contains?: string | null; // String
    desc_not_ends_with?: string | null; // String
    desc_not_in?: string[] | null; // [String!]
    desc_not_starts_with?: string | null; // String
    desc_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    nameCN?: string | null; // String
    nameCN_contains?: string | null; // String
    nameCN_ends_with?: string | null; // String
    nameCN_gt?: string | null; // String
    nameCN_gte?: string | null; // String
    nameCN_in?: string[] | null; // [String!]
    nameCN_lt?: string | null; // String
    nameCN_lte?: string | null; // String
    nameCN_not?: string | null; // String
    nameCN_not_contains?: string | null; // String
    nameCN_not_ends_with?: string | null; // String
    nameCN_not_in?: string[] | null; // [String!]
    nameCN_not_starts_with?: string | null; // String
    nameCN_starts_with?: string | null; // String
    NOT?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    OR?: NexusGenInputs['RoleWhereInput'][] | null; // [RoleWhereInput!]
    updateAt?: any | null; // DateTime
    updateAt_gt?: any | null; // DateTime
    updateAt_gte?: any | null; // DateTime
    updateAt_in?: any[] | null; // [DateTime!]
    updateAt_lt?: any | null; // DateTime
    updateAt_lte?: any | null; // DateTime
    updateAt_not?: any | null; // DateTime
    updateAt_not_in?: any[] | null; // [DateTime!]
    users_every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    users_none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    users_some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  TypeWhereInput: { // input type
    AND?: NexusGenInputs['TypeWhereInput'][] | null; // [TypeWhereInput!]
    createAt?: any | null; // DateTime
    createAt_gt?: any | null; // DateTime
    createAt_gte?: any | null; // DateTime
    createAt_in?: any[] | null; // [DateTime!]
    createAt_lt?: any | null; // DateTime
    createAt_lte?: any | null; // DateTime
    createAt_not?: any | null; // DateTime
    createAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['TypeWhereInput'][] | null; // [TypeWhereInput!]
    OR?: NexusGenInputs['TypeWhereInput'][] | null; // [TypeWhereInput!]
    posts_every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    updateAt?: any | null; // DateTime
    updateAt_gt?: any | null; // DateTime
    updateAt_gte?: any | null; // DateTime
    updateAt_in?: any[] | null; // [DateTime!]
    updateAt_lt?: any | null; // DateTime
    updateAt_lte?: any | null; // DateTime
    updateAt_not?: any | null; // DateTime
    updateAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    posts_every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    role?: NexusGenInputs['RoleWhereInput'] | null; // RoleWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
    username?: string | null; // String
    username_contains?: string | null; // String
    username_ends_with?: string | null; // String
    username_gt?: string | null; // String
    username_gte?: string | null; // String
    username_in?: string[] | null; // [String!]
    username_lt?: string | null; // String
    username_lte?: string | null; // String
    username_not?: string | null; // String
    username_not_contains?: string | null; // String
    username_not_ends_with?: string | null; // String
    username_not_in?: string[] | null; // [String!]
    username_not_starts_with?: string | null; // String
    username_starts_with?: string | null; // String
  }
}

export interface NexusGenEnums {
  PostOrderByInput: "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "public_ASC" | "public_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "password_ASC" | "password_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "username_ASC" | "username_DESC"
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: { // root type
    content?: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    public: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: {};
  Role: { // root type
    createAt: any; // DateTime!
    desc?: string | null; // String
    id: string; // ID!
    name: string; // String!
    nameCN: string; // String!
    updateAt: any; // DateTime!
  }
  Type: { // root type
    createAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updateAt: any; // DateTime!
  }
  User: { // root type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    password: string; // String!
    updatedAt: any; // DateTime!
    username: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostWhereInput: NexusGenInputs['PostWhereInput'];
  RoleWhereInput: NexusGenInputs['RoleWhereInput'];
  TypeWhereInput: NexusGenInputs['TypeWhereInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  PostOrderByInput: NexusGenEnums['PostOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createRole: NexusGenRootTypes['Role']; // Role!
    createUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    public: boolean; // Boolean!
    title: string; // String!
    type: NexusGenRootTypes['Type']; // Type!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Role: { // field return type
    createAt: any; // DateTime!
    desc: string | null; // String
    id: string; // ID!
    name: string; // String!
    nameCN: string; // String!
    updateAt: any; // DateTime!
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  Type: { // field return type
    createAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    updateAt: any; // DateTime!
  }
  User: { // field return type
    createdAt: any; // DateTime!
    email: string; // String!
    id: string; // ID!
    password: string; // String!
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    role: NexusGenRootTypes['Role']; // Role!
    updatedAt: any; // DateTime!
    username: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createRole: { // args
      desc?: string | null; // String
      name: string; // String!
      nameCN: string; // String!
    }
    createUser: { // args
      email: string; // String!
      password: string; // String!
      role: string; // String!
      username: string; // String!
    }
  }
  Query: {
    roles: { // args
      pn: number; // Int!
      ps: number; // Int!
      search: string; // String!
    }
    users: { // args
      pn: number; // Int!
      ps: number; // Int!
      search: string; // String!
    }
  }
  Role: {
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Type: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "Role" | "Type" | "User";

export type NexusGenInputNames = "PostWhereInput" | "RoleWhereInput" | "TypeWhereInput" | "UserWhereInput";

export type NexusGenEnumNames = "PostOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}