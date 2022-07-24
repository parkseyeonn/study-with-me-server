import bcrypt from 'bcrypt';
import client from '../../client';

export default {
  Mutation: {
    updateProfile: async (_, {nickname, password: newPassword}, {loggedInUser}) => {
      let hashedPassword = null;
      if (newPassword) {
        hashedPassword = bcrypt.hash(newPassword, 10);
      }
      const updatedUser = await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          name,
          nickname,
          password: hashedPassword,
        }
      });
      if (updatedUser) {
        return {
          code: '204'
        }
      } 
      return {
        code: '400',
        message: '유저의 프로필 업데이트를 할 수 없습니다.'
      }
    }
  }
}