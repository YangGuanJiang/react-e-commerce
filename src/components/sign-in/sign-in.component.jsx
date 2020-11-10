import React from 'react';
import './sign-in.styles.scss';
import {signInWithGoogle} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compoent.ksx";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        this.setState({email: '', password: '' })
    }

    changeHandler = (event) => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput name="email" type="email" value={this.state.email} label="Email"
                               onChange={this.changeHandler} required />
                    <FormInput name="password" type="password" value={this.state.password} label="Password"
                        onChange={this.changeHandler} required/>
                    <div className='buttons'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;
