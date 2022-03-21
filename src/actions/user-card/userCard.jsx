import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputComponent from '../../components/input/Input';


// class UserCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputName: "",
//     }

//     this.onChangeHandler = this.onChangeHandler.bind(this);
//   }
  

//   componentDidMount() {
//     const { id } = useParams();

//   }


//   onChangeHandler(e){  
//     this.setState({  
//       [e.target.name]: e.target.value  
//     })  
//   }

//   render() {
//     return (
//       <form>
//           <InputComponent 
//               type="text"
//               name="name"
//               inputId="name"
//               inputValue={this.state.inputName}
//               onChangeHandler={this.onChangeHandler}
//               placeholder=""
//               labelText="Name"
//           />
//       </form> 
//   )
//   }
          
// }
    
const UserCard = ({users}) => {
    const [inputName, setInputName] = useState(''),
          [userNameInput, setUserNameInput] = useState(''),
          [emailInput, setEmailInput] = useState(''),
          [streetInput, setStreetInput] = useState(''),
          [cityInput, setCityInput] = useState(''),
          [zipCodeInput, setZipCodeInput] = useState(''),
          [phoneInput, setPhoneInput] = useState(''),
          [websiteInput, setWebsiteInput] = useState(''),
          [commentInput, setCommentInput] = useState(''),
          [readonly, setReadonly] = useState('readonly');
    const { id } = useParams();

    useEffect(() => {
      if(users) {
        for(let user of users) {
          if(String(user.id) === id) {
             setInputName(user.name)
            setUserNameInput(user.username);
            setEmailInput(user.email);
            setStreetInput(user.address.street);
            setCityInput(user.address.city);
            setZipCodeInput(user.address.zipcode);
            setPhoneInput(user.phone);
            setWebsiteInput(user.website);
            if(user.comment) {
              setCommentInput(user.comment)
            } else {
              setCommentInput('')
            }

            break;
          }
        }
      }
    }, []);

    
    return (
        <form>
            <InputComponent 
                type="text"
                name="name"
                inputId="name"
                inputValue={inputName}
                onChangeHandler={setInputName}
                placeholder=""
                labelText="Name"
                readonly={readonly}
                
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
            />   

            <InputComponent 
                type="comment"
                name="commet"
                inputId="commet"
                inputValue={commentInput}
                onChangeHandler={setWebsiteInput}
                placeholder=""
                labelText="Comment"
                readonly={readonly}
            />  
        </form> 
    )
            
}

    UserCard.propTypes = {
      users: PropTypes.array, 
    };
   
      const mapStateToProps = (state) => {
        return {
          users: state.users,
        }
      }
      
    //   const mapDispatchToProps = {
    //     usersLoaded,
    //     usersRequested,
    //     usersError,
    //   }
    
    export default connect(mapStateToProps)(UserCard);