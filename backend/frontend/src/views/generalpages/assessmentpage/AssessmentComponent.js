import React, { useState, useEffect, useRef } from 'react';

import { Link, withRouter, Redirect } from "react-router-dom";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Container,
    Col,
    Collapse,
    Input,
} from "reactstrap";
import axios from 'axios';

import 'react-circular-progressbar/dist/styles.css';
import tzahalpng from "assets/img/unitsimg/defaultTzahal.png";

function AssessmentComponent(props) {

    const CheckImgPath = (englishname) => {
        try {
            require(`assets/img/unitsimg/${englishname}.png`)
        }
        catch (err) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        // init();
    }, [])

    return (
        <Col xs={12} md={3} style={{ textAlign: 'center', padding: '0px' }}>
            <a href={"http://localhost:8000/api/downloadFilePikod?collec=assessment&id=" + props.assessment._id} target="_blank">
                <div>
                    {props.assessment.englishname ? CheckImgPath(props.assessment.englishname) == true ? <img style={{ height: '300px', width: '300px' }} src={require(`assets/img/unitsimg/${props.assessment.englishname}.png`)}></img> : <img style={{ height: '300px', width: '300px' }} src={tzahalpng}></img> : <img style={{ height: '300px', width: '300px' }} src={tzahalpng}></img>}
                </div>
            </a>
            <h1>{props.pikods.map((pikod, index) => (pikod._id == props.assessment.pikod ? pikod.name : null))}</h1>
        </Col>
    );
}
export default withRouter(AssessmentComponent);