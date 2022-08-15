const query = require("../config/database.config");

async function add(replies) {
    try {
        //! Add it to the database
        let { insertId } = await query(
            "INSERT INTO replies (id, comment, user_id ) VALUES (?,?,?)",
            [replies.id, replies.comment_ID, replies.comment]
        );
        //! Send back the newly added item (with the auto-generated ID)
        return { success: true, data: insertId, error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}

async function remove(id) {
    try {
        //! remove that one
        await query("DELETE FROM replies WHERE replies.id = ?", [id]);
        //! send back a response (error or success)
        return { success: true, data: "Successfully Deleted Reply", error: null };
    } catch (err) {
        return { success: false, data: null, error: "Delete Reply Unsuccessful" };
    }
}

async function getAll() {
    try {
        //! Get the favorites for that user
        const replies = await query("SELECT FROM replies");
        //! send back a response (error or success)
        return { success: true, data: replies, error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}

module.exports.add = add;
module.exports.remove = remove;
module.exports.getAll = getAll;