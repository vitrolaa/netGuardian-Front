import { useState } from 'react';
import Card from '../components/Card';
import StatusBadge from '../components/StatusBadge';
import { Plus, Search, MoreVertical, Server, Monitor, Wifi } from 'lucide-react';
import type { Device } from '../types';

const Inventory = () => {
    const [devices] = useState<Device[]>([]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'server': return <Server size={18} />;
            case 'router':
            case 'switch': return <Wifi size={18} />;
            default: return <Monitor size={18} />;
        }
    };

    return (
        <div className="animate-fade-in">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Inventário</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Gerencie os dispositivos da rede</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={18} />
                    Novo Dispositivo
                </button>
            </header>

            <Card>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{
                        position: 'relative', flex: 1,
                        backgroundColor: 'var(--bg-dark)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border)'
                    }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Buscar por nome ou IP..."
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 2.5rem',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button className="btn btn-outline">Filtros</button>
                </div>


                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Nome</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>IP</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Tipo</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Status</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Último Ping</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.length === 0 && (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                        Nenhum dispositivo cadastrado.
                                    </td>
                                </tr>
                            )}
                            {devices.map((device) => (
                                <tr key={device.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{
                                                padding: '8px', borderRadius: '8px',
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                color: 'var(--text-muted)'
                                            }}>
                                                {getIcon(device.type)}
                                            </div>
                                            <span style={{ fontWeight: 500 }}>{device.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>{device.ip}</td>
                                    <td style={{ padding: '1rem', textTransform: 'capitalize' }}>{device.type}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <StatusBadge status={device.status} />
                                    </td>
                                    <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{device.lastPing}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Inventory;
