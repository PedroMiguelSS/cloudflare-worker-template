import { Router } from 'itty-router';

import NotFound from './handlers/not-found';
import HelloWorld from './handlers/hello-world';

const router = Router();

router.get('/api/hello-world', HelloWorld).get('*', NotFound);

const worker = {
    fetch: router.handle
};

export default worker;
