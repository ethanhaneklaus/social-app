const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.middleware");
const router = express.Router();
const { register, login } = require("../models/users.model");

router.get("/verify", auth, (req, res) => {
    return res.send({
        success: true,
        data: { id: req.user.id, username: req.user.username },
        error: null
    });
});

router.get("/logout", (req, res) => {
    res.clearCookie("jwt");

    return res.send({ success: true, data: null, error: null })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    if (!verifyData(username, password)) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }

    const resObj = await login(username, password);
    if (resObj.success) {
        const user = resObj.data;
        //TODO Sign a jwt that expires in 2 days with that user obj
        const token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: "2 days",
        });
        //TODO Add the jwt to an httpOnly cookie called "jwt"
        res.cookie("jwt", token, { httpOnly: true })

    }

    res.send(resObj);
});


router.put("/register", async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (!verifyData(username, password)) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }

    const resObj = await register(username, password);
    console.log(resObj);
    res.send(resObj);
});

function verifyData(username, password) {

    if (!username || username.length < 4 || username.length > 20) {
        return false;
    }

    if (!password || password.length < 5 || password.length > 20) {
        return false;
    }
    return true;
}

module.exports = router;