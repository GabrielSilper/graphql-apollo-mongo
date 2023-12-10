const Post = require('../../../models/Post');

module.exports = {
  Query: {
    posts: async () => await Post.find().populate('author').exec(),
    post: async (_, { id }) =>
      await Post.findById(id).populate('author').exec(),
  },
  Mutation: {
    createPost: async (_, { data }) =>
      await (await Post.create(data)).populate('author'),
    updatePost: async (_, { id, data }) =>
      await Post.findOneAndUpdate(id, data, { new: true })
        .populate('author')
        .exec(),
    deletePost: async (_, { id }) => {
      const post = await Post.findById(id);
      if (!post) {
        return false;
      }

      await Post.deleteOne(post);
      return true;
    },
  },
};
