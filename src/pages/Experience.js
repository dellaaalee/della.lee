import './Experience.css';
import { Container, Col, Row } from 'react-bootstrap';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { createTheme } from '@mui/material';
// import { purple } from '@mui/material/colors';


export const Experience = () => {
    const [value, setValue] = useState(0);

    const handleChange = (even, value) => {
        setValue(value)
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#dc6c60',
            },
            secondary: {
                main: '#dc6c60',
            },
        },
    });

    return (
        <Container className='homeExperience'>
            <Row className='d'>
                <Col className='experienceTitle' justifyContent="center">
                    01. Experience
                </Col>
            </Row>
            <Row className='projectRow'>
                <Box>
                    <Box sx={{display: 'flex'}}>
                        <Tabs value={value} onChange={handleChange} centered orientation='vertical' 
                            textColor='secondary' indicatorColor='secondary'>
                            <Tab sx={{
                                fontFaimly: 'AmbraBlack',
                                }}
                                label='CAPITAL ONE' />
                            <Tab sx={{fontFaimly: 'AmbraBlack',}} label='SFFD' />
                            <Tab sx={{fontFaimly: 'AmbraBlack',}} label='UC BERKELEY' />
                        </Tabs>
                        <Box sx={{margin: 2}}>
                            {value === 0 && (
                            <div className='experienceBox'>
                                <Row className='experiencePos'>
                                    Software Engineer Intern
                                    {/* @ Capital One */}
                                </Row>
                                <Row className='experiencePos'>
                                    @ Capital One
                                </Row>
                                <Row className='experienceDate'>
                                    June 2023 - August 2023
                                </Row>
                                <Row className='experienceDesc'>
                                    <ul>
                                        <li>
                                        10 week program comprised of 5 week development bootcamp and 
                                        5 week intern project
                                        </li>
                                        <li>
                                        Participated in essential developer workshops for React, 
                                        GoLang, Git, AWS, and Machine Learning
                                        </li>
                                        <li>
                                        implemented google chrome extension for Capital One internal
                                        documentation using React and Go
                                        </li>
                                    </ul>
                                </Row> 
                            </div>

                            )}
                            {value === 1 && (
                            <div className='experienceBox'>
                                <Row className='experiencePos'>
                                    Data Analyst Intern
                                </Row>
                                <Row className='experiencePos'>
                                    @ San Franciso Fire Department
                                </Row>
                                <Row className='experienceDate'>
                                    August 2022 - December 2022
                                </Row>
                                <Row className='experienceDesc'>
                                    <ul>
                                        <li>
                                            worked with San Franciso Fire Department to improve
                                            SFFD Community Paramedicine, leveraging data for insight
                                        </li>
                                        <li>
                                            used SFFD paramedic team such as ambulance incidence data, call time,
                                            call types, staffing data, geographic data to analyze XXM or incidence where
                                            there's no ambulance left to dispatch
                                        </li>
                                        <li>
                                            created report to analyze and predict XXM, which will be used
                                            to make better department system to reduce the number of XXM
                                        </li>
                                        <li>
                                            present our findings to Fire Department stakeholder for policy making
                                            and system changes
                                        </li>
                                    </ul>

                                </Row>

                            </div>
                                
                            )}
                            {value === 2 && (
                            <div className='experienceBox'>
                                <Row className='experiencePos'>
                                    Academic Intern
                                </Row>
                                <Row className='experiencePos'>
                                    @ University of California, Berkeley
                                </Row>
                                <Row className='experienceDate'>
                                    May 2022 - August 2022
                                </Row>
                                <Row className='experienceDesc'>
                                    <ul>
                                        <li>
                                            assisted student lab following UC Berkeley's data 
                                            structure courses covering basic algorithms, runtime analysis, 
                                            and data structure fundamentals

                                        </li>
                                    
                                    </ul>
                                </Row>

                            </div>
                            )}

                        </Box>
                    </Box>

                </Box>


            
            </Row>


        </Container>
    )
}