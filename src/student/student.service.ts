import { Injectable } from "@nestjs/common";
import { students } from '../db';
import { FindStudentsResponseDto, CreateStudentDto, StudentsResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid} from 'uuid'

@Injectable()
export class StudentService{
    private students = students
    getStudents(): FindStudentsResponseDto[]{
        return this.students

    }
    getStudentById(studentId : string) : FindStudentsResponseDto{
        return this.students.find( student =>{
            return studentId === student.id
        })
    }

    createStudent( payload: CreateStudentDto): StudentsResponseDto{
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent)
        return newStudent
    }

    UpdateStudentById(payload:UpdateStudentDto, studentId: string): StudentsResponseDto{
        let updatedStudent :StudentsResponseDto;
        const updatedStudentList = this.students.map(
            student =>{
                if(student.id === studentId){
                    updatedStudent = {
                        id: studentId,
                        ...payload
                    }
                    return updatedStudent
                }else return student
            }
        );
        this.students = updatedStudentList;
        return updatedStudent;

    }

    getStudentsByTeacherId( teacherId:string):FindStudentsResponseDto []{
        return this.students.filter(
            student => {
                return student.teacher === teacherId
            }
        )
    }
    UpdateStudentTeacherById( studentId:string, teacherId:string): StudentsResponseDto{
        let updatedStudent :StudentsResponseDto;
        const updatedStudentList = this.students.map(
            student =>{
                if(student.id === studentId){
                    updatedStudent = {
                        ...student,
                        teacher : teacherId
                    }
                    return updatedStudent
                }else return student
            }
        );
        this.students = updatedStudentList;
        return updatedStudent;
    }
       

    
}