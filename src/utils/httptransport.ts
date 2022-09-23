enum METHODS {
		Get = 'GET',
		Post = 'POST',
		Put = 'PUT',
		Delete = 'DELETE',
};

function queryStringify(data:Record<string, any>) {
  if (typeof data !== 'object') {
			throw new Error('Data must be object');
	}
  
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}
export interface Options {
	timeout?: number,
	headers?: Record<string, string>,
	method?: string,
	data?: Record<string, any> | XMLHttpRequestBodyInit | FormData
}

export default class HTTPTransport {
	static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

   constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

	public get = (url:string, options: Omit<Options, 'method'>) => {
		return this.request(this.endpoint + url, {...options, method: METHODS.Get});
	};

	public post = (url:string, options: Omit<Options, 'method'>) => {
		return this.request(this.endpoint + url, {...options, method: METHODS.Post});
	};

	public put = (url:string, options: Omit<Options, 'method'>) => {
		return this.request(this.endpoint + url, {...options, method: METHODS.Put});
	};

	public delete = (url:string, options: Omit<Options, 'method'>) => {
		return this.request(this.endpoint + url, {...options, method: METHODS.Delete});
	};

	private request = (url:string, options: Options) => {
		const {headers, method, data} = options;

		return new Promise(function(resolve, reject) {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.Get;
			console.log(url);
			xhr.open(
				method, 
				isGet && !!data
				? `${url}${queryStringify(data as Record<string, any>)}`
				: url,
			);
			// xhr.timeout = 2;
		xhr.onreadystatechange = () => {

			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status < 400) {
					resolve(xhr.response);
				} else {
					reject(xhr.response);
				}
			}
		};

      xhr.onabort = () => reject({reason: 'abort'});
      xhr.onerror = () => reject({reason: 'network error'});
      xhr.ontimeout = () => reject({reason: 'timeout'});
      if(!headers){
      	if(url.includes('avatar') === false){
      		xhr.setRequestHeader('Content-Type', 'application/json');
      	}  	
      }else{
      	Object.keys(headers).forEach(key => {
					xhr.setRequestHeader(key, headers[key]);
				});
      }
      xhr.withCredentials = true;
      xhr.responseType = 'json';

			if (isGet || !data) {
				xhr.send();
			} else if(url.includes('avatar')){
				xhr.send(data as XMLHttpRequestBodyInit);
			}else {
				xhr.send(JSON.stringify(data) as XMLHttpRequestBodyInit);
			}
		});
	};
}