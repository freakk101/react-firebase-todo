
import React, {Component} from 'react';
import {firebaseApp,users} from '../Firebase'
import * as firebase from 'firebase';

class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

     gmail = () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      // The signed-in user info.
        var user = result.user;
         // ...
      }).catch(function(error) {
                          // Handle Errors here.
                          var errorCode = error.code;
                          var errorMessage = error.message;
                          // The email of the user's account used.
                          var email = error.email;
                          // The firebase.auth.AuthCredential type that was used.
                          var credential = error.credential;
                          // ...
          });

    }

    register = ()=> {
        console.log(this.state);
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=> {
                console.log(user)
                const thisUser = users.child(user.uid);
                const userdetail = thisUser.child('userdetail');
                const dataToInsert = {email: user.email, userid: user.uid};
                userdetail.set(dataToInsert)
            })
            .catch(error=> this.setState({error}))


    }


    render() {
        return (
            <div className="container" style={{margin: '5%'}}>
                <div className="form-group">
                    <input type="text"
                           placeholder="Enter Email"
                           className="form-control"
                           style={{margin: '10px'}}
                           onChange={({target})=>this.setState({email: target.value})}
                    />
                    <input type="text"
                           placeholder="Enter Password"
                           className="form-control"
                           style={{margin: '10px'}}
                           onChange={({target})=>this.setState({password: target.value})}
                    />
                    
                     <button className="loginBtn loginBtn--google" onClick={this.gmail}>
                          Proceed with Google
                    </button>

                    <button
                        className="btn btn-primary"
                        style={{margin: '10px'}}
                        onClick={this.register}
                    >
                        Register
                    </button>

                    <div>{this.state.error.message}</div>

                </div>
            </div>


        )


    }


}

export default Register ;