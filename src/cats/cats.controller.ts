import { UseFilters, HttpException, Param, ParseIntPipe } from '@nestjs/common';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.fillter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats/
  @Get()
  getAllCat() {
    throw new HttpException('this expection', 401);
    //return 'get all cat api';
  }

  //cats/id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
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
