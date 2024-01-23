"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
    Anchor,
    AvatherStyled,
    ButtonStyled,
    ClientImg,
    ClientTitle,
    LabelText,
    MobileStepperStyled,
    TextStyled
} from './client.styled';
import { Avatar, Stack, Typography } from '@mui/material';
import { deepPurple, green, pink } from '@mui/material/colors';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';


const images = [
    {
        label: 'Few months back I ordered paper lids in Gurgaon from Ishwara. I was very happy and satisfied after receiving them. No leakage issue, perfect fitting, perfect size. Best paper lid I have bought so far. ',
        avatar: <Avatar alt="R" src="/static/images/avatar/2.jpg" />,
        name: "Rinku Sharma",
    },
    {
        label: 'Popcorns are must while watching movies. These small size tubs spoil the whole movie mood. I ordered paper tubs in Gurgaon from ishwara. Their sizes are perfect for the popcorn. These tubs can also be used for storage.',
        avatar: <Avatar alt="H" src={deepPurple[500]} />,
        name: "Himanshu giri",
    },

    {
        label: 'If you are looking to order paper cups in Delhi NCR, then Ishwara is the best place for you to go.Their paper cups are of high quality, high durability and no spoilage. Next time too, if I have to buy any paper products, I will buy from Ishwara',
        avatar: <Avatar alt="P" src={green[500]} />,
        name: "Puneet pathak",
    },
    {
        label: 'I love buying pastries. I usually buy every weekend. But every time when I buy, the icing mostly get spoiled. This time I received pastries in paper boxes in Noida of brand Ishwara. These boxes were so good. They were attractive as well as easy to carry. ',
        avatar: <Avatar alt="P" src={pink[500]} />,
        name: "Prateek joshi",
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step: any) => {
        console.log('Clicked step:', step);
        console.log('Current activeStep:', activeStep);
        setActiveStep(step);
    };
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return (
        <TextStyled>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={(index) => handleStepChange(index)}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <Box key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Stack direction="column" alignItems="center" spacing={2}>
                                <LabelText variant='body1' paragraph>{step.label}</LabelText>
                                <ClientImg>
                                    <AvatherStyled>
                                        {step.avatar}
                                        <ClientTitle>
                                            <Anchor href='#'>{step.name}</Anchor>
                                            <Typography variant="caption" display="block">user</Typography>
                                        </ClientTitle>
                                    </AvatherStyled>
                                </ClientImg>
                            </Stack>
                        ) : null}
                    </Box>
                ))}
            </SwipeableViews>
            <MobileStepperStyled
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                variant="dots"
                nextButton={
                    < ButtonStyled  size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}>
                        <KeyboardArrowRight />
                    </ ButtonStyled >
                  }
                  backButton={
                    < ButtonStyled  size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                    </ ButtonStyled >
                  }
            />
        </TextStyled>
    );
}
export default SwipeableTextMobileStepper;