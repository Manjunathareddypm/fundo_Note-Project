import { createClient } from 'redis';

export const client = createClient();

const redis = async() => {
        await client.connect();
        console.log('redis client successfully ');    
    
}
export default redis;