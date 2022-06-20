import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";

@Injectable()
export class TestGuard implements CanActivate{

    constructor(private reflector: Reflector ){}
    canActivate(context: ExecutionContext): boolean {
        console.log('Using a test guard success')
        const roles = this.reflector.get('roles', context.getHandler());
        if(! roles){
            return true
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user
        console.log('User is ', user)
        return  user
        
    }
   
}