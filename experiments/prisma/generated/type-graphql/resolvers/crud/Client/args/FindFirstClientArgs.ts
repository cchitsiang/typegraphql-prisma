import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientOrderByInput } from "../../../inputs/ClientOrderByInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { ClientScalarFieldEnum } from "../../../../enums/ClientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClientOrderByInput], {
    nullable: true
  })
  orderBy?: ClientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "name" | "age" | "balance" | "amount" | "role"> | undefined;
}
