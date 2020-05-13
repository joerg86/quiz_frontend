import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {LinkContainer} from "react-router-bootstrap";
import {Helmet} from "react-helmet";
import QuizImage from "../quizbg.jpg";
import TeamImage from "../team.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import IubhLogo from "../iubh.png";

export default function HomePage() {
    return (
        <>
            <Image src={TeamImage} fluid className="border-bottom-fat"/>
            <Container className="text-center my-3">
                    <h1 className="my-2">Fragen. Antworten. Teilen.</h1>

                    <p className="lead my-3">
                        <strong>Q-Teams</strong> ist das neue kollaborative Quiz für Studierende. <br/>Lerne gemeinsam im Team und meistere deine nächste Prüfung mit links!
                        <br/>
                        Schau dir unser Video an und leg direkt los!

                    </p>
                    <div className="m-5">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D4W9eQEv9WM" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>
                    </div>
            </Container>
            <Container className="bg-dark text-light text-center p-5 border-top-fat" fluid>
                <div>
                    Ein Studienprojekt im Kurs ISEF Projekt Software-Engineering.
                </div>
                <Image className="col-md-4" src={IubhLogo}/>
                <div className="lead">Made with <i className="fas fa-heart"></i> by Daniel, Holger, Jörg and Max.</div>
                <div className="mt-5">
                    &copy; 2020 Q-Teams
                </div>
            </Container>
        </>
    )
}