import { gql } from "apollo-boost";

export const CREATE_PERSON = gql`
    mutation createSPerson(
        $theId: Int!
        $name: String!
        $email: String
        $phone: String
    ){
        createSPerson(
            theId: $theId
            name: $name
            email: $email
            phone: $phone
        )
    }{
        id
    }
`;