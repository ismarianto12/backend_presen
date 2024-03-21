import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize-typescript';
@Controller('login')

export class LoginController {
    constructor(private readonly sequelize: Sequelize) { }
    @Post("/register")
    Register(@Req() req: Request, @Res() res: Response) {
        const { username, pasword } = req.body;
        res.json({
            'payload': req.body
        })
    }
    @Post("/forgotpassword")
    async forgotPassword(@Req() req: Request, @Res() res: Response): Promise<any> {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({
                status: 'Data tidak boleh kosong'
            });
            return;
        }
        try {
            const data = await this.sequelize.query('SELECT * FROM users WHERE email = ?', {
                type: 'SELECT',
                replacements: [email], // Use an array for replacements
            });

            if (data?.length > 0) {
                res.json({
                    payload: data
                });
                return;
            } else {
                res.status(404).json({
                    status: 'User tidak ditemukan'
                });
                return;
            }

        } catch (error) {
            console.error('Gagal melakukan query:', error);
            res.status(500).json({
                msg: error,
                status: 'Gagal melakukan query'
            });
        }
    }
    @Post("/auth")
    async Login(@Req() req: Request, @Res() res: Response): Promise<any> {
        try {
            const username = req.body.username;
            const password = req.body.password;

            const data = await this.sequelize.query('SELECT * FROM users WHERE email = ?', {
                type: 'SELECT',
                replacements: [username], // Use an array for replacements
            });
            if (data?.length > 0) {
                res.json({
                    payload: data
                });
                return;
            } else {
                res.status(404).json({
                    status: 'User tidak ditemukan'
                });
                return;
            }

        } catch (error) {
            res.json({
                'message': error.getMessage(),
            })
        }

    }

}
