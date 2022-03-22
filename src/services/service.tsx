
export default class Service {
    _apiBase =  'https://jsonplaceholder.typicode.com';
   
    async getResourse(url: string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

    getUsers() {
        return  this.getResourse(`/users`);
    }

     getUser(id: string) {
        return  this.getResourse(`/users/${id}`);
    }
}

