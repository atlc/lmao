import * as express from "express";
import { ReqUser } from "../../types";
import { isUser } from "../../middlewarez";
import Blogs from "../../database/queries/blogs";
import { v4 as uuid_lmao } from "uuid";

const router = express.Router();

router.post("/", isUser, async (req: ReqUser, res) => {
    try {
        const { content } = req.body;
        const id = uuid_lmao();
        await Blogs.create({ id, user_id: req.user!.id, content });
        res.json({ message: "Nice", id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

router.get("/", async (req, res) => {
    try {
        const blogs = await Blogs.getAll();
        const previews = blogs.map(blog => ({ ...blog, content: blog.content.substring(0, 50) }));
        res.json(previews);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

router.get("/:id", isUser, async (req, res) => {
    try {
        const { id } = req.params;
        const [blog] = await Blogs.getBlog(id);
        res.json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

router.put("/:id", isUser, async (req: ReqUser, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        await Blogs.update(id, content, req.user!.id);
        res.json({ message: "Nice!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

router.delete("/:id", isUser, async (req: ReqUser, res) => {
    try {
        const { id } = req.params;
        await Blogs.destroy(id, req.user!.id);
        res.json({ message: "Nice!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!" });
    }
});

export default router;
