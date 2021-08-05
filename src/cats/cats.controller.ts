import { SuccessInterceptor } from './../success.interceptor';
import {
  UseFilters,
  HttpException,
  Param,
  ParseIntPipe,
  PipeTransform,
  UseInterceptors,
} from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.fillter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats/
  @Get()
  getAllCat() {
    console.log('hello Controller');
    return { cats: 'get call cat api ' };
  }

  //cats/id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'get one cat api';
  }

  @Post()
  createCat() {
    return 'get create cat api';
  }

  @Put(':id')
  updateCat() {
    return 'get update cat api';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat api';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
