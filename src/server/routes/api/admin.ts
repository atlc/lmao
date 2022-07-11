import * as express from "express";
import DANGEROUS_ADMIN_QUERIES from "../../database/queries/admin";

const router = express.Router();

router.delete("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await DANGEROUS_ADMIN_QUERIES.ADMIN_DESTROY(id);
        res.json({ message: "OVERRULED!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!", error: error.message });
    }
});

router.get("/pizzas", async (req, res) => {
    try {
        const pizzas = ["cheese", "pepperoni", "veggie", "supreme"];
        res.json(pizzas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!", error: error.message });
    }
});

router.get("/pastas", async (req, res) => {
    try {
        const pastas = ["spaghetti", "vermicelli", "rotini", "farfalle"];
        res.json(pastas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Uh oh!", error: error.message });
    }
});

export default router;
