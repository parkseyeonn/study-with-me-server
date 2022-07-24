import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../../client';

export default {
  Mutation: {
    login: async (_, {uid, password}) => {
      const user = client.user.findFirst({where: {uid}});
      if (!user) {
        return {
          code: '400',
          message: '해당 아이디의 유저가 존재하지 않습니다.'
        }
      }
      const isPasswordMatch = bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return {
          code: '400',
          message: '비밀번호를 확인해주세요.'
        }
      }
      const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
      return {
        code: '200',
        token,
      }
    }
  }
}