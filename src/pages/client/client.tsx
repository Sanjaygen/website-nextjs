"use client"
import React from 'react'
import {
    ClientContainer,
    Header,
    StyledClientContainer,
    StyledDiv
} from './helper-component/client.styled'
import SwipeableTextMobileStepper from './helper-component/clientCarousel'

export const Client = () => {

    return (
        <>
            <StyledClientContainer>
                <ClientContainer>
                    <StyledDiv>
                        <Header variant='h3'>WHAT'S CLIENT SAY?</Header>
                    </StyledDiv>
                    < SwipeableTextMobileStepper />
                </ClientContainer>

            </StyledClientContainer>
        </>
    )
}
