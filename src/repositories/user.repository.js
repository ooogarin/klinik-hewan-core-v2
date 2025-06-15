import { v7 as uuidv7 } from 'uuid';
import { users } from '../data/dummy.js';

const findAll = async () => {
    return users;
};

const findByID = async (id) => {
    return users.find((user) => user.id === id) ?? null;
};

const findByEmail = async (email) => {
    return users.find((user) => user.email === email) ?? null;
};

const findByUsername = async (username) => {
    return users.find((user) => user.username === username) ?? null;
};

const create = async (userData) => {
    const newUser = {
        id: uuidv7(),
        ...userData,
        createdAt: new Date(),
    };
    users.push(newUser);
    return newUser;
};

const update = async (id, updateData) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updateData };
    return users[index];
};

const remove = async (id) => {
    const filtered = users.filter((user) => user.id !== id);
    if (filtered.length < users.length) {
        users.length = 0;
        users.push(...filtered);
        return true;
    }
    return false;
};

export default {
    findAll,
    findByID,
    findByEmail,
    findByUsername,
    create,
    update,
    remove,
};
