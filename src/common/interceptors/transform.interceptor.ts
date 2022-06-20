import { Injectable, NestInterceptor,CallHandler, ExecutionContext } from "@nestjs/common";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}