// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event, context) => {
//   console.log(event);
//   console.log("Heyy Lambda function is workinf");
//   console.log(context);
//   // insert code to be executed by your lambda trigger
//   return event;
// };
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB");
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();

  const params = {
    Item: {
      id: { S: event.request.userAttributes.sub },
      __typename: { S: "User" },
      username: { S: event.userName },
      name: { S: event.request.userAttributes.name },
      email: { S: event.request.userAttributes.email },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
    },
    TableName: process.env.USERTABLE,
  };

  try {
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }

  context.done(null, event);
};
