/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onOrderUpdated = /* GraphQL */ `subscription OnOrderUpdated($id: ID!) {
  onOrderUpdated(id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnOrderUpdatedSubscriptionVariables,
  APITypes.OnOrderUpdatedSubscription
>;
export const onCarUpdated = /* GraphQL */ `subscription OnCarUpdated($id: ID!) {
  onCarUpdated(id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCarUpdatedSubscriptionVariables,
  APITypes.OnCarUpdatedSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateCar = /* GraphQL */ `subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
  onCreateCar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCarSubscriptionVariables,
  APITypes.OnCreateCarSubscription
>;
export const onUpdateCar = /* GraphQL */ `subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
  onUpdateCar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCarSubscriptionVariables,
  APITypes.OnUpdateCarSubscription
>;
export const onDeleteCar = /* GraphQL */ `subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
  onDeleteCar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCarSubscriptionVariables,
  APITypes.OnDeleteCarSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
