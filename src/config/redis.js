import { createClient } from 'redis';

export const client = createClient();

const redis = async() => {
        await client.connect();
        console.log('client connection established......');
    
    
}
export default redis;