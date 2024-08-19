import mongoose from 'mongoose';
import { Stat } from '../models/stat.model.js';
import { User } from '../models/user.model.js';

/* ------------------------------- SELECT ALL ------------------------------- */
export const getAllStats = async (req, res, next) => {
    try {
        const stats = await Stat.find({});
        res.status(200).json({ success: true, data: stats });
    } catch (error) {
        console.log('error in getAllStats function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/* ------------------------------- SELECT ONE ------------------------------- */
export const getOneStat = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid ID' });
        }
        const stat = await Stat.findById(id);
        if (!stat) {
            return res
                .status(404)
                .json({ success: false, message: 'Stat not found' });
        }

        res.status(200).json({ success: true, data: stat });
    } catch (error) {
        console.log('error in getOneStat function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/* ------------------------------- CREATE STAT ------------------------------ */
export const createStat = async (req, res, next) => {
    const stat = req.body;
    const {userId} = req.params

    try {
        // check if the user exists
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({success: false, message: "User not found"})
        }
        if (
            !stat.fieldGoal ||
            !stat.threePoint ||
            !stat.layupLeft ||
            !stat.layupRight ||
            !stat.freeThrow
        ) {
            return res
                .status(400)
                .json({ success: false, message: 'Please profide all fields' });
        }

        const newStat = new Stat({...stat, user: userId});

        await newStat.save();
        await User.findByIdAndUpdate(userId, {$push: {stats: newStat._id}})

        res.status(201).json({
            success: true,
            message: 'Stat created',
            data: newStat,
        });
    } catch (error) {
        console.log('error in createStat function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/* ------------------------------- DELETE STAT ------------------------------ */
export const deleteStat = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Stat not found' });
        }

        const deletedStat = await Stat.findByIdAndDelete(id);
        if (!deletedStat) {
          return res
              .status(404)
              .json({ success: false, message: 'Stat not found' });
      }

        res.status(200).json({
            success: true,
            message: 'Stat deleted successfully',
        });
    } catch (error) {
        console.log('error in deleteStat function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/* ------------------------------- UPDATE STAT ------------------------------ */
export const updateStat = async (req, res, next) => {
    const { id } = req.params;
    const stat = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid ID' });
        }

        // new: true -> so that the method return the updated document and not the original
        const updatedStat = await Stat.findByIdAndUpdate(id, stat, {
            new: true,
        });

        if (!updatedStat) {
            return res.status(404).json({
                success: false,
                message: 'Stat not found',
                data: updatedStat,
            });
        }

        updatedStat.save();

        res.status(200).json({ success: true, message: 'Stat updated' });
    } catch (error) {
        console.log('error in UPDATE STAT function', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
