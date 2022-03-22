import React, {useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AppServiceContext from '../app-service-context/app-service-context';
import {usersLoaded, usersRequested, usersError, usersSorting } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/error';
import { UserListItem } from '../user-list-item/UserListItem';
import './userList.scss';




export const UsersList = ({usersError, usersRequested, usersSorting, usersLoaded, loading, error, users, sortUsers, setTotalCounter}) => {
    const appContext = useContext(AppServiceContext);
  
    useEffect(() => {
            usersRequested();
            appContext.getUsers()
            .then((res) => {           
              usersLoaded(JSON.parse(JSON.stringify(res)));
              usersSorting(JSON.parse(JSON.stringify(res)));
            }) 
            .catch(()=> {
              usersError();
            })        
    }, []);

    useEffect(() => {   
      if(users) {
        setTotalCounter(users.length);
      }    
    }, [users]);
  
    if(loading) {
      return <Spinner />
    } 
  
    if(error) {
      return <Error />
    }
 
      return (
        <ul className='user_list  list_list_style_type_none'>
          { sortUsers.map(item => {
                return <li className='user_list__item flex  space-between' key={item.id}>
                <UserListItem
                  name={item.name}
                  city={item.address.city} 
                  company={item.company.name} 
                  id={item.id}
                />
              </li>})}
          </ul>
      )
  }

  UsersList.propTypes = {
    usersError: PropTypes.func, 
    usersRequested: PropTypes.func,
    usersLoaded: PropTypes.func,
    usersSorting: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.bool, 
    users: PropTypes.array,
    sortUsers: PropTypes.array
  };

  
  const mapStateToProps = (state) => {
      return {
        users: state.users,
        sortUsers: state.sortUsers,
        loading: state.loading,
        error: state.error
      }
    }
    
    const mapDispatchToProps = {
      usersLoaded,
      usersRequested,
      usersSorting,
      usersError,
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersList);