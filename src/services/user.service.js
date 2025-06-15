import bcrypt from 'bcryptjs';
import userRepository from '../repositories/user.repository.js';

const getAllUsers = async (limit, offset) => {
    const users = await userRepository.findAll();

    // Hapus password dari setiap objek user sebelum mengembalikan
    return users.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
};

const getUserByID = async (id) => {
    const user = await userRepository.findByID(id);
    if (!user) {
        throw new Error('User not found');
    }

    // Mengembalikan objek pengguna tanpa properti password untuk keamanan
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

const createUser = async (userData) => {
    // Simpan user baru ke "database" (dummy)
    const newUser = await userRepository.create(userData);
    return newUser;
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
    const deleted = await userRepository.remove(id);
    if (!deleted) {
        throw new Error('User not found');
    }

    return { message: 'User deleted successfully' };
};

export default {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
};
