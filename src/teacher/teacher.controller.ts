import { Controller, Get, Post, Param, Body, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import {AllTeachersResponseDto, CreateTeacherDto,TeachersResponseDto} from './dto/teachers.dto'
import { TeacherService } from './teacher.service';


@Controller('teachers')
export class TeacherController {
    constructor(private teacherService: TeacherService ){
        console.log('teacher controller created')
    }
    @Get()
    getTeachers(): AllTeachersResponseDto []{
        return  this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId', new ParseUUIDPipe()) teacherId:string): TeachersResponseDto{
        console.log(teacherId)
        return this.teacherService.getTeacherById(teacherId);
    }
   
    @Post()
    createTeacher(@Body(new ValidationPipe()) body :CreateTeacherDto ):TeachersResponseDto{
        console.log('added a teacher with the following details', body)
        return  this.teacherService.createTeacher(body);
    }
}
