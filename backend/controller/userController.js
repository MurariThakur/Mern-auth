import User from "../models/userModel.js";

export const getUserDetails = async function (req, res) {
    try {   
        const {userId} = req.body;

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, data: {
            name: user.name,
            email: user.email,
            isAccountVerified: user.isAccountVerified,
        } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};