/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      dob
      username
      email
      phoneNumber
      accountType
      street
      townCity
      county
      postcode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      dob
      username
      email
      phoneNumber
      accountType
      street
      townCity
      county
      postcode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      username
      name
      email
      id
      name
      dob
      username
      email
      phoneNumber
      accountType
      street
      townCity
      county
      postcode
      createdAt
      updatedAt
      __typename
    }
  }
`;
