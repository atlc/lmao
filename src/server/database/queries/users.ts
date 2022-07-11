import { Query } from "..";
import { NewUser, User } from "../../types";

const getByEmail = (email: string) => Query<User[]>("SELECT * FROM Users WHERE email=?", [email]);
const create = (newUser: NewUser) => Query("INSERT INTO Users SET ?", [newUser]);

export default {
    getByEmail,
    create
};
