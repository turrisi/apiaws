import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const userExistence = async (usermail, name) => {
    try {
        const user = await prisma.uSER.findUnique({
            where: {
                mail: usermail
            }
        })
        if (user && name === user.name) return true;
        return false;
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async ({ name, mail, password }) => {
    try {
        const created = await prisma.uSER.create({
            data: { name, mail, password }
        });
        if (created) return created;
        return false;
    } catch (error) {
        console.log(error);
    }
}

export const verifyUser = async (usermail, password) => {
    try {
        const user = await prisma.uSER.findUnique({
            where: {
                mail: usermail
            }
        })
        if (user) {
            const isPasswordMatching = await bcrypt.compare(password, user.password);
            if (isPasswordMatching) {
                return user;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
