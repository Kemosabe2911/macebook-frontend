import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Profile.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Card from "../../components/Card/Card";
import Experience from "../../components/Experience/Experience";
import Suggestions from "../../components/Suggestions/Suggestions";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import cover from "../../assets/images/icons/cover.jpg";
import profileimg from "../../assets/images/icons/profile.webp";
import postImg from "../../assets/images/icons/postImg.png";
import profilepic from "../../assets/images/icons/UserProfile.png";
import mail from "../../assets/images/icons/mail.svg";
import phone from "../../assets/images/icons/phone.svg";
import web from "../../assets/images/icons/web.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import fb from "../../assets/images/icons/fb.svg";
import github from "../../assets/images/icons/github.svg";
import edit from "../../assets/images/icons/edit.svg";
import arrow from "../../assets/images/icons/arrow.png";
import clogo from "../../assets/images/icons/company-logo.png";

class Profile extends Component {
    state = {
        username: "John Doe",
        cover: { cover },
        profileimg: { profileimg },
        position: "Senior SWE at Apple Inc.",
        location: "San Fransisco, CA",
        batch: 14,
        dept: "CSE",
        conn: 2000,
        self: true,
        skills: ["HTML", "CSS", "REACTJS", "NodeJS"],
        posts: [
            {
                poster: "Ruben Lubin",
                posterprofile: { profilepic },
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: { postImg },
                likes: "3k",
                comments: "1k",
                profilepic: { profilepic },
            },
            {
                poster: "Ruben Lubin",
                posterprofile: { profilepic },
                designation: "poster designation",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
                hashtags: "#Hashtags   #lorem_epsum",
                image: { postImg },
                likes: "3k",
                comments: "1k",
                profilepic: { profilepic },
            },
        ],
        exp: [
            {
                logo: { clogo },
                name: "Apple Inc",
                duration: "Oct 2019- Current",
                type: "Fulltime",
                position: "Senior Software Engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            },
            {
                logo: { clogo },
                name: "Apple Inc",
                duration: "Oct 2019- Current",
                type: "Fulltime",
                position: "Senior Software Engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            },
            {
                logo: { clogo },
                name: "Apple Inc",
                duration: "Oct 2019- Current",
                type: "Fulltime",
                position: "Senior Software Engineer",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            },
        ],
        acc: [
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
            "Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum",
        ],
    };

    render() {
        return (
            <div className="Profile">
                <Header active="profile" />
                <div className="container">
                    <ProfileHeader
                        user={this.state.username}
                        cover={this.state.cover}
                        profileimg={this.state.profileimg}
                        position={this.state.position}
                        location={this.state.location}
                        batch={this.state.batch}
                        dept={this.state.dept}
                        conn={this.state.conn}
                        self={this.state.self}
                    />
                    {/* <div className="profile-bgimgContainer">
            <img src={cover} alt="Background Image Not Loaded"></img>
          </div>
          <div className="profile-header">
            <div className="profile-header-section-1">
              <div className="profile-imgContainer">
                <img src={profileimg} alt="User Img"></img>
              </div>
            </div>
            <div className="profile-header-desc">
              <div className="profile-header-section-2">
                <h2>USER NAME</h2>
                <div className="profile-userDetails">
                  <span className="position">Position</span>
                  <span className="batch">Location . Batch of '14 . CSE</span>
                  <span className="userConnections">Connections</span>
                </div>
              </div>
              <div className="profile-header-section-3">
                <div className="profile-header-btnContainer">
                  <div className="profile-header-userButtons">
                    <button className="profile-header-btn1">Settings</button>
                    <button className="profile-header-btn2">Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                    <div className="profile-body">
                        <div className="profile-leftpanel">
                            <div className="card-container">
                                <Card>
                                    <div className="card-header">
                                        <h3>About</h3>
                                        <div style={{ display: this.state.self ? "block" : "none" }}>
                                            <img src={edit} alt="Edit"></img>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy
                                    </p>
                                </Card>
                            </div>
                            <div className="card-container">
                                <Card>
                                    <div className="card-header">
                                        <h3>Skills</h3>
                                        <div style={{ display: this.state.self ? "block" : "none" }}>
                                            <img src={edit} alt="Edit"></img>
                                        </div>
                                    </div>
                                    <div className="profile-skillsContainer">
                                        {this.state.skills.map((skill) => (
                                            <span className="profile-skills">{skill}</span>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                            <div className="card-container" style={{ display: this.state.self ? "block" : "none" }}>
                                <Card>
                                    <div className="profile-applicationContainer">
                                        <div className="profile-appCount">
                                            <div className="profile-appContent">
                                                <h2>3</h2>
                                                <p>New Applications</p>
                                            </div>
                                            <div className="profile-appContent">
                                                <h2>42</h2>
                                                <p>Total Applications</p>
                                            </div>
                                        </div>
                                        <div className="profile-dashboardbtnContainer">
                                            <button>Go to Dashboard</button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="card-container">
                                <Card>
                                    <Suggestions></Suggestions>
                                </Card>
                            </div>
                        </div>
                        <div className="profile-rightpanel">
                            <div className="profile-posts-section">
                                <h2>My Posts</h2>
                                <div className="profile-postContainer">
                                    {this.state.posts.map((post) => (
                                        <div className="profile-post">
                                            <Card>
                                                <ProfilePost
                                                    poster={post.poster}
                                                    posterprofile={profilepic}
                                                    designation={post.designation}
                                                    content={post.content}
                                                    hashtags={post.hashtags}
                                                    image={postImg}
                                                    likes={post.likes}
                                                    comments={post.comments}
                                                    profilepic={profilepic}
                                                ></ProfilePost>
                                            </Card>
                                        </div>
                                    ))}
                                    {/* <div className="profile-post">
                      <Card>
                        <ProfilePost 
                          poster="Ruben Lubin"
                          posterprofile={profilepic}
                          designation="poster designation"
                          content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum"
                          hashtags="#Hashtags   #lorem_epsum"
                          image={postImg}
                          likes="3k"
                          comments="1k"
                          profilepic={profilepic}></ProfilePost>
                      </Card>
                    </div>
                    <div className="profile-post">
                      <Card>
                        <ProfilePost 
                          poster="Ruben Lubin"
                          posterprofile={profilepic}
                          designation="poster designation"
                          content="Ut enim ad minim veniam, quis nostrud exercitatioul lam co laboris nisi ut aliquip. Hashtags   lorem_epsum"
                          hashtags="#Hashtags   #lorem_epsum"
                          image={postImg}
                          likes="3k"
                          comments="1k"
                          profilepic={profilepic}></ProfilePost>
                      </Card>
                    </div> */}
                                    <Link to="/posts">
                                        <div className="arrow">
                                            <img src={arrow} alt="View Posts"></img>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="profile-experience">
                                <div className="section-headers">
                                    <h2>Experience</h2>
                                    <span style={{ display: this.state.self ? "block" : "none" }}>
                                        <img src={edit} alt="Edit"></img>
                                    </span>
                                </div>
                                {this.state.exp.map((exp) => (
                                    <Experience
                                        logo={clogo}
                                        name={exp.name}
                                        duration={exp.duration}
                                        type={exp.type}
                                        position={exp.position}
                                        desc={exp.desc}
                                    />
                                ))}
                                {/* <Experience 
                  logo={clogo}
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
                <Experience 
                  logo={clogo}
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
                <Experience 
                  logo={clogo}
                  name="Apple Inc" 
                  duration="Oct 2019- Current"
                  type="Fulltime"
                  position="Senior Software Engineer"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                /> */}
                            </div>
                            <div className="profile-accom">
                                <div className="section-headers">
                                    <h2>Accomplishments</h2>
                                    <span style={{ display: this.state.self ? "block" : "none" }}>
                                        <img src={edit} alt="Edit"></img>
                                    </span>
                                </div>
                                <div className="acc-row">
                                    {this.state.acc.map((acc) => (
                                        <span className="acc-data">{acc}</span>
                                    ))}
                                    {/* <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                  <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                  <span className="acc-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> */}
                                </div>
                            </div>
                            <div className="profile-contact">
                                <div className="section-headers">
                                    <h2>Contact Info</h2>
                                    <span style={{ display: this.state.self ? "block" : "none" }}>
                                        <img src={edit} alt="Edit"></img>
                                    </span>
                                </div>
                                <div className="contact-section">
                                    <div className="contact-content">
                                        <img src={mail} alt="mail"></img>
                                        <p>johndoe@email.com</p>
                                    </div>
                                    <div className="contact-content">
                                        <img src={phone} alt="mail"></img>
                                        <p>+91 123456789</p>
                                    </div>
                                    <div className="contact-content">
                                        <img src={web} alt="mail"></img>
                                        <p>johndoe.com</p>
                                    </div>
                                    <div className="contact-content">
                                        <img src={linkedin} alt="mail"></img>
                                        <p>linkedin.com/in/johndoe</p>
                                    </div>
                                    <div className="contact-content">
                                        <img src={fb} alt="mail"></img>
                                        <p>John Doe</p>
                                    </div>
                                    <div className="contact-content">
                                        <img src={github} alt="mail"></img>
                                        <p>github.com/johndoe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
