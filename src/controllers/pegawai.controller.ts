import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Pegawai } from 'src/models/Pegawai';
import { PegawaiService } from 'src/service/pegawai.service';

@Controller('pegawai')
export class PegawaiController {
    constructor(
        private readonly pegawaiservice: PegawaiService
    ) { }
    @Get("list")
    async listData(@Req() req: Request, @Res() res: Response): Promise<any> {
        const { email, total } = req.body
        const data = await this.pegawaiservice.listPegawai(email);
        res.json({
            'data': data
        })
        return
    }
    @Post("/create/pegawai")
    async create(@Body() data: Partial<Pegawai>, @Res() res: Response): Promise<Pegawai> {
        try {
            const param = this.pegawaiservice.Insert(data)
            console.log(param, "parameter")
            res.json({
                messages: "data berhasil disimpan",
            })

        } catch (error) {
            console.log(error)
            res.json({
                messages: error,
            })
        }
        return
    }

    @Post()
    async store(@Req() req: Request, @Res() res: Response): Promise<void> {
        try {
            const {
                cabang_id,
                username,
                name,
                password,
                email,
                tmlevel_id,
                role,
                statuslogin,
                token,
            } = req.body
            const data = await this.pegawaiservice.Create(
                cabang_id,
                username,
                name,
                password,
                email,
                tmlevel_id,
                role,
                statuslogin,
                token
            );
            res.json({
                messages: 'Data berhasil di simpan'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                messages: error
            })
        }
        return;

    }
    @Get("/show/:id")
    async edit(@Param('id') id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
        try {
            const response = await this.pegawaiservice.showData(id);
            res.json({
                data: response,
                msg: 'Data Request Successfully',
            })
        } catch (error) {
            res.status(400).json({
                data: error,
                msg: 'Data Request Successfully',
            })
        }
        return
    }
    @Put('/update/:id')
    update(@Body("id") id: number, @Req() req: Request, @Res() res: Response, @Body() data: Partial<Pegawai>): Promise<Pegawai> {
        try {
            console.log(data, "data pamarete")
            const param = this.pegawaiservice.Update(id, data)
            console.log(param, "parameter")
            res.json({
                messages: "data berhasil diupdate",
            })
        } catch (error) {
            console.log(error, "error log access data")
            res.json({
                messages: error,
            })
        }
        return

    }
    @Delete('/delete/:id')
    async destroy(@Param('id') id: number, @Res() res: Response): Promise<any> {
        console.error('Failed to delete user:', id);
        // try {
        const deletedRows = await this.pegawaiservice.Destroy(id);
        console.log(deletedRows, "parameter")
        // if (deletedRows) {
        res.status(HttpStatus.OK).json({ message: 'User deleted successfully' });
        // } else {
        // res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
        // }
        // } catch (error) {
        // console.error('Failed to delete user:', error);
        // res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to delete user' });
        // }
    }

}
