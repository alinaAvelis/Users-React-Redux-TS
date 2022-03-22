import React, {useState} from 'react';
import Button from '../../components/button/button';
import UserCard from '../../components/user-card/userCard';
import './userCardPage.scss';


const UserCardPage = () => {

        const [readonly, setReadonly] = useState(true);

        const edit = () => {
            setReadonly(false);
        }

        return (
            <section className='section'>
                <div className="user_card__header  flex">
                    <h1 className='title'>Профиль пользователя</h1>

                    <Button 
                        text='Редактировать'
                        onClickHundler={edit}/>
                </div>
                 
                <UserCard readonly={readonly}  setReadonly={setReadonly}/>
               
            </section> 
        )
}

export default UserCardPage;