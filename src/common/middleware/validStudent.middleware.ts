import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    use(req:Request, res:Response, next:NextFunction){
        console.log('ValidStudentMiddleware was called')
        const studentId = req.params.studentId;
        const myStudent = students.some(
            student =>{
                return student.id === studentId;
            }
        );
        if(!myStudent){
            throw new HttpException("Student not found!!", 400);
        }
          next();
    }

}