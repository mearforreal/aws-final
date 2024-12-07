/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    name
    orders {
      nextToken
      __typename
    }
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userCarId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    name
    orders {
      nextToken
      __typename
    }
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userCarId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    name
    orders {
      nextToken
      __typename
    }
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userCarId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createCar = /* GraphQL */ `mutation CreateCar(
  $input: CreateCarInput!
  $condition: ModelCarConditionInput
) {
  createCar(input: $input, condition: $condition) {
    id
    latitude
    longitude
    orders {
      nextToken
      __typename
    }
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCarMutationVariables,
  APITypes.CreateCarMutation
>;
export const updateCar = /* GraphQL */ `mutation UpdateCar(
  $input: UpdateCarInput!
  $condition: ModelCarConditionInput
) {
  updateCar(input: $input, condition: $condition) {
    id
    latitude
    longitude
    orders {
      nextToken
      __typename
    }
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCarMutationVariables,
  APITypes.UpdateCarMutation
>;
export const deleteCar = /* GraphQL */ `mutation DeleteCar(
  $input: DeleteCarInput!
  $condition: ModelCarConditionInput
) {
  deleteCar(input: $input, condition: $condition) {
    id
    latitude
    longitude
    orders {
      nextToken
      __typename
    }
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCarMutationVariables,
  APITypes.DeleteCarMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    destLatitude
    destLongitude
    status
    calories
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    carId
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    destLatitude
    destLongitude
    status
    calories
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    carId
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    destLatitude
    destLongitude
    status
    calories
    userId
    user {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    carId
    car {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
