export interface TicketRequest {
  description: string;
}

export interface Classification {
  category: string;
  priority: string;
}

export interface TicketResponse {
  classification: Classification;
  knowledge: string;
  reply: string;
}

export interface Ticket {
  id: number;
  description: string;
  category: string;
  priority: string;
  status: string;
  created_at?: string;
}