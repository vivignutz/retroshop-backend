// controller/userController.js
// sao as acoes que podem ser feitas em um produto

//import { user } from "../models/UserModel.js"


class UserController {

    static async listingUsers (req, res) {
        try {
            const usersList = await user.find({});
            res.status(200).json(usersList); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure`});
        }
    };

    // GET users
    static async listingUserById (req, res) {
        try {
            const id = req.params.id;
            const userFound = await user.findById({id});
            res.status(200).json(userFound); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user request failure`});
        }
    };

    // POST (create)
    static async addingUser (req, res) {
        try {
            const newUser = await user.create(req.body);  
            res.status(201).json({ message: "User added successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user registration failure` });  
        }
    }

    // PUT (update)
    static async updateUser (req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Users updated successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user update failure`});
        }
    };

    // DELETE
    static async deleteUser (req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({ message: "Users deleted successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user delete failure`});
        }
    };

};

export default UserController;
