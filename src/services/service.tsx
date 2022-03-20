
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

     getUser(id: number) {
        return  this.getResourse(`/${id}`);
    }
}

// export default class Service {
//     data = {	
//         personals: [
//             {
//                 id: "1",
//                 name: "Николай",
//                 login: "nickolya89",
//                 email: "kolyaBest@mail.ru",
//                 password: "hGFs895Ts"
//             }, 
//             {
//                 id: "18",
//                 name: "Марфушка",
//                 login: "marpha80879",
//                 email: "marpha80879@mail.ru",
//                 password: "xx3FtW"
//             }
//         ],
//         contacts: [
//             {
//                 personalId: "1",
//                 contacts: [
//                     {
//                         name: "Маша",
//                         email: "maria784@gmail.com",
//                         tel: "+79148857896",
//                         url: "https://fazarosta.com/wp-content/uploads/2018/02/12-kachestv-zhenshhin-ot-kotoryh-prosto-tak-ne-uhodjat.jpg",
//                         contactId: "17"
//                     },
//                     {
//                         name: "Василий Иванович",
//                         email: "yorgy@yandex.ru",
//                         tel: "+7846924568",
//                         url: "https://ic.pics.livejournal.com/morena_morana/60514872/2154779/2154779_900.jpg",
//                         contactId: "12"
//                     },
//                     {
//                         name: "Маргарита",
//                         email: "margo@mail.ru",
//                         tel: "+78248974578",
//                         url: "https://hsto.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg",
//                         contactId: "9"
//                     },
//                     {
//                         name: "Адвокат",
//                         email: "lower@yandex.ru",
//                         tel: "+77894562548",
//                         url: "https://www.museikino.ru/upload/images/2016/02/nazarov-600.jpg",
//                         contactId: "4"
//                     }
//                 ]
//             },
    
//             {
//                 personalId: "18",
//                 contacts: [
//                     {
//                         name: "Артем",
//                         email: "tem45ole@gmail.com",
//                         tel: "+79141876456",
//                         url: "https://www.vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg",
//                         contactId: "3"
//                     },
//                     {
//                         name: "Леха",
//                         email: "lihoy@yandex.ru",
//                         tel: "+7451245689",
//                         url: "https://icdn.lenta.ru/images/2021/11/18/14/20211118144957904/owl_detail_240_23e3f1b1570df92c1e5ad2a5c504cc61.jpg",
//                         contactId: "11"
//                     },
//                     {
//                         name: "Екатерина Семеновна",
//                         email: "fortune@mail.ru",
//                         tel: "+77894263589",
//                         url: "https://www.ohchr.org/SiteCollectionImages/Press/Story_Ukraine1.jpg",
//                         contactId: "26"
//                     }
//                 ]
//             }
//         ]
//     }

//      getPersonals() {
//         return  this.data.personals;
//     }

//      getContacts() {
//         return  this.data.contacts;
//     }
// }

