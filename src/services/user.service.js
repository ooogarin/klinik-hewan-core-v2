import bcrypt from 'bcryptjs';
import userRepository from '../repositories/user.repository.js';

const getUserByID = async (id) => {
    const user = await userRepository.findByID(id);
    if (!user) {
        throw new Error('User not found');
    }

    // Mengembalikan objek pengguna tanpa properti password untuk keamanan
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

const updateUser = async (id, updateData) => {
    // Jika ada password baru, hash terlebih dahulu
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await userRepository.update(id, updateData);
    if (!updatedUser) {
        throw new Error('User not found');
    }

    // Mengembalikan objek pengguna yang diperbarui tanpa properti password
    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
};

const deleteUser = async (id) => {
    const deleted = await userRepository.delete(id);
    if (!deleted) {
        throw new Error('User not found');
    }

    return { message: 'User deleted successfully' };
};

const getAllUsers = async (limit, offset) => {
    const users = await userRepository.findAll(limit, offset);

    // Hapus password dari setiap objek user sebelum mengembalikan
    return users.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
};

export default {
    getUserByID,
    updateUser,
    deleteUser,
    getAllUsers,
};
