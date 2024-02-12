"use client"
import React from 'react'
import {
    ClientContainer,
    Header,
    StyledClientContainer,
    StyledDiv
} from './helper-component/client.styled'
import SwipeableTextMobileStepper from './helper-component/clientCarousel'
import { useQuery } from '@apollo/client'
import { QUERY } from '@/pages/homepage/query'
import { api } from '@/service/backend-api'

export const Client = (props: any) => {

    const clientreviews = props;
    console.log('clientreviews',clientreviews)

    return (
        <>
            <StyledClientContainer style={{ background: `url(${api + clientreviews[0]?.backgroundImage?.data[0]?.attributes?.url})`}}>
                <ClientContainer style={{ backgroundColor: `${clientreviews[0]?.colors?.theme[0]?.colors?.bgcolor}`}}>
                    <StyledDiv>
                        <Header variant='h3'>{clientreviews[0]?.content}</Header>
                    </StyledDiv>
                    < SwipeableTextMobileStepper />
                </ClientContainer>

            </StyledClientContainer> 
        </>
    )
}
