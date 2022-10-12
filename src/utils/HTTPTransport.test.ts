import HTTPTransport from './HTTPTransport';

const http = new HTTPTransport('https://jsonplaceholder.typicode.com/', '');

describe('HTTPTransport', () => {
    it('Post', (done) => {
        http
            .post('posts', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
            })
            .then(( response ) => {
                const { title } = response as {title:string, body:string,userId:number} || {};
                if (title === 'foo') {
                    done();
                } else {
                    done(new Error('Ожидался объект с ключом title и значением \'foo\''));
                }
            })
            .catch(done);
    });
    it('Put', (done) => {
        http
            .put('posts/1', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify({
                    id:1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
            })
            .then(( response ) => {
                const { title } = response as {title:string, body:string,userId:number} || {};
                if (title === 'foo') {
                    done();
                } else {
                    done(new Error('Ожидался объект с ключом title и значением \'foo\''));
                }
            })
            .catch(done);
    });

    it('Get', (done) => {
        http
            .get(
                'comments',
                { data: { postId: 1 } },
            )
            .then(( response ) => {
                if ( typeof response !== 'undefined') {
                    done();
                } else {
                    done(new Error('Ожидался массив объектов с ключом postId и значением 1'));
                }
            })
            .catch(done);
    });

    it('Delete', (done) => {
        http
            .delete('posts/1', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },

            })
            .then(( response ) => {
                if ( typeof response !== 'undefined') {
                    done();
                } else {
                    done(new Error('Ожидалось фиктивное удаление поста с сервера'));
                }

            })
            .catch(done);
    });
});