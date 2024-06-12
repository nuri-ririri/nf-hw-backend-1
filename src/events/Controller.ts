import {Request, Response} from "express";

export interface Controller {
    getEventsByCity(req: Request, res: Response): Promise<void>;
    createEvent(req: Request, res: Response): Promise<void>;
    getEventById(req: Request, res: Response): Promise<void>;
    getEvents(req: Request, res: Response): Promise<void>;
}