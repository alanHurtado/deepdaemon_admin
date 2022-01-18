import React from 'react'


//imagenes fijas
import join from "../../styles/assets/img/sitio/mastermind.png";
import logo from "../../styles/assets/img/sitio/deepdaemon.png";


import "../../styles/assets/icomoon/icomoon.css"; //https://icomoon.io/#preview-free checar si se usa 
import "../../styles/DeepDaemon.css";
import { Container, Nav } from 'react-bootstrap';
import {Row, Col, Button, Image} from "react-bootstrap";
import { Tab } from "react-bootstrap";
// import { Tabs } from "react-bootstrap";


export const General = ({id}) => {
    return (
        <div className="DeepDaemon.css">
        <header className='dd_header' id ='Home'>
            <img src={logo} className="ddlogo" alt="logo" />    
            <h1>DeepDaemon</h1>
            <hr />
            <h2>Comunidad de conocimiento</h2>
        </header>

        <Container className="section" id='Nosotros'>
            <h1>Un poco sobre nosotros</h1>
            <hr />
            <p>
            Somos un grupo de trabajo que busca vincular el desarrollo
            científico con el desarrollo de soluciones industriales para generar
            tecnología de punta y capital humano de alto impacto en el ámbito
            académico e industrial.
            </p>
        </Container>

        <Container className="section">
        <Row>
          <Col>
            <span className="icon icon-eye " />
            <h2>Visión</h2>
            <p>
              Que el grupo de trabajo y sus integrantes sean un referente a
              nivel mundial en el desarrollo de tecnologías de punta a nivel
              científico, académico y comercial, capacitando a capital humano
              de excelente calidad y desarrollando proyectos con alto impacto
              comercial y social.
            </p>
          </Col>
          <Col>
            <span className="icon icon-quill" />
            <h2>Misión</h2>
            <p>
              Desarrollar sistemas inteligentes basados en redes neuronales
              profundas que puedan ser distribuidos a usuarios reales, con el
              objetivo de favorecer una educación integral a los estudiantes
              del grupo de trabajo.
            </p>
          </Col>
          <Col>
            <span className="icon icon-heart" />
            <h2>Valores</h2>
            <p>
              Intregridad, Confianza, Comunicaciones honestas y abiertas,
              Pasión por trabajar para hacer un cambio en el mundo.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="academy">
        <Container className="section white">
          <h1>La Investigación no solo es académica</h1>
          <hr />
          <p>
            Por eso creamos un grupo de investigación que tiene como objetivo
            usar la inteligencia artificial para resolver problemas de la
            industria.
          </p>
        </Container>
      </Container>

      <Container fluid className="section portfolio" id='Proyectos'>
        <h1>Proyectos increibles</h1>

          <Tab.Container defaultActiveKey="inDevelop">
            <Nav className="projects">
              <Nav.Item><Nav.Link eventKey="inDevelop"><h1>En desarrollo</h1></Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="article"><h1>Concluidos</h1></Nav.Link></Nav.Item>
            </Nav>
            <hr />
            <Tab.Content>
                {/* <Tab.Pane eventKey="inDevelop"> <Projects state="inDevelop" callback={this.openProject.bind(this)} /></Tab.Pane> */}
                {/* <Tab.Pane eventKey="article"> <Projects state="finish" callback={this.openProject.bind(this)} /> </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </Container>

        <Container className="section">
          <Row>
            <Col md="auto">
              <Image src={join} style={{ height: "320px" }} fluid />
            </Col>
            <Col>
              <h1>Únete al equipo!</h1>
              <p>
                Si eres estudiante de Licenciatura o Posgrado en el IPN, o estás
                interesdo en complementar tu educación con un postgrado en el
                Centro de Investigación en Computación, y quieres desarrollar
                proyectos de IA aplicados a problemas reales o industriales, te
                estamos buscando.
              </p>
              <Button variant="secondary">Contáctanos</Button>
            </Col>
          </Row>
        </Container>
        
        <Container fluid className="team_separator">
          <Container className="section white">
            <h1>Inteligencia colectiva</h1>
            <hr />
            <h2>
              Alumnos e Investigadores colaborando para resolver problemas
              multidisciplinarios.
            </h2>
          </Container>
        </Container>

        <Container fluid className="section" id='Lideres'>
          <h1>Los líderes</h1>
          <hr />
          {/* <Team status="leader" callback={this.updateModal.bind(this)} /> */}
        </Container>
        <Container fluid className="section" id='Equipo'>
          {/* <TeamTabs callback={this.updateModal.bind(this)} /> */}
        </Container>

        <Container fluid className="section contact white" id={id}>
          <h1>Hecho en la Ciudad de México</h1>
          <hr />
          <p>
            <span className="icon icon-home" />
            Av. Juan de Dios Bátiz, Esq. Miguel Othón de Mendizábal,
            <br />
            Col. Nueva Industrial Vallejo, Delegación Gustavo A. Madero. CDMX
          </p>
          <p>
            <span className="icon icon-envelop" />
            <a href="mailto:contacto@deepdaemon.org">
              contacto@deepdaemon.org{" "}
            </a>
          </p>
          <p>
            <a href="https://twitter.com">
              <span className="icon icon-twitter" />
            </a>
            |
            <a href="https://www.facebook.com">
              <span className="icon icon-facebook" />
            </a>
          </p>
          <hr />
          <footer>&copy; DeepDaemon 2019</footer>
        </Container>
        {/* <ModalMember
          ref={ip => {
            this.membermodal = ip;
            console.log(this.membermodal);
          }}
        />
        <ModalProject
          ref={ip => {
            this.projectmodal = ip;
          }}
        /> */}



      </div>
    )   
}
