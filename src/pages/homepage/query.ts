import { gql } from "@apollo/client";

export const QUERY = gql`
query GetHomes {
  homes {
    data {
      attributes {
        Title
        PRODUCTS {
          ... on ComponentProductProduct {
            productimages {
              data {
                attributes {
                  url
                }
              }
            }
            Title
            link
          }
        }
        aboutus {
          Title
          description1
          description2
          description3
          description4
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
          image {
            data {
              attributes {
                url
                alternativeText
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
        client{
          clientlogo{
         logos{
          data{
            attributes{
              alternativeText
              url
            }
          }
        }
          }
        }
        Details{
          heading
          description
        }
        footer{
          ...on ComponentContactContactus{
            title
            addressdetail{
              content
            }
            emaildetail{
              content
              
            }
            phonedetail{
              number
            }
          }
          ... on ComponentProfiledetailCompanyprofile{
            title
            company{
              content
            }
          }
          ... on ComponentProfiledetailService{
            title
            company{
              content
            }
          }
          ...on ComponentProfiledetailSocialnetwork{
            title
            description
          }
          ...on ComponentProfiledetailProduct{
            title
            content
            colors
          }
        }
      }
    }
  }
}
`;
