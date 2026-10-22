import { sampleTickets, HealthCheckResponse, TicketUrgency } from "../../../data/example_data.js";

export function healthCheck(): HealthCheckResponse {
    return {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    }
}

export function getTickets() {
    return sampleTickets;
}

export function getSpecificTickets(id: number) {
    const targetRecord = sampleTickets.find((ticket) => ticket.id === id)
    console.log(targetRecord)
    if (!targetRecord) {
        return false
    }

    type Priority = 'critical' | 'high' | 'medium' | 'low';

    const ticketAge = new Date(targetRecord.createdAt).getTime() - new Date("2025-01-10T10:00:00.000Z").getTime()

    function getBaseScore(priority: Priority) {
        switch (priority) {
            case "critical":
                return 50
            case "high":
                return 30
            case "medium":
                return 20
            case "low":
                return 10
        }
    }





    const message: string = "fsdf"

    const ticketUrgency: TicketUrgency = {
        message: message,
        data: {
            title: targetRecord.title,
            priority: targetRecord.priority,
            status: targetRecord.status,
            createdAt: targetRecord.createdAt,
            ticketAge: ticketAge,
            urgencyScore: Number(getBaseScore(targetRecord.priority))

        }
    }



    return






}

getSpecificTickets(1)