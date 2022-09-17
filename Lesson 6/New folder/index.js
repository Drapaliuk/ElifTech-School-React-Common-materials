// Hash ===================================================================================

const jwt = require('jsonwebtoken');
const objectHash = require('object-hash');

const password = objectHash('hello world');
// console.log(password)
const providePassword = 'hello world'

const isCorrectPassword = password === objectHash(providePassword)
// console.log(isCorrectPassword)
// console.log(objectHash('hello world'))
// console.log(objectHash(providePassword))






















// JWT ===================================================================================

const payload = {
  id: '212992',
};

const secretKey = 'qwerty';
const headers = {
  expiresIn: 1,
};

const options = [payload, secretKey, headers];
const token = jwt.sign(...options);
const decodedToken = jwt.decode(token);

// setTimeout(() => {
//     console.log(jwt.verify(token, secretKey))
// }, 1000)














const customJWT = (payload, secretKey, header) => {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');

  const verificationSignature = objectHash(`${encodedHeader}.${encodedPayload}.${secretKey}`);

  return `${encodedHeader}.${encodedPayload}.${verificationSignature}`;
};

const customToken = customJWT(...options);
// console.log(customToken)