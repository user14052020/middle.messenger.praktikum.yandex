import HTTPTransport from '~/utils/HTTPTransport';

export default abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(api:string, endpoint: string) {
    this.http = new HTTPTransport(api, endpoint);
  }

  public abstract create?(options: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(identifier: string, options: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}