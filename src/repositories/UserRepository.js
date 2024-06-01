const { db } = require('../configs/firebaseConfig.js');
const dataUtil = require('../utils/DataUtil')
var bcrypt = require('bcrypt');

const { getCreateUserResponseDTO, getUpdateUserResponseDTO } = require('../models/UserModel');

const getUsers = async (callback) => {
    try {
        const snapshot = await db.collection('users').get();
        const data = [];
        if (snapshot.docs.length > 0) {
            snapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });
            });
        }
        return callback(null, data);
    } catch (error) {
        throw error;
    }
};

// const getUserById = (id, callback) => {

//     query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//         if (error) {
//             return callback(error);
//         }
//         return callback(null, results.rows);
//     })
// };

// async function getMultiple(page = 1) {
//     const offset = helper.getOffset(page, config.listPerPage);
//     const rows = await db.query(
//         `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank
//       FROM programming_languages LIMIT ${offset},${config.listPerPage}`
//     );
//     const data = helper.emptyOrRows(rows);
//     const meta = { page };

//     return {
//         data,
//         meta
//     }
// }


// async function getUserByEmail(params, callback) {
//     const { email } = params;
//     try {
//         const rows = await db.query(
//             `SELECT * FROM users WHERE email = '${email}'`
//         );
//         const data = dataUtil.emptyOrRows(rows);
//         return {
//             data,
//         }
//     }
//     catch (error) {
//         throw error;
//     }

// }

const createUser = async (params, callback) => {
    const { name, email } = params

    try {
        db.collection('users').add({
            name: name,
            email: email
        })

        const data = getCreateUserResponseDTO(params);

        return {
            data,
        }

    }
    catch (error) {
        throw error;
    }
}

const updateUser = async (id, userData, callback) => {
    const { name, email } = userData

    try {
        db.collection('users').doc(id).set({
            name: name,
            email: email
        })

        const data = getUpdateUserResponseDTO(userData);

        return {
            data,
        }

    }
    catch (error) {
        throw error;
    }
}

// const deleteUser = (id, callback) => {
//     query('DELETE FROM users WHERE id = $1 RETURNING id', [id], (error, results) => {
//         if (error) {
//             return callback(error);
//         }
//         if (results.rowCount === 1 && results.rows[0].id) {
//             return callback(null, { id: results.rows[0].id });
//         } else {
//             return callback(new Error('Failed to delete user'));
//         }
//     })
// }

module.exports = {
    getUsers,
    // getUserById,
    // getUserByEmail,
    createUser,
    updateUser,
    // deleteUser,
}