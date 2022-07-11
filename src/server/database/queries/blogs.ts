import { Query } from "..";
import { Blog } from "../../types";

const getAll = () => Query<Blog[]>("SELECT * FROM Blogs", []);
const getBlog = (id: Blog["id"]) => Query<Blog[]>("SELECT * FROM Blogs WHERE id=?", [id]);
const create = (newBlog: Blog) => Query("INSERT INTO Blogs SET ?", [newBlog]);
const destroy = (id: Blog["id"], user_id: Blog["user_id"]) => Query("DELETE FROM Blogs WHERE id=? AND user_id=?", [id, user_id]);
const update = (id: Blog["id"], content: string, user_id: Blog["user_id"]) => Query("UPDATE Blogs SET content=? WHERE id=? AND user_id=?", [content, id, user_id]);

export default {
    create,
    getAll,
    getBlog,
    destroy,
    update
};
