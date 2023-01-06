import { RequestListener } from 'node:http';
import { S as Storage } from './types-227df1cc.js';

interface StorageServerOptions {
}
interface StorageServer {
    handle: RequestListener;
}
declare function createStorageServer(storage: Storage, _options?: StorageServerOptions): StorageServer;

export { StorageServer, StorageServerOptions, createStorageServer };
