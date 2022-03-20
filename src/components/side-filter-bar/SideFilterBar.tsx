import React from 'react';

import Button from '../button/button';
import './sideFilterBar.scss';


// type SideFilterBarProps = {
//     aboutCitySort: Function;
//     aboutCompanySort: Function;
//   };

export const SideFilterBar = (
    // {aboutCitySort, aboutCompanySort}: SideFilterBarProps
    ) => {

    const aboutCitySort = () => {

    }

    const aboutCompanySort = () => {

    }


    return (
        <aside className='side_bar'>
            <p>Сортировка</p>
            <Button 
                text='по городу'
                onClickHundler={aboutCitySort}
            />

            <Button 
                text='по компании'
                onClickHundler={aboutCompanySort}
            />

        </aside>
    )
}