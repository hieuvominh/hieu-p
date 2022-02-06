import React from "react";
import CustomModal from "./modal";
import { Card, Row, Col } from 'antd';

import dxc from "../img/svg/dxc.svg"
import dlvr from "../img/dlvr.png"
import hubble from "../img/svg/hubble.png"
import ou from "../img/ou.png"


const { Meta } = Card;

class Portfolio extends React.Component {
  state = {
    isModalOpen: false,
    title: '',
    description: '',
  }

  onCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { title, description, isModalOpen } = this.state;
    return (
      <>
        <CustomModal isModalOpen={isModalOpen} title={title} description={description} closeModal={this.onCloseModal}></CustomModal>
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h4 className="title-a">Education</h4>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <Row style={{ padding: '10px'}}>
              <Col span={12}>
                <Card 
                  hoverable
                  onClick={() =>  {this.setState(
                    {
                      isModalOpen: true, 
                      title:"Computer Science @ HCMC Open University",
                      description:"05/2013 - 03/2018"
                    }
                  )}}
                  style={{ width: 500, padding: '25px' }}
                  cover={
                    <img
                      className="fit"
                      width="450"
                      height="270"
                      alt="example"
                      src={ou}
                    />
                  }
                >
                  <Meta
                    title="Computer Science @ HCMC Open University"
                    description="05/2013 - 03/2018"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h4 className="title-a">Experience</h4>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <Row style={{ padding: '10px'}}>
              <Col span={12}>
                <Card
                  hoverable
                  onClick={() =>  {this.setState(
                    {
                      isModalOpen: true, 
                      title:"Associate Software Engineer @ DXC Technology",
                      description:"I join Fresher Program at DXC in 9/2017 and passed. After that I join to the MISR team, an insurance outsourcing for an Egypt client. I work as front-end developer in MISR to 05/2018, then I change to mobility team in 1 month, after that I back to the web team and work as full stack developer."
                    }
                  )}}
                  style={{ width: 500, padding: '25px' }}
                  cover={
                    <img
                      alt="example"
                      src={dxc}
                    />
                  }
                >
                  <Meta
                    title="Associate Software Engineer @ DXC Technology"
                    description="09/2017 - 03/2019"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card 
                  hoverable
                  onClick={() =>  {this.setState(
                    {
                      isModalOpen: true, 
                      title:"Software Engineer @ Deliveree On-Demand Logistics",
                      description:"Deliveree is a logistics company on shipping service, I just work on Deliveree nearly 2 months and work as full stack developer."
                    }
                  )}}
                  style={{ width: 500, padding: '25px' }}
                  cover={
                    <img
                      className="fit"
                      width="450"
                      height="270"
                      alt="example"
                      src={dlvr}
                    />
                  }
                >
                  <Meta
                    title="Software Engineer @ Deliveree On-Demand Logistics"
                    description="03/2019 - 04/2019"
                  />
                </Card>
              </Col>
              
            </Row>
            <Row style={{ padding: '10px'}}>
            <Col span={12}>
                <Card
                  hoverable
                  onClick={() =>  {this.setState(
                    {
                      isModalOpen: true, 
                      title:"Software Engineer @ Hubble pte. ltd",
                      description:"After leave Deliveree, I join Hubble a startup to help construction companies manage their project and resource. I'm onboarding with Hubble when they are starting to build a team at HCMC. \n When I just start working at Hubble, the time Vietnam team starting to build a new project to help construction companies can manage safety and quality of their workers. After done that I join the 'Workforces team' till today, my main role is as a frontend engineer to implement and maintain the whole system."
                    }
                  )}}
                  style={{ width: 500, padding: '25px' }}
                  cover={
                    <img
                      className="fit"
                      width="450"
                      height="270"
                      alt="example"
                      src={hubble}
                    />
                  }
                >
                  <Meta
                    title="Software Engineer @ Hubble pte. ltd"
                    description="04/2019 - now"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
