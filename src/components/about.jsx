import React from "react";
import CV from "../img/cv.pdf";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Angular_skill",
          content: "Angular",
          porcentage: "90%",
          value: "90"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "Ruby_skill",
          content: "Ruby",
          porcentage: "55%",
          value: "55"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "60%",
          value: "60"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, I'm Hieu, A full stack developer, it's not too much thing to tell about me, but I'm a humorous guy, always stay positive."
        },
        {
          id: "second-p-about",
          content:
            "An opportunity to work and upgrade oneself, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community. I'm presently expanding my experience in application development. I focus on using my interpersonal skills to build good performance, data structures and algorithms, user experience for the application. I hope to develop skills in motion design and my knowledge of the System, and become a partner with you to build a best system. I'm self-confident you'll find me creative, funny and naturally passionate. I'm a forward thinker, which others may find inspiring when working as a team."
        },
        {
          id: "third-p-about",
          content:
            "I have been working as a fullstack developer. I have a love of design data structures, algorithms, datatbase, and I have lots of experience in the agile team. I loving creating awesome as per my clients's need. I think application performance & user experience when I try to craft something for my clients. Making the system awesome."
        },
        
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--resume" href={CV}> View Resume </a>
                    
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
