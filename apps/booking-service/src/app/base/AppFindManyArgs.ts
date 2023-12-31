/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppWhereInput } from "./AppWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AppOrderByInput } from "./AppOrderByInput";

@ArgsType()
class AppFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AppWhereInput, { nullable: true })
  @Type(() => AppWhereInput)
  where?: AppWhereInput;

  @ApiProperty({
    required: false,
    type: [AppOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AppOrderByInput], { nullable: true })
  @Type(() => AppOrderByInput)
  orderBy?: Array<AppOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AppFindManyArgs as AppFindManyArgs };
