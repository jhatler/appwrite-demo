import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://127.0.0.1/v1')
    .setProject('67058a65002a49223888');

export const account = new Account(client);
export { ID } from 'appwrite';
