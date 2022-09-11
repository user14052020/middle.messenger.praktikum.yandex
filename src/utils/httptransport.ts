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
interface Options {
	timeout: number,
	headers: Record<string, string>,
	method: string,
	data: Record<string, any> | XMLHttpRequestBodyInit
}

export class HTTPTransport {
	get = (url:string, options: Options) => {
			 
		return this.request(url, {...options, method: METHODS.Get}, options.timeout);
	};

	post = (url:string, options: Options) => {
		return this.request(url, {...options, method: METHODS.Post}, options.timeout);
	};

	put = (url:string, options: Options) => {
		return this.request(url, {...options, method: METHODS.Put}, options.timeout);
	};

	delete = (url:string, options: Options) => { 
		return this.request(url, {...options, method: METHODS.Delete}, options.timeout);
	};

	request = (url:string, options: Options, timeout = 5000) => {
		const {headers, method, data} = options;

		return new Promise(function(resolve, reject) {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.Get;

			xhr.open(
				method, 
				isGet && !!data
				? `${url}${queryStringify(data as Record<string, any>)}`
				: url,
			);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = function() {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(data as XMLHttpRequestBodyInit);
			}
		});
	};
}
export default HTTPTransport;