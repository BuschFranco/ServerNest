import { Injectable } from '@nestjs/common';

@Injectable()
export class HeMdgService {

    getHeNumber(country: string) {
        if(country == "ARG"){
            return 1134412551;
        }else{
            return "Country not found"; 
        }
        
    }

}
