import * as TypeGraphQL from "type-graphql";
import { FindUniquePatientArgs } from "./args/FindUniquePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class FindUniquePatientResolver {
  @TypeGraphQL.Query(_returns => Patient, {
    nullable: true
  })
  async patient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.findUnique(args);
  }
}
