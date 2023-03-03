import supertest from 'supertest';

const { TEST_HOST = 'http://localhost:3000' } = process.env;

export function request(): ReturnType<typeof supertest> {
  return supertest(TEST_HOST);
}

export function toMatchMissingParameterError(res: supertest.Response): void {
  expect(res.body.state).toEqual('error');
  expect(res.body.error.code).toEqual('missingParameter');
}

export function toMatchInvalidParameterNameError(
  res: supertest.Response,
): void {
  expect(res.body.state).toEqual('error');
  expect(res.body.error.code).toEqual('invalidParameterName');
}

export function toMatchInvalidParameterValueError(
  res: supertest.Response,
): void {
  expect(res.body.state).toEqual('error');
  expect(res.body.error.code).toEqual('invalidParameterValue');
}

export function toMatchUnknownCommandError(res: supertest.Response): void {
  expect(res.body.state).toEqual('error');
  expect(res.body.error.code).toEqual('unknownCommand');
}

export function toMatchInvalidHeaderParameterError(
  res: supertest.Response,
): void {
  expect(res.body.state).toEqual('error');
  expect(res.body.error.code).toEqual('invalidHeaderParameter');
}
