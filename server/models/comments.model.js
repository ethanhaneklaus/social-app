const query = require("../config/database.config");

async function add(comments) {
    try {
        //! Add it to the database
        let { insertId } = await query(
            "INSERT INTO comments (id, comment, user_id ) VALUES (?,?,?)",
            [comments.id, comments.comment, comments.user_id]
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
        await query("DELETE FROM comments WHERE comments.id = ?", [id]);
        //! send back a response (error or success)
        return { success: true, data: "Successfully Deleted Comment", error: null };
    } catch (err) {
        return { success: false, data: null, error: "Delete Comment Unsuccessful" };
    }
}

async function getAll() {
    try {
        //! Get the favorites for that user
        const comments = await query("SELECT FROM comments");
        //! send back a response (error or success)
        return { success: true, data: comments, error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}

module.exports.add = add;
module.exports.remove = remove;
module.exports.getAll = getAll;