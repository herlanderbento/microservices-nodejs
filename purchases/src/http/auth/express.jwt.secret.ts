import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa';

export const expressJwtSecrets = expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `${process.env.AUTH0_AUDIENCE}/.well-known/jwks.json`,
}) as GetVerificationKey;
