import React from 'react';
import './signpage.styles.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignPage = () => (
    <div className='sign'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignPage;
