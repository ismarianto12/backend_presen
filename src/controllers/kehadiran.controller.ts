import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize-typescript';
import { PresensiService } from 'src/service/presensi.service';
@Controller('kehadiran')
export class KehadiranController {
    constructor(private readonly presensiService: PresensiService) { }
    @Get("list")
    async listData(@Req() req: Request, @Res() res: Response): Promise<any> {
        const data = await this.presensiService.getAll();
        res.json({
            data: data,
            msg: 'Requst Successfully'
        })
    }
    @Post()
    async store(@Req() req: Request, @Res() res: Response, @Body() body): Promise<void> {
        try {
            const data = await this.presensiService.storedata(body)
            if (data) {
                res.json({
                    msg: "data berhasil disimpan"
                })
            }
        } catch (error) {
            res.json({
                msg: error,
                data: 'error get data'
            })
        }
        return;
    }
    async edit(@Req() req: Request, @Res() res: Response): Promise<void> {
        try {

        } catch (error) {

        }
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
