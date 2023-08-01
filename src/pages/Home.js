import '../pages/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import  workImg  from '../assets/img/work_img.png';
import Typewriter from 'typewriter-effect';

import { Experience } from '../pages/Experience.js';
import { Project } from '../pages/Project';

export const Home = () => {
    return (
        <Container>
        <Row className='intro'>
            <Col className='introWriting col-8'>
            <Row className='typewriter'>
                <Typewriter
                    options={{
                    strings: ['hi, my name is'],
                    autoStart: true,
                    loop: true,
                    }}
                />
            </Row>
            <Row className='myname'>
                DELLA LEE
            </Row>
            <Row className='desc'>
                I'm a rising junior at UC Berkeley studying computer science and data science.
                This summer I'm interning at Capital One as a software engineer intern.
            </Row>
            <Row className='desc'>
                I'm passionate about diversity in STEM
            </Row>

            </Col>

            <Col className='introImg col-3'>
                <img src= { workImg } style={{height: 460, width: 230}}
                alt="capitalone work illustration" />
            </Col>
        </Row>
        <Experience />
        <Project />
        </Container>
    )
}