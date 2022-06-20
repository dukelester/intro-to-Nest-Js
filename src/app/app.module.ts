import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule} from '../teacher/teacher.module';
@Module({
  imports: [StudentModule,TeacherModule],
  // controllers:[StudentController, StudentTeacherController],
  // providers:[StudentService, TeacherService],
  // exports:[StudentService, TeacherService],
})
export class AppModule {}
