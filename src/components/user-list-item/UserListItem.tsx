import React from'react';
import { Link } from 'react-router-dom';

import './userListItem.scss';


type UserListItemProps = {
    name: string;
    city: string;
    company: string;
    id: string;
  };

export const UserListItem = (
    {name, city, company, id}: UserListItemProps
    ) => {


    return (
        <>
            <div className='list__tem__text'>
                <p>
                    <span className='list__tem__text--gray'>ФИО: </span>
                    {name}
                </p>

                <p>
                    <span className='list__tem__text--gray'>город: </span>
                    {city}
                </p>

                <p>
                    <span className='list__tem__text--gray'>компания: </span>
                    {company}
                </p>
            </div>

            <div className='list__tem__link__container'>
                <Link className='user__link' to={`/${id}`}>Подробнее</Link>
            </div>
        </>
    )
}