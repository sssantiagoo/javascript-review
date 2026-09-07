import { v7 as uuidv7, validate as uuidValidate } from 'uuid';

export function generateUuid(): string {
    return uuidv7();
}

export function validateUuid(uuid):boolean  {
    return uuidValidate(uuid);
}