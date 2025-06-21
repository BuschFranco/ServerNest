import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeMdgService } from './he-mdg.service';

@Controller("/heMdg")
export class HeMdgController {
    constructor(private heMdgService: HeMdgService) {}

    @Get()
    heNumber(@Query("country") country: string) {
        return this.heMdgService.getHeNumber(country);
    }
}
