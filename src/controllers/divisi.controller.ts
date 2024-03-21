import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DivisiService } from 'src/service/divisi.service';
@Controller('divisi')
export class DivisiController {
    constructor(
        private readonly divisiservice: DivisiService
    ) { }
    @Get("list")
    async listData(@Req() req: Request, @Res() res: Response): Promise<void> {
        const data = this.divisiservice.getDivisiAll();
        await res.json({
            'data': data
        })
        return
    }
    @Post()
    store(@Req() req: Request, @Res() res: Response): Promise<void> {
        const { perpage, total } = req.body
        return;
    }
    edit(@Req() req: Request, @Res() res: Response): Promise<void> {
        const { perpage, total } = req.body
        return;
    }
    update(@Req() req: Request, @Res() res: Response): Promise<void> {
        const { perpage, total } = req.body
        return;
    }
    destroy(@Req() req: Request, @Res() res: Response): Promise<void> {
        const { perpage, total } = req.body
        return;
    }

}
