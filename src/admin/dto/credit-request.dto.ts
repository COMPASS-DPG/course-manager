import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreditRequest {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly providerId: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly credits: number
}