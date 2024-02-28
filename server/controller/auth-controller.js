const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome back by router");
    } catch (error) {
        console.log("error");
    }
}

// registration part (sign up)

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "user already exist" });
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        // const userCreated = await User.create({username, email, phone, password:hash_password});
        const userCreated = await User.create({ username, email, phone, password });


        res.status(201).json({ msg: "registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
}

// login part

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        //const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({ msg: "login successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });
        } else {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }

}

// to send user data logic
const user = async(req,res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user };