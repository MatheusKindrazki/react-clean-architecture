import { HttpPostClientSpy } from '../../test/mock-http-client';

import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct URL', () => {
    const url = 'other_url';
    const { httpPostClientSpy, sut } = makeSut(url);

    sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
