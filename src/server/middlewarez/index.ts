import { Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { jwt_config } from "../config";
import { Payload, ReqUser } from "../types";

export const isAdmin = (req: ReqUser, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]!;
        const tokenInfo = jwt.verify(token, jwt_config.secret) as Payload;

        if (tokenInfo.roles.includes("admin")) {
            req.stromboli = "lmao";
            req.user = tokenInfo;
            next();
        } else {
            res.status(403).json({ message: "YOU ARE NOT AUTHORIZED, USER #" + tokenInfo.id });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};

export const isUser = (req: ReqUser, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]!;
        const tokenInfo = jwt.verify(token, jwt_config.secret) as Payload;

        if (tokenInfo.roles.includes("user")) {
            req.stromboli = "lmao";
            req.user = tokenInfo;
            next();
        } else {
            res.status(403).json({ message: "YOU ARE NOT AUTHORIZED, USER #" + tokenInfo.id });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};
