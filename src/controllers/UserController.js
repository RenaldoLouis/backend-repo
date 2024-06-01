const UserService = require('../services/UserService.js');
const helper = require('../utils/DataUtil.js');
const { validationResult } = require('express-validator');
var bcrypt = require('bcrypt');
const saltRounds = 10;

async function getUsers(req, res, next) {
    try {
        const users = await UserService.getUsers(req, next)
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(204).json(users);
        }
    } catch (err) {
        next(err);
    }
}

// async function getUserById(req, res, next) {
//     try {
//         const users = await UserService.getByUserId(req, next)

//         if (users.length > 0) {
//             res.status(200).json(users);
//         } else {
//             res.status(201).json(users);
//         }
//     } catch (err) {
//         next(err);
//     }
// }

// async function login(req, res, next) {
//     try {
//         const errorValidation = validationResult(req);
//         if (errorValidation.errors.length > 0) {
//             errorValidation.errors[0].statusCode = 400;
//             return next(errorValidation.errors[0]);
//         }

//         const user = await UserService.getByUserEmail(req, next)
//         if (!user.length > 0) {
//             return res.status(201).json({ message: "user does not exist" });
//         }

//         const result = await new Promise((resolve, reject) => {
//             bcrypt.compare(req.body.password, user[0].password, function (err, result) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });

//         if (result === true) {
//             res.status(200).send({ message: "loggin success" })
//         } else {
//             res.status(401).send({ message: "wrong email or password" })
//         }
//     } catch (err) {
//         next(err);
//     }
// }

async function create(req, res, next) {
    try {
        const errorValidation = validationResult(req);
        if (errorValidation.errors.length > 0) {
            errorValidation.errors[0].statusCode = 400;
            return next(errorValidation.errors[0]);
        }

        const user = await UserService.createUser(req, next)
        res.status(200).send(user)
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const errorValidation = validationResult(req);
        if (errorValidation.errors.length > 0) {
            errorValidation.errors[0].statusCode = 400;
            return next(errorValidation.errors[0]);
        }

        const users = await UserService.updateUser(req, next)
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
    // getUserById,
    create,
    // register,
    update,
    // login
};