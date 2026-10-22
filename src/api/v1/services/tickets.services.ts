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

    const ticketAge = (new Date("2025-01-15T10:00:00.000Z").getTime() - new Date(targetRecord.createdAt).getTime()) / (24 * 60 * 60 * 1000)
    const urgencyScore = ticketAge * 5 + getBaseScore(targetRecord.priority)

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

    function getUrgencyLevel(urgencyScore: number) {
        if (urgencyScore === 0) {
            return "Minimal. Ticket resolved."
        } else if (urgencyScore <= 25) {
            return "Low urgency, Address when capacity allows."
        } else if (urgencyScore < 50) {
            return "Moderate. Schedule for attention."
        } else if (urgencyScore < 80) {
            return "High urgency. Prioritize resolution."
        } else {
            return "Critical. Immediate attention required."
        }

    }

    const ticketUrgency: TicketUrgency = {
        message: "Ticket urgency calculated",
        data: {
            title: targetRecord.title,
            priority: targetRecord.priority,
            status: targetRecord.status,
            createdAt: targetRecord.createdAt,
            ticketAge: ticketAge,
            urgencyScore: urgencyScore,
            urgencyLevel: getUrgencyLevel(urgencyScore)
        }
    }

    return ticketUrgency






}

getSpecificTickets(1)