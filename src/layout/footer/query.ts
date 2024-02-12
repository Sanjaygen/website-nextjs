import { gql } from "@apollo/client";

export const FooterQuery = gql`
query GetFooters{
    footers{
      data{
        attributes{
          colors
           footercontents{
            ... on ComponentContactContactus {
              title
              addressdetail {
                content
              }
              emaildetail {
                content
              }
              phonedetail {
                number
              }
            }
            ... on ComponentFooterCompanyprofile{
              title
              items{
                content
              }
            }
            ...on ComponentFooterService{
              title
              items{
                content
              }
            }
            ...on ComponentFooterSocialnetwork{
              title
              description
            }
            ...on ComponentFooterProduct{
              title
              link
              colors
            }
          }
        }
      }
    }
  }
`