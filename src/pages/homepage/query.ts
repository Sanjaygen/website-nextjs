import { gql } from "@apollo/client";

export const QUERY = gql`
  query {
    headers {
      data {
        attributes {
          HOME {
            id
            Title
            Link
          }
        }
      }
    }
    aboutUses{
      data {
       attributes {
         Title
         backgroundImage{
           data {
             attributes {
               name
               alternativeText
               url
             }
           }
         }
         Description
       }
     }
     }
  }
`;
