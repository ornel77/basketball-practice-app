import mongoose from 'mongoose';
import { User } from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.log('error in getAllUsers function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
export const getOneUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid ID' });
        }
        const user = await User.findById(id, { password: 0 });
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.log('error in getOneUser function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid ID' });
        }
        const deletedUser = await User.findByIdAndDelete(id, {
            password: 0,
        }).select('-password');
        if (!deletedUser) {
            return res
                .status(400)
                .json({ success: false, message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted',
            data: deletedUser,
        });
    } catch (error) {
        console.log('error in deletedUser function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid ID' });
        }

        const updatedUser = await User.findByIdAndUpdate(id, user, {
            new: true,
        }).select('-password');

        if (!updatedUser) {
            return res
                .status(404)
                .json({ success: false, message: 'User not found' });
        }

        updatedUser.save();

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser,
        });
    } catch (error) {
        console.log('error in updateUser function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
