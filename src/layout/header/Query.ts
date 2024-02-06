import { gql } from "@apollo/client";

export const HeaderQuery = gql`
query GetHeaders {
  headers {
    data {
      attributes {
        Head {
          content
          colors
          type
        }
        navbar {
          ... on ComponentNavBarImages {
            type
            logo {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
          }
          ... on ComponentNavBarHome {
            Title
            type
          }
          ... on ComponentNavBarAbout {
            Title
            type
          }
          ... on ComponentNavBarProducts {
            Title
            PRODUCTS
            type
          }
          ... on ComponentNavBarBlog {
            Title
            type
          }
          ... on ComponentNavBarContact {
            Title
            type
          }
          ... on ComponentElementButtonlink {
            Title
            isExternal
            type
            colors
          }
        }
      }
    }
  }
}
`;