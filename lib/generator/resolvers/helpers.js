"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCrudResolverClassMethodDeclaration = void 0;
const ts_morph_1 = require("ts-morph");
const types_1 = require("../dmmf/types");
function generateCrudResolverClassMethodDeclaration(action, mapping, dmmfDocument) {
    return {
        name: action.name,
        isAsync: true,
        returnType: `Promise<${action.returnTSType}>`,
        decorators: [
            {
                name: `TypeGraphQL.${action.operation}`,
                arguments: [
                    `_returns => ${action.typeGraphQLType}`,
                    ts_morph_1.Writers.object({
                        nullable: `${!action.method.isRequired}`,
                    }),
                ],
            },
        ],
        parameters: [
            {
                name: "ctx",
                // TODO: import custom `ContextType`
                type: "any",
                decorators: [{ name: "TypeGraphQL.Context", arguments: [] }],
            },
            ...(action.kind === types_1.DMMF.ModelAction.aggregate ||
                action.kind === types_1.DMMF.ModelAction.groupBy
                ? [
                    {
                        name: "info",
                        type: "GraphQLResolveInfo",
                        decorators: [{ name: "TypeGraphQL.Info", arguments: [] }],
                    },
                ]
                : []),
            ...(!action.argsTypeName
                ? []
                : [
                    {
                        name: "args",
                        type: action.argsTypeName,
                        decorators: [{ name: "TypeGraphQL.Args", arguments: [] }],
                    },
                ]),
        ],
        statements: action.kind === types_1.DMMF.ModelAction.aggregate
            ? [
                /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
            ]
            : action.kind === types_1.DMMF.ModelAction.groupBy
                ? [
                    /* ts */ ` const { count, avg, sum, min, max } = transformFields(
              graphqlFields(info as any)
            );`,
                    /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.kind}({
              ...args,
              ...Object.fromEntries(
                Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
              ),
            });`,
                ]
                : [
                    /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.kind}(${action.argsTypeName ? "args" : ""});`,
                ],
    };
}
exports.generateCrudResolverClassMethodDeclaration = generateCrudResolverClassMethodDeclaration;
//# sourceMappingURL=helpers.js.map