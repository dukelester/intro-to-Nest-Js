import { Controller, Get, Post, Put, Param, Body, UseGuards} from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto,FindStudentsResponseDto,StudentsResponseDto} from "./dto/student.dto";
import { StudentService } from './student.service';
import { TestGuard} from '../common/guards/test.guard';
import { ParseIntPipe, ParseUUIDPipe, SetMetadata } from "@nestjs/common";
import { Test } from '@nestjs/testing';


@Controller('students')
// @UseGuards(TestGuard) 
@UseGuards(TestGuard) //using the instance of the guards
export class StudentController{
    constructor( private readonly studentService: StudentService){
        console.log('student controller created')
    }
    @Get()
    getStudents() : FindStudentsResponseDto []{
        return  this.studentService.getStudents();
    }
    @Get('/:studentId')
    @SetMetadata('roles', ['admin',])
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


