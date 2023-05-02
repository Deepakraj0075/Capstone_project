import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-south-1_k1KVRYpIp',
  ClientId: '148t5hs61kqmu89jdft9f3ncaf'
};

export default new CognitoUserPool(poolData);