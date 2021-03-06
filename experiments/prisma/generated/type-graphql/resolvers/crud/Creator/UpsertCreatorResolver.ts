import * as TypeGraphQL from "type-graphql";
import { UpsertCreatorArgs } from "./args/UpsertCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class UpsertCreatorResolver {
  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async upsertCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCreatorArgs): Promise<Creator> {
    return getPrismaFromContext(ctx).creator.upsert(args);
  }
}
