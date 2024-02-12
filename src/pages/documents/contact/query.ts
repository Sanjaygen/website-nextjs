import { gql } from "@apollo/client";

export const ContactQuery = gql`

query GetContactUses {
    contactUses {
      data {
        attributes {
          contactbanner {
            title
            content
            link
            colors
            backgroundImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
          contactdetails {
            ... on ComponentElementInputForm {
              type
              label
            }
            ... on ComponentElementButtonlink {
              Title
              type
              colors
              isExternal
            }
            ... on ComponentMapdetailsAddressForm {
              content
            }
            ... on ComponentMapdetailsMap {
              mapimage {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }`