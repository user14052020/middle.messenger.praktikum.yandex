import HTTPTransport from '../utils/HTTPTransport';

export default abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public abstract create?(options: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(identifier: string, options: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}