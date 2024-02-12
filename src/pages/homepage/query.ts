import { gql } from "@apollo/client";

export const QUERY = gql`
query GetHomes {
  homes {
    data {
      attributes {
        PRODUCTS {
          ... on ComponentProductProduct {
            Title
            link
            productimages {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
        aboutus {
          Title
          description1
          description2
          description3
          description4
          colors
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          backgroundImage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
        clientreviews {
          content
          Title
          colors
          backgroundImage {
            data {
              attributes {
                url
                alternativeText
                name
              }
            }
          }
        }
        client {
          clientlogo {
            logos {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
        Details {
          heading
          description
        }
      }
    }
  }
}
`;
