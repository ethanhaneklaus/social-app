const express = require("express");
const router = express.Router();
const { add, remove, getAll } = require("../models/comments.model");
const auth = require("../middleware/auth.middleware");

//! Add - PUT
router.put("/add", auth, async (req, res) => {
    //! Verify the data they gave you is valid
    const comment = req.body;
    if (
        !comment.id ||
        !comment.comment ||
        !comment.user_id
    ) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    const resObj = await add({ ...comment, user_id: req.comments.id });

    return res.send(resObj);
});

//! Delete - DELETE
router.delete("/delete/comments/:id", auth, async (req, res) => {
    const comments_id = req.params.comments_id;
    const resObj = await remove(comments_id, req.comments.id);

    return res.send(resObj);
});

//! Get by user_id - GET
router.get("/user", auth, async (req, res) => {
    const resObj = await getByUser(req.comments.id);

    return res.send(resObj);
});

//! Get by user_id - GET
router.get("/all", async (req, res) => {
    const resObj = await getAll();

    return res.send(resObj);
});

module.exports = router;