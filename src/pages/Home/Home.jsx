import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import { Button, Card, Container, Grid } from "@mui/material";
import CardContent from "../../components/card/Card";
import card1 from "../../public/Images/Home/card1.png";
import card2 from "../../public/Images/Home/card2.png";
import card3 from "../../public/Images/Home/card3.png";

import doctor1 from "../../public/Images/Home/doctr1.jpg";
import doctor2 from "../../public/Images/Home/doctr2.jpg";
import doctor3 from "../../public/Images/Home/doctr3.jpg";

//awards
import award1 from "../../public/Images/Awards/award1.jpg";
import award2 from "../../public/Images/Awards/award2.jpg";
import award3 from "../../public/Images/Awards/award3.png";
import award4 from "../../public/Images/Awards/award4.png";
import award5 from "../../public/Images/Awards/award5.jpg";
import award6 from "../../public/Images/Awards/award6.png";
import award7 from "../../public/Images/Awards/award7.jpg";
import award8 from "../../public/Images/Awards/award7.jpg";

//Social media icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

//connect
import appStore from "../../public/Images/Home/app-store-badge.png.png";
import playStore from "../../public/Images/Home/google-play-badge.png.png";

import HomepageImg from "../../public/Images/Home/Link.png";
import Logo from "../../components/Logo/Logo";

const facility = [
  {
    type: "individuals",
    text: "Anytime , anywhere, anything care",
    navigateText: "Get care now",
    image: card1,
  },
  {
    type: "organizations",
    text: "From hospital to home",
    navigateText: "Ways to help",
    image: card2,
  },
  {
    type: "clinicians",
    text: "Quality care starts here",
    navigateText: "Join the team",
    image: card3,
  },
];

const awards = [award1, award2, award3, award4, award5, award6, award7, award8];

const Home = () => {
  return (
    <div style={{ paddingTop: "1rem" }}>
      <Header />
      <div className="center-text">
        <span>
          Prioritizing wellness should <br /> remain accessible to all
        </span>
        <Button variant="outlined">Get care now</Button>
      </div>

      <Container maxWidth="md" sx={{ paddingBottom: "1rem" }}>
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "40px",
          }}
        >
          For your <span style={{ color: "#CA01BE" }}>physical health</span>.
          For your <span style={{ color: "#0FAD26" }}>mental health</span>. For{" "}
          <br />
          <span style={{ color: "#39BEE8" }}>clinicians</span>. For{" "}
          <span style={{ color: "#6240E8" }}>hospitals</span>. For all of it in
          one place. For life.
        </div>

        <div style={{ display: "flex", width: "100%", marginTop: "2rem" }}>
          {facility.map((item) => {
            return <CardContent item={item} />;
          })}
        </div>

        <section style={{ marginTop: "3rem" }}>
          <div className="home_text">
            <span>
              Access to exceptional healthcare, no <br /> matter when or where
            </span>
            <p>
              It all began with a straightforward yet groundbreaking concept:
              Universal access to top-tier healthcare <br /> across the globe,
              tailored to your preferences. And yes, that includes you.
            </p>
            <Button
              variant="outlined"
              sx={{
                color: "#6240E8",
                padding: "4px 38px",
                borderRadius: "20px",
                textTransform: "inherit",
                marginTop: "1rem",
              }}
            >
              About us
            </Button>
          </div>
        </section>

        <section>
          <img
            src={HomepageImg}
            alt=""
            style={{ width: "-webkit-fill-available", marginTop: "3rem" }}
          />
        </section>
      </Container>

      <div className="scroll">
        <div className="text">
          <span>
            <span style={{ display: "flex" }}>
              Our{" "}
              <span style={{ color: "#CA01BE", marginLeft: "8px" }}>
                {" "}
                expert
              </span>{" "}
            </span>
            doctors
          </span>
        </div>
        <div className="image">
          <div className="doct_details">
            <span className="name">Estrella C.</span>
            <span style={{ padding: "0 4px" }}>
              General Medical, Mental Health & Primary360 member
            </span>
          </div>
          <div class="gradient-overlay"></div>
          <img src={doctor1} alt="" />
        </div>
        <div className="image">
          <div className="doct_details">
            <span className="name">Estrella C.</span>
            <span style={{ padding: "0 4px" }}>
              General Medical, Mental Health & Primary360 member
            </span>
          </div>
          <div class="gradient-overlay"></div>
          <img src={doctor2} alt="" />
        </div>
        <div className="image">
          <div className="doct_details">
            <span className="name">Estrella C.</span>
            <span style={{ padding: "0 4px" }}>
              General Medical, Mental Health & Primary360 member
            </span>
          </div>
          <div class="gradient-overlay"></div>
          <img src={doctor3} alt="" />
        </div>
        <div className="image">
          <div className="doct_details">
            <span className="name">Estrella C.</span>
            <span style={{ padding: "0 4px" }}>
              General Medical, Mental Health & Primary360 member
            </span>
          </div>
          <img src={doctor2} alt="" />
        </div>
      </div>

      <Container maxWidth="md">
        <section style={{ marign: "0 22rem" }}>
          <span>
            The testimonials, viewpoints, and declarations reflect the
            individual encounters of those associated with Mcure Health. Results
            and experiences can differ and are distinct for each individual.
            Testimonials are given willingly and without compensation.
          </span>
        </section>
      </Container>

      <section className="recentAwards">
        <span className="">Recent awards</span>
        <div className="awards">
          {awards.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </section>

      <section className="connect-section">
        <Container maxWidth="md">
          <span>This is whole-person care.</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                background: "#6240E8",
                textTransform: "unset",
                padding: "7px 25px",
                fontFamily: "Inter",
              }}
              style={{ borderRadius: "20px", fontSize: "11px" }}
            >
              Get started
            </Button>
            <img
              style={{ width: "5rem", margin: "0 1rem" }}
              src={appStore}
              alt=""
            />
            <img
              style={{
                width: "5rem",
                margin: "0px 1rem 0 0",
                height: "1.77rem",
              }}
              src={playStore}
              alt=""
            />
          </div>
        </Container>
      </section>

      <footer>
        <Container maxWidth="lg" style={{ textAlign: "start" }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <div>
                <Logo />
                <LinkedInIcon style={{ color: "#351F65" }} />
                <FacebookRoundedIcon
                  style={{ color: "#351F65", marginRight: "8px" }}
                />
                <TwitterIcon style={{ color: "#351F65", marginRight: "8px" }} />
                <InstagramIcon
                  style={{ color: "#351F65", marginRight: "8px" }}
                />
                <YouTubeIcon style={{ color: "#351F65", marginRight: "8px" }} />
              </div>
              <div className="address">
                <span>Headquarters</span> <br />
                <span>Mcure Health, Inc.</span> <br />
                <span>2 Manhattanville Road</span> <br />
                <span>Purchase, NY 10577</span>
              </div>
              <div className="address">
                <span>Empowering all people</span> <br />
                <span>everywhere to live their healthiest</span> <br />
                <span>lives by transforming the</span> <br />
                <span>healthcare experience</span>
              </div>
            </Grid>
            <Grid item md={3}>
              <li>
                <ul>For Individuals</ul>
                <ul>Primary Care</ul>
                <ul>Mental Health</ul>
                <ul>Condition Management</ul>
                <ul>Specialty & Wellness</ul>
                <ul>How we Care for Adults</ul>
                <ul>How we Care for Children</ul>
                <ul>How we Care for Seniors</ul>
                <ul>Resources</ul>
                <ul>Contact Us</ul>
                <ul>Blog</ul>
                <ul>FAQs</ul>
              </li>
            </Grid>
            <Grid item md={2}>
              <li>
                <ul>For Organizations</ul>
                <ul>Whole-Person Care</ul>
                <ul>Employers</ul>
                <ul>Health Plans</ul>
                <ul>Hospitals & Health Systems</ul>
                <ul>Resource Center</ul>
              </li>
            </Grid>
            <Grid item md={2}>
              <li>
                <ul>Who we are</ul>
                <ul>About us</ul>
                <ul>Leadership</ul>
                <ul>CSR</ul>
                <ul>Community Guidelines</ul>
              </li>
            </Grid>
            <Grid item md={2}>
              <li>
                <ul>Company</ul>
                <ul>Careers</ul>
                <ul>Industry Events</ul>
                <ul>Newsroom</ul>
                <ul>Investors</ul>
              </li>
            </Grid>
          </Grid>
          <div className="socialMediaIcons">
            <img src={appStore} alt="" />
            <img src={playStore} alt="" />
          </div>
          <hr />
          <span>Notice of policy practices</span> <br />
          <div className="bottom_text">
            <span>Web and Mobile Privacy Policy</span>
            <span>Legal Disclaimer</span>
            <span>
              Notice of Non-Discrimination and Accessibility Requirements
            </span>
            <span>Compliance and Ethics Hotline</span>
            <span>Accessibility Statement</span>
          </div>
        </Container>
        <div className="bottom_colors"> 
        </div>
      </footer>
    </div>
  );
};

export default Home;
