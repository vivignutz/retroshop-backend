import User from '../models/UserModel.js';

const UserController = {
    // GET
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure`});
        }
    },

    // GET by ID
    getUserById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json(user); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user request failure`});
        }
    },

    // POST
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);  
            res.status(201).json({ message: "User added successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user registration failure` });  
        }
    },

    // PUT
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json({ message: "User updated successfully", user: updatedUser }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user update failure`});
        }
    },

    // PATCH
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const updates = req.body; 

            if (!updates || Object.keys(updates).length === 0) {
                return res.status(400).json({ message: 'No fields to update.' });
            }

            const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found.' });
            }

            res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user update failure` });
        }
    },

    // DELETE
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json({ message: "User deleted successfully" }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - user delete failure`});
        }
    }
};

export default UserController;
/*class UserController {

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

export default UserController;*/
