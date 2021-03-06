import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs";
import { CreateManyPatientArgs } from "./args/CreateManyPatientArgs";
import { CreatePatientArgs } from "./args/CreatePatientArgs";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { DeletePatientArgs } from "./args/DeletePatientArgs";
import { FindFirstPatientArgs } from "./args/FindFirstPatientArgs";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { FindUniquePatientArgs } from "./args/FindUniquePatientArgs";
import { GroupByPatientArgs } from "./args/GroupByPatientArgs";
import { UpdateManyPatientArgs } from "./args/UpdateManyPatientArgs";
import { UpdatePatientArgs } from "./args/UpdatePatientArgs";
import { UpsertPatientArgs } from "./args/UpsertPatientArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Patient } from "../../../models/Patient";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePatient } from "../../outputs/AggregatePatient";
import { PatientGroupBy } from "../../outputs/PatientGroupBy";

@TypeGraphQL.Resolver(_of => Patient)
export class PatientCrudResolver {
  @TypeGraphQL.Query(_returns => Patient, {
    nullable: true
  })
  async patient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Patient, {
    nullable: true
  })
  async findFirstPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Patient], {
    nullable: false
  })
  async patients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPatientArgs): Promise<Patient[]> {
    return getPrismaFromContext(ctx).patient.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: false
  })
  async createPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePatientArgs): Promise<Patient> {
    return getPrismaFromContext(ctx).patient.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyPatientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).patient.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: true
  })
  async deletePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: true
  })
  async updatePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPatientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).patient.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPatientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).patient.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: false
  })
  async upsertPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPatientArgs): Promise<Patient> {
    return getPrismaFromContext(ctx).patient.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePatient, {
    nullable: false
  })
  async aggregatePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePatientArgs): Promise<AggregatePatient> {
    return getPrismaFromContext(ctx).patient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PatientGroupBy], {
    nullable: false
  })
  async groupByPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPatientArgs): Promise<PatientGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).patient.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
