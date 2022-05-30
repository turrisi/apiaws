import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const init = async () => {
    let emptiness = await prisma.uSER.findMany({});
    if (emptiness.length === 0) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash("admin1", salt);
        await prisma.uSER.create({
            data: {
                "mail": "dip.aturrisi@gmail.com",
                "name": "admin1",
                "password": hashed,
                "role": "ADMIN"
            }
        })
    };
    console.log("database ready");
};