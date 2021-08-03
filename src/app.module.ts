import { MiddlewareConsumer } from '@nestjs/common';
import { NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
// loggerMiddleware는 provider 의존성 주입 가능..
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes가 '*'일 경우 전체 엔드포인트에서 실행
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
