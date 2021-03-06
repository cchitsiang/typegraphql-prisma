import * as TypeGraphQL from "type-graphql";
import { DeleteManyProblemArgs } from "./args/DeleteManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class DeleteManyProblemResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProblemArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).problem.deleteMany(args);
  }
}
