import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
  });

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('cat', 'meow');
const value = await client.get('cat');

console.log(`got ${value} from redis`)

await client.disconnect();