/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      name
      createdAt
      updatedAt
      userCarId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getCar = /* GraphQL */ `query GetCar($id: ID!) {
  getCar(id: $id) {
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
` as GeneratedQuery<APITypes.GetCarQueryVariables, APITypes.GetCarQuery>;
export const listCars = /* GraphQL */ `query ListCars($filter: ModelCarFilterInput, $limit: Int, $nextToken: String) {
  listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      latitude
      longitude
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCarsQueryVariables, APITypes.ListCarsQuery>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      destLatitude
      destLongitude
      status
      calories
      userId
      carId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const ordersByUserId = /* GraphQL */ `query OrdersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destLatitude
      destLongitude
      status
      calories
      userId
      carId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIdQueryVariables,
  APITypes.OrdersByUserIdQuery
>;
export const ordersByCarIdAndCreatedAt = /* GraphQL */ `query OrdersByCarIdAndCreatedAt(
  $carId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByCarIdAndCreatedAt(
    carId: $carId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destLatitude
      destLongitude
      status
      calories
      userId
      carId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByCarIdAndCreatedAtQueryVariables,
  APITypes.OrdersByCarIdAndCreatedAtQuery
>;
