import { Controller, Get, Post, Put, Param, Body} from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto,FindStudentsResponseDto,StudentsResponseDto} from "./dto/student.dto";
import { StudentService } from './student.service';

import { ParseIntPipe, ParseUUIDPipe } from "@nestjs/common";
@Controller('students')
export class StudentController{
    constructor( private readonly studentService: StudentService){
        console.log('student controller created')
    }
    @Get()
    getStudents() : FindStudentsResponseDto []{
        return  this.studentService.getStudents();
    }
    @Get('/:studentId')
    getStudentById(@Param('studentId',ParseUUIDPipe ) studentId: string): FindStudentsResponseDto{
        
        console.log(studentId)
        return  this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body()  body:CreateStudentDto): StudentsResponseDto{
        console.log(body)
        return this.studentService.createStudent(body);
    }
    @Put('/:studentId')
    UpdateStudentById(@Param('studentId', new ParseUUIDPipe()) studentId:string,
     @Body() body: UpdateStudentDto
     ): StudentsResponseDto
     {
        console.log('student id', studentId, body)
        return  this.studentService.UpdateStudentById( body, studentId);
    }

}


