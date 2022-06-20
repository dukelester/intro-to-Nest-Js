import { MiddlewareConsumer, Module, NestModule,RequestMethod } from '@nestjs/common';
import {StudentController} from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from '../common/middleware/validStudent.middleware';

@Module({
    imports : [],
    controllers :[StudentController],
    providers :[StudentService],
    exports :[StudentService],


})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(ValidStudentMiddleware).forRoutes(
            {path : 'students/:studentId',method: RequestMethod.GET}
        );
        consumer.apply(ValidStudentMiddleware).forRoutes(
            {path : 'students/:studentId',method: RequestMethod.PUT}
        )
    }

}
