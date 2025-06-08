import { Request, Response } from 'express';
import { ListAttendancesService } from '../../services/attendances/ListAttendancesService';

class ListAttendancesController {
    async handle(req: Request, res: Response) {
        const listAttendancesService = new ListAttendancesService();
        try {
            const attendances = await listAttendancesService.execute();
             res.json(attendances);
        } catch (error) {
             res.status(500).json({ error: 'Erro ao listar atendimentos.' });
        }
    }
}

export { ListAttendancesController };