import * as TypeGraphQL from "type-graphql";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class FindUniqueNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique(args);
  }
}
