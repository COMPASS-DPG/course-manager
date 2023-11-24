import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsInt, IsOptional, IsString, IsUrl, Min } from "class-validator";
import { CompetencyMap } from "src/utils/types";

export class EditCourseDto {

    // course title
    @ApiProperty()
    @IsString()
    @IsOptional()
    title?: string;

    // description
    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    // link for the course content
    @ApiProperty()
    @IsUrl()
    @IsOptional()
    courseLink?: string;

    // course image
    @ApiProperty()
    @IsUrl()
    @IsOptional()
    imgLink?: string;

    // number of credits required to purchase course
    @ApiProperty()
    @Min(0)
    @IsInt()
    @IsOptional()
    credits?: number;

    // Number of lessons
    @ApiProperty()
    @IsInt()
    @IsOptional()
    noOfLessons?: number;

    // language
    @ApiProperty()
    @IsArray()
    @IsOptional()
    language?: string[];

    // course duration
    @ApiProperty()
    @Min(0)
    @IsInt()
    @IsOptional()
    duration?: number;

    // competency
    @ApiProperty()
    @IsOptional()
    competency?: CompetencyMap;

    // author
    @ApiProperty()
    @IsString()
    @IsOptional()
    author?: string;

    // course availability time
    @ApiProperty()
    @IsDate()
    @IsOptional()
    availabilityTime?: Date;
}