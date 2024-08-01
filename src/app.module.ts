import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { LoggerMiddleware } from './users/logger/logger.middleware';
import { AuthMiddleware } from './users/auth/auth.middleware';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, HelloModule, PaymentsModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.GET },
      { path: '/users', method: RequestMethod.POST }
    ).apply(AuthMiddleware).forRoutes('users')
  }
}
