import React, { useContext } from 'react'
import Marginer from "../marginer"
import { AccountContext } from "./accountContext"
import { BoxContainer, FormContainer, Input, MutedLink, BoldLink, SubmitButton } from "./common"

function SignUpForm(props) {
    const { switchToSignIn } = useContext(AccountContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>

            <Marginer direction="vertical" margin={"1.6em"} />

            <SubmitButton type="submit" >SignUp</SubmitButton>

            <Marginer direction="vertical" margin={"1em"} />

            <MutedLink href="#">Already have an account? {" "}
                <BoldLink href="#" onClick={switchToSignIn}>SignIn</BoldLink>
            </MutedLink>


        </BoxContainer>
    )
}

export default SignUpForm
