
import bcrypt from 'bcrypt';
import client from '../../client';

export default {
  Mutation: {
    createAccount: async (_, {uid, name, nickname, password}) => {
      try {
        const existingUser = await client.user.findUnique({
          where: {
            OR: [{nickname}, {uid}]
          }
        });
        if (existingUser) {
          return {
            code: '400',
            message: "해당 닉네임의 유저가 이미 존재합니다.",
          }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            uid,
            name,
            nickname,
            password: hashedPassword,
          },
        });
        return {
          code: '201',
        }
      } catch (e) {
        return {
          code: '400',
          message: "계정을 생성할 수 없습니다.",
        }
      }
    }
  }
}