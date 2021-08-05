import { Injectable, PipeTransform, HttpException } from '@nestjs/common';

//custom pipe pattern -> task 따라서 쭊쭊쭊 절차지향하듯 로직이 실행됨.
@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    console.log(value);
    if (value < 0) {
      throw new HttpException('value > 0', 400);
    }
    return value;
  }
}
