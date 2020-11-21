import { HttpPostClient } from '../../protocols/http/httpPostClient';

import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct URL', () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
      }
    }

    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});