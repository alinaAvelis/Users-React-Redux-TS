import React, {useState, useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputComponent from '../input/Input';
import { SubmitButton } from '../submitButton/submitButton';
import {usersLoaded, usersRequested, usersError, stopLoading} from '../../actions';
import AppServiceContext from '../app-service-context';
import Spinner from '../spinner';
import Error from '../error/error';


    
const UserCard = ({users, readonly, usersLoaded, setReadonly, loading, error, usersRequested, usersError, stopLoading}) => {
    const appContext = useContext(AppServiceContext);
    const [inputName, setInputName] = useState(''),
          [userNameInput, setUserNameInput] = useState(''),
          [emailInput, setEmailInput] = useState(''),
          [streetInput, setStreetInput] = useState(''),
          [cityInput, setCityInput] = useState(''),
          [zipCodeInput, setZipCodeInput] = useState(''),
          [phoneInput, setPhoneInput] = useState(''),
          [websiteInput, setWebsiteInput] = useState(''),
          [commentInput, setCommentInput] = useState('');
    const { id } = useParams();

    const setInputs = (name, username, email, street, city, zcode, phone, website, comment) => {
      setInputName(name)
      setUserNameInput(username);
      setEmailInput(email);
      setStreetInput(street);
      setCityInput(city);
      setZipCodeInput(zcode);
      setPhoneInput(phone);
      setWebsiteInput(website);
      if(comment) {
        setCommentInput(comment)
      } else {
        setCommentInput('')
      }
    }

    useEffect(() => {
        usersRequested();

        appContext.getUser(id)
        .then((res) => {
          stopLoading();
          setInputs(res.name, res.username, res.email, res.address.street, res.address.city, res.address.zipcode, res.phone, res.website, res.comment);
        }) 
        .catch(()=> {
          usersError();
        }) 
        
    }, []);


    const submitHundler = () => {
      const newUsersArr = [...users];

      for(let user of newUsersArr) { 
        if(String(user.id) === id) {
          const newContact = {
            "id": user.id,
            "name": inputName,
            "username": userNameInput,
            "email": emailInput,
            "address": {
              ...user.address,
              "street": streetInput,
              "city": cityInput,
              "zipcode": zipCodeInput,
            },
            "phone": phoneInput,
            "website": websiteInput,
            "company": {
              ...user.company
            },
            "comment": commentInput
          }

          user = newContact;
          console.log(JSON.stringify(newContact));
          setInputs(user.name, user.username, user.email, user.address.street, user.address.city, user.address.zipcode, user.phone, user.website, user.comment);
        }
      }

      usersLoaded(newUsersArr);

      setReadonly(true);

    }

    if(loading) {
      return <Spinner />
    } 
  
    if(error) {
      return <Error />
    }

    
    return (
        <>
          <form onSubmit={(e) => {
            e.preventDefault();
            submitHundler();
           }}>
              <InputComponent 
                  type="text"
                  name="name"
                  inputId="name"
                  inputValue={inputName}
                  onChangeHandler={setInputName}
                  placeholder=""
                  labelText="Name"
                  readonly={readonly}
                  required={true}
                  
              />

              <InputComponent 
                  type="text"
                  name="userName"
                  inputId="userName"
                  inputValue={userNameInput}
                  onChangeHandler={setUserNameInput}
                  placeholder=""
                  labelText="User name"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="email"
                  name="email"
                  inputId="email"
                  inputValue={emailInput}
                  onChangeHandler={setEmailInput}
                  placeholder=""
                  labelText="E-mail"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="street"
                  name="street"
                  inputId="street"
                  inputValue={streetInput}
                  onChangeHandler={setStreetInput}
                  placeholder=""
                  labelText="Street"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="city"
                  name="city"
                  inputId="city"
                  inputValue={cityInput}
                  onChangeHandler={setCityInput}
                  placeholder=""
                  labelText="City"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="zCode"
                  name="zCode"
                  inputId="zCode"
                  inputValue={zipCodeInput}
                  onChangeHandler={setZipCodeInput}
                  placeholder=""
                  labelText="Zip code"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="phone"
                  name="phone"
                  inputId="phone"
                  inputValue={phoneInput}
                  onChangeHandler={setPhoneInput}
                  placeholder=""
                  labelText="Phone"
                  readonly={readonly}
                  required={true}
              />

              <InputComponent 
                  type="website"
                  name="website"
                  inputId="website"
                  inputValue={websiteInput}
                  onChangeHandler={setCommentInput}
                  placeholder=""
                  labelText="Website"
                  readonly={readonly}
                  required={true}
              />   

              <InputComponent 
                  type="comment"
                  name="comment"
                  inputId="comment"
                  inputValue={commentInput}
                  onChangeHandler={setWebsiteInput}
                  placeholder=""
                  labelText="Comment"
                  readonly={readonly}
                  required={false}
              />  

            <SubmitButton value="Отправить" readonly={readonly}/>
          </form> 
        </>
    )
            
}

    UserCard.propTypes = {
      users: PropTypes.array, 
      readonly:  PropTypes.bool,
      loading:  PropTypes.bool,
      error: PropTypes.bool,
      setReadonly: PropTypes.func,
      stopLoading: PropTypes.func
    };
   
      const mapStateToProps = (state) => {
        return {
          users: state.users,
          loading: state.loading,
          error: state.error
        }
      }
      
      const mapDispatchToProps = {
        usersLoaded,
        usersRequested,
        usersError,
        stopLoading
      }
    
    export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
