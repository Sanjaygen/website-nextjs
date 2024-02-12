"use client"
import React from 'react'
import {
    ClientContainer,
    Header,
    StyledClientContainer,
    StyledDiv
} from './helper-component/client.styled'
import SwipeableTextMobileStepper from './helper-component/clientCarousel'
import { api } from '@/service/backend-api'

export const Client = (props: any) => {

    const clientreviews = props;
    console.log('clientreviews',clientreviews)
   const clientBgColor =  clientreviews[0]?.colors?.theme[0]?.colors?.bgcolor;

    return (
        <>
            <StyledClientContainer style={{ background: `url(${api + clientreviews[0]?.backgroundImage?.data[0]?.attributes?.url})`}}>
                <ClientContainer bgColor={clientBgColor}>
                    <StyledDiv>
                        <Header variant='h3'>{clientreviews[0]?.content}</Header>
                    </StyledDiv>
                    < SwipeableTextMobileStepper />
                </ClientContainer>

            </StyledClientContainer> 
        </>
    )
}
