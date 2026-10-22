import { Response, Request } from "express";
import { getSpecificTickets, getTickets, healthCheck } from "../services/tickets.services.js";
import { count } from "node:console";


export function healthCheckController(req: Request, res: Response) {
    res.json(healthCheck())
}


export function getTicketsController(req: Request, res: Response) {
    const tickets = getTickets();
    res.json({
        status: "OK",
        count: tickets.length,
        data: tickets
    });
}

export function getSpecificTicketsController(req: Request, res: Response) {
    const result = getSpecificTickets(Number(req.params.id))
    if (result) {
        res.json(getSpecificTickets(Number(req.params.id)))
    } else {
        return res.json({
            message: "Ticket not found."
        })
    }
    
}