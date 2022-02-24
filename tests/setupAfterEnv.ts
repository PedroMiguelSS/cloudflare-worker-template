import makeServiceWorkerEnv from 'service-worker-mock';

Object.assign(global, makeServiceWorkerEnv());
