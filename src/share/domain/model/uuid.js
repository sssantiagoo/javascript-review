import { v7 as uuidv7, validate as uuidValidate } from 'uuid';

export function generateUUID(): string {
    return uuidv7();
}

export function isValidUUID(uuid):boolean  {
    return uuidValidate(uuid);
}