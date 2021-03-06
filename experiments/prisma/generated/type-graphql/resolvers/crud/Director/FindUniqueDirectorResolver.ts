import * as TypeGraphQL from "type-graphql";
import { FindUniqueDirectorArgs } from "./args/FindUniqueDirectorArgs";
import { Director } from "../../../models/Director";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class FindUniqueDirectorResolver {
  @TypeGraphQL.Query(_returns => Director, {
    nullable: true
  })
  async director(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDirectorArgs): Promise<Director | null> {
    return getPrismaFromContext(ctx).director.findUnique(args);
  }
}
