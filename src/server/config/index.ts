import * as dotenv from "dotenv";

dotenv.config();

export const dee_bee_config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

export const jwt_config = {
    secret: process.env.JWT_SECRET_LMAO!,
    expiration: process.env.JWT_EXPIRATION!
};
