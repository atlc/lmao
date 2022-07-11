import { Request } from "express";

export interface BaseUser {
    id: string;
    password: string;
    email: string;
}

export interface Blog {
    id: string;
    content: string;
    user_id: User["id"];
}

export interface NewUser extends BaseUser {}

export interface User extends BaseUser {
    roles: string[];
}

export interface Payload {
    id: string;
    roles: string[];
}

export interface ReqUser extends Request {
    stromboli?: string;
    user?: Payload;
}
