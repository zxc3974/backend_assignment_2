import { sampleTickets, HealthCheckResponse } from "../../../data/example_data.js";

export function healthCheck(): HealthCheckResponse{
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

export function getSpecificTickets(){
    return {
        message: "Ticket urgency calculated",
        data: 
    }
}