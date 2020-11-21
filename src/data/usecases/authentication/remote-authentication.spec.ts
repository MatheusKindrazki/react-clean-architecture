import { HttpPostClient } from '../../protocols/http/httpPostClient';
import { HttpPostClientSpy } from '../../test/mock-http-client';

import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct URL', () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
