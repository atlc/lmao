import { Query } from "..";
import { Blog } from "../../types";

const ADMIN_DESTROY = (id: Blog["id"]) => Query("DELETE FROM Blogs WHERE id=?", [id]);

export default {
    ADMIN_DESTROY
};
