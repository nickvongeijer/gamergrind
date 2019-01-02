import React from 'react';


class About extends React.Component {
  render() {

  	return (
  		<section id="about" className="about">
         <div className="about-decor">
            <div className="about-circle1"><img src="assets/images/team1.png" alt="team1" /></div>
            <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="banner1" /></div>
         </div>
         <div className="container">
            <div className="row ">
               <div className="col-md-5">
                  <div className="about-contain">
                     <div>
                        <br />
                        <br />
                        <h2 className="title">about <span>gamers grind</span></h2>
                        <p className="caption-about">Gamer’s Grind will allow video game enthusiasts a chance to win cash and prizes when playing the video games they love. It will have challenges daily, weekly, and monthly that once completed, will earn video gamers cash prizes and free gear from Gamer’s Grind. Also takes the concept of Play-To-Win and simplifies it.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-7 d-medium-none">
                  <div className="about-right">
                     <div className="about-phone">
                        <img  src="assets/images/aboutus.png" className="img-fluid" alt="aboutus" />
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
