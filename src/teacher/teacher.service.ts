import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import {AllTeachersResponseDto,TeachersResponseDto,CreateTeacherDto} from './dto/teachers.dto'
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeacherService {
    private teachers = teachers
    getTeachers(): AllTeachersResponseDto []{
        return this.teachers

    }

    getTeacherById(teacherId: string):TeachersResponseDto{
        return this.teachers.find(
            teacher => teacher.id === teacherId

        )

    }

    createTeacher(payload:CreateTeacherDto):TeachersResponseDto{
        let newTeacher = {
            id: uuid(),
            ...payload
        }
        this.teachers.push(newTeacher);
        return newTeacher
    }
}
