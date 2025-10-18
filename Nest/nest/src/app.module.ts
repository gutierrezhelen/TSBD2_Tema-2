import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AppController } from './app.controller';

@Module({
  imports: [StudentModule, CourseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}