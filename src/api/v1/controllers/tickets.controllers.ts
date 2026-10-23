import { Response, Request } from "express";
import { createTickets, getSpecificTickets, getTickets, healthCheck } from "../services/tickets.services.js";
import { HTTP_STATUS } from "../../../constants/http_status.js";

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

export function postCreateTickets(req: Request, res: Response) {

    const { title, description, priority } = req.body

    const PRIORITIES = ["critical", "high", "medium", "low"] as const

    if (!title) {
        return res.json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: "Missing required field: title"
        })
    } else if (!description) {
        return res.json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: "Missing required field: description"
        })
    } else if (!PRIORITIES.includes(priority)) {
        return res.json({
            status: HTTP_STATUS.BAD_REQUEST,
            message: "Invalid priority. Must be one of: critical, high, medium, low"
        })
    }

    const newTicket = createTickets(req.body)
    if (newTicket) {
        return res.json({
            message: "success"
        })
    }

}