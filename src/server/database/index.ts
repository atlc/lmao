import * as mysql from "mysql";
import { dee_bee_config } from "../config";

const pool = mysql.createPool(dee_bee_config);

export const Query = <T = mysql.OkPacket>(sql: string, valz: unknown[]) => {
    return new Promise<T>((resolvah, rejectah) => {
        pool.query(sql, valz, (err, results) => {
            err ? rejectah(err) : resolvah(results);
        });
    });
};
