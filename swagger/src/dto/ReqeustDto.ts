import { ApiProperty } from "@nestjs/swagger";

export class RequestDto {
  @ApiProperty({ 
    description: 'The name of a Goose',
    type: String
  })
  name: string;

  @ApiProperty({
    description: 'The age of a Goose',
    minimum: 1,
    default: 1,
    type: Number
  })
  age: number;
}