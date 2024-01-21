import { gql } from "urql";

export const GET_AREAS_QUERY = gql`
  query GetAreas {
    GetAreas {
      createdAt
      deletedAt
      id
      name
      updatedAt
      alarms{
        isOn
        areaID
        name
        id
        area{
          name
        }
      }
          fans{
            id
            areaID
            name
            isOn
            area{
              name
            }
          }
          light{
            area{
              name
            }
            id
            areaID
            isOn
          }
          sensors{
            name
            areaID
            id
            type
            value
            area{
              name
            }
          }
        }
    }
  }
`;
