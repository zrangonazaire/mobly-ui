export interface AuditLog {
    id: number;
    timestamp: Date;
    userId: number;
    username: string;
    action: string;
    details: string;
    ipAddress: string;
    userAgent?: string;
  }