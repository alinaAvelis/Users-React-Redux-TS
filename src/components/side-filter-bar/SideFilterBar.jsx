import React, {useContext} from 'react';
import {connect} from 'react-redux';
import AppServiceContext from '../app-service-context/app-service-context';
import PropTypes from 'prop-types';

import Button from '../button/button';
import './sideFilterBar.scss';
import {usersSorting} from "../../actions";


 const SideFilterBar = ({usersSorting}) => {
    const appContext = useContext(AppServiceContext);

    const aboutCitySort = () => {

      appContext.getUsers()
      .then((res) => {
        const cityArrSort = res.sort((a, b) => {
          if (a.address.city > b.address.city) {
            return 1;
          }
          if (a.address.city < b.address.city) {
            return -1;
          }
          return 0;
        });
        usersSorting(cityArrSort);
      }) 
 
    }

    const aboutCompanySort = () => {

      appContext.getUsers()
      .then((res) => {
        const companyArrSort = res.sort((a, b) => {
          if (a.company.name > b.company.name) {
            return 1;
          }
          if (a.company.name < b.company.name) {
            return -1;
          }
          return 0;
        });
        
        usersSorting(companyArrSort);
      }) 
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

SideFilterBar.propTypes = {
  usersSorting: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
      sortUsers: state.sortUsers

    }
  }
  
  const mapDispatchToProps = {
    usersSorting
  }

export default connect(mapStateToProps, mapDispatchToProps)(SideFilterBar);