const User = require('../../../models/User');

module.exports = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) =>
      await User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) {
        return false;
      }

      await User.deleteOne(user);
      return true;
    },
  },
};
