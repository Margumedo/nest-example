import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)

    const ageNumber = parseInt(value.age.toString(), 10)
    console.log(ageNumber)

    if (isNaN(ageNumber)) {
      throw new HttpException('Age should be a number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ageNumber };
  }
}
