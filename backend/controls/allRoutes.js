const user = require("../modals/user");
const bcrypt = require('bcrypt');

const getData = async (req, res) => {
    try {
        const result = await user.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const validUser = await user.findOne({ Email });

        if (validUser) {
            if (validUser.Password === Password) {
                console.log("Login successful");
            } else {
                console.log("Invalid password");
            }
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        const { Fname, Lname, Email, Password } = req.body;
        console.log(Fname)
        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const result = await user.create({
            Fname,
            Lname,
            Email,
            Password: hashedPassword
        });
        console.log("Data created successfully:", result);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating data:", error);
        
        // Handle specific bcrypt errors
        if (error.name === 'MongoError' && error.code === 11000) {
            res.status(400).json({ error: 'Duplicate email. User already exists.' });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
};

const addProduct = async(req,res)=>{
    try{
        const{name, prize ,company ,categories ,image ,Description} = req.body;
        console.log(name,prize,Description)

    }catch(e){
        console.error("Error creating data:", error);
    }
}
module.exports = { getData, login, register ,addProduct};
