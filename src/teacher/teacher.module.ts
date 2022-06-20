import { Module } from '@nestjs/common';
import {TeacherController} from './teacher.controller'
import {TeacherService} from './teacher.service'
import { StudentTeacherController } from './student.controller';
import { StudentModule } from '../student/student.module';
@Module({
    imports: [StudentModule],
    controllers : [TeacherController,StudentTeacherController],
    providers : [TeacherService],
    exports : [TeacherService],
})
export class TeacherModule {}
