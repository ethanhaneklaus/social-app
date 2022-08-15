const express = require("express");
const router = express.Router();
const { add, remove, getAll } = require("../models/replies.model");
const auth = require("../middleware/auth.middleware");

//! Add - PUT
router.put("/add", auth, async (req, res) => {
    //! Verify the data they gave you is valid
    const reply = req.body;
    if (
        !reply.id ||
        !reply.comment ||
        !reply.comment_id
    ) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    const resObj = await add({ ...comment, comment: req.replies.id });

    return res.send(resObj);
});

//! Delete - DELETE
router.delete("/delete/replies/:id", auth, async (req, res) => {
    const id = req.params.id;
    const resObj = await remove(id, req.user.id);

    return res.send(resObj);
});

//! Get by user_id - GET
router.get("/user", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);

    return res.send(resObj);
});

//! Get by user_id - GET
router.get("/all", async (req, res) => {
    const resObj = await getAll();

    return res.send(resObj);
});

module.exports = router;