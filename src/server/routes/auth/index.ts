import * as express from "express";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import db_users from "../../database/queries/users";
import { jwt_config } from "../../config";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const id = uuid();

        const hashed = bcrypt.hashSync(password, 12);

        await db_users.create({ id, email, password: hashed });

        res.status(201).json({ message: "User created successfully!", id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const [user] = await db_users.getByEmail(email);

        if (!user) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const matched = bcrypt.compareSync(password, user.password);

        if (matched) {
            const token = jwt.sign({ id: user.id, roles: user.roles }, jwt_config.secret, { expiresIn: jwt_config.expiration });
            res.json({ message: "Nice :) ", token });
        } else {
            res.json({ message: "NOT NICE" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

export default router;
