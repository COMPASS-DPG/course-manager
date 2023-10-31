import { ApiProperty } from "@nestjs/swagger";
import { CourseStatus, CourseVerificationStatus } from "@prisma/client";
import { IsArray, IsDate, IsInt, IsJSON, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class AddCourseDto {

    // course title
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    // description
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    // link for the course content
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    courseLink: string;

    // course image
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    imgLink: string;

    // number of credits required to purchase course
    @ApiProperty()
    @IsNotEmpty()
    @Min(0)
    @IsInt()
    credits: number;

    // Number of lessons
    @ApiProperty()
    @IsInt()
    @IsOptional()
    noOfLessons?: number;

    // language
    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    language: string[];

    // course duration
    @ApiProperty()
    @IsNotEmpty()
    @Min(0)
    @IsInt()
    duration: number;

    // competency
    @ApiProperty()
    @IsNotEmpty()
    competency: any[];

    // author
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    author: string;

    // course status (active/inactive/archived)
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: CourseStatus;

    // course availability time
    @ApiProperty()
    @IsDate()
    @IsOptional()
    availabilityTime?: Date;
}

export class AddCourseResponseDto extends AddCourseDto {

    // course ID
    readonly id: number;

    // course provider ID
    readonly providerId: number;

    // Average rating
    readonly avgRating: number;

    // Course Verification Status (pending/accepted/rejected)
    readonly verificationStatus: CourseVerificationStatus;
}