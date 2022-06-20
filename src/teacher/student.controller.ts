import { Controller, Get, Put, Param , ParseUUIDPipe } from '@nestjs/common';
import { FindStudentsResponseDto, StudentsResponseDto } from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('/:teacherId/students')
export class StudentTeacherController {

    constructor (private readonly studentTeacher: StudentService){
        console.log('student teacher controller created')
    }
    @Get()
    getStudentsByTeacherId(@Param('teacherId', new ParseUUIDPipe()) teacherId:string): FindStudentsResponseDto[]{
        console.log(teacherId, 'studenst for this teacher')
        return this.studentTeacher.getStudentsByTeacherId(teacherId);
    }
    
    @Put('/:studentId')
    UpdateStudentTeacherById(
        @Param('studentId', new ParseUUIDPipe()) studentId:string,
        @Param('teacherId', new ParseUUIDPipe()) teacherId:string

    ):StudentsResponseDto{
        return  this.studentTeacher.UpdateStudentTeacherById(studentId, teacherId);
    }

    
}