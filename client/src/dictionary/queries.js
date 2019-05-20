import { gql } from "apollo-boost";

/* Post Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */
//Stuff Here

/* Posts Queries */
//Stuff Here

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
