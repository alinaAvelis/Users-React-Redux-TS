import React, {useState} from 'react';
import UserList from '../components/user-list/UserList';


// type ButtonProps = {
//     text: string;
//     onClickHundler: Function;
//     classBtn: string;
//   };

const Users = (
    // {text, onClickHundler, classBtn} : ButtonProps
    ) => {
    const [totalCounter, setTotalCounter] = useState(0);
    return (
        <section className='section'>
            <h1 className='title'>Список пользователей</h1>
            <UserList setTotalCounter={setTotalCounter}/>
            <p className='total'> Найдено {totalCounter} пользователей</p>
        </section> 
    )
}

export default Users;