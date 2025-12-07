export interface Device {
    id: string;
    name: string;
    ip: string;
    type: 'server' | 'router' | 'switch' | 'workstation' | 'printer' | 'other';
    status: 'online' | 'offline' | 'warning';
    lastPing?: string;
}

export interface Log {
    id: string;
    deviceId: string;
    deviceName: string;
    timestamp: string;
    status: 'success' | 'failure';
    latency: number;
}
