import { contextBridge, ipcRenderer } from 'electron';
// Trong một file .d.ts hoặc một file TypeScript khác
declare global {
  interface Window {
    ipc: {
      send(channel: string, data?: any): void;
      receive(channel: string, func: (...args: any[]) => void): void;
    };
  }
}
