import { IsString, IsEmail, IsNumber} from 'class-validator'

export class UserDTO{

    @IsString()
    name:string  
    
    @IsEmail()
    email:string 
    
    @IsNumber()
    age:number
}