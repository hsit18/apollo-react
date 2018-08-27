import gql from 'graphql-tag';

const helloQuery = gql`
  {
    hi
  }
`;

const getPosts = gql`
  {
    posts {
      id,
      title,
      votes,
      author {
        firstName,
        lastName
      }
      comments {
        id,
        text
      }
    }
  }
`;

const upVoteMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id,
      title,
      votes
    }
  }
`;

const addPostCommentMutation = gql`
  mutation addCommentPost($postId: Int!, $text: String!) {
    addCommentPost(postId: $postId, text: $text) {
      id,
      comments {
        id,
        text
      }
    }
  }
`;

export {
    helloQuery,
    getPosts,
    upVoteMutation,
    addPostCommentMutation,
};
