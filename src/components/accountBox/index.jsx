import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LoginForm from "./loginForm";
import { AccountContext } from "./accountContext";
import SignUpForm from "./signupForm";

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -290px;
    left: -70px;
    transform: rotate(60deg);
    border-radius: 50%;
    background-color: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index:10;
    margin: 0;
    user-select: none;
`

const SmallText = styled.h5`
    font-size: 11px;
    font-weight: 500;
    line-height: 1.24;
    color: #fff;
    z-index:10;
    margin-top: 1rem;
    user-select: none;
`

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.8em;
`

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

function AccountBox(props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [active, setActive] = useState("signIn")

    const playExpandingAnimation = () => {
        setIsExpanded(true)

        setTimeout(() => {
            setIsExpanded(false)
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignUp = () => {
        playExpandingAnimation()

        setTimeout(() => {
            setActive("signUp")
        }, 400);
    }

    const switchToSignIn = () => {
        playExpandingAnimation()

        setTimeout(() => {
            setActive("signIn")
        }, 400);

    }

    return (
        <AccountContext.Provider value={{ switchToSignUp, switchToSignIn }}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition} />

                    {
                        active === "signIn" ? <HeaderContainer  >
                            <HeaderText>
                                Welcome
                            </HeaderText>
                            <HeaderText>
                                Back
                            </HeaderText>
                            <SmallText>Please sign-in to continue!</SmallText>
                        </HeaderContainer>
                            :
                            <HeaderContainer>
                                <HeaderText>
                                    Create
                                </HeaderText>
                                <HeaderText>
                                    Account
                                </HeaderText>
                                <SmallText>Please sign-up to continue!</SmallText>
                            </HeaderContainer>
                    }

                </TopContainer>
                <InnerContainer>
                    {
                        active === "signIn" ? <LoginForm /> : <SignUpForm />
                    }
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider >
    );
}

export default AccountBox;
