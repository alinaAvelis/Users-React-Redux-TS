import React from 'react';
import Button from '../../components/button/button';

// type ButtonProps = {
//     text: string;
//     onClickHundler: Function;
//     classBtn: string;
//   };

const UserCardPage = (
    // {text, onClickHundler, classBtn} : ButtonProps
    ) => {

        const edit = () => {

        }
        return (
            <section className='section'>
                <div className="user_card__header">
                    <h1 className='title'>Профиль пользователя</h1>

                    <Button 
                        text='Редактироввать'
                        onClickHundler={edit}/>
                </div>
                
               
            </section> 
        )
}

export default UserCardPage;