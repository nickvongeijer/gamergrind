import React from 'react';


class Feature extends React.Component {
  render() {

  	return (
  		<section id="feature" className="feature">
         <div className="feature-decor">
            <div className="feature-circle1"><img src="assets/images/feature2.png" alt="" /></div>
         </div>
         <div className="container">
            <div className="row">
               <div className="feature-phone">
                  <img src="assets/images/222.png" className="img-fluid" alt="" />
               </div>
               <div className="offset-lg-4 col-lg-8">
                  <div className="row">
                     <div className="col-sm-12 mrgn-md-top">
                        <h2 className="title">features of<span> Gamers Grind</span></h2>
                     </div>
                     <div className="col-12 col-md-6">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/1.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Matchmaking service</h3>
                              </div>
                              <div>
                                 <p>A faster and better process of matching two or more gamers together.  Connect with people just like you by just selecting a specific game and wage amount. Eliminating excruciating long periods of wait time.</p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/3.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Rematch</h3>
                              </div>
                              <div>
                                 <p>A second chance to play against the same player or team. This feature gives the gamers an opportunity to double up their wage amount. Multiplying the wage amount by two.
</p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/5.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Gamers Grind Trial (subscription)</h3>
                              </div>
                              <div>
                                 <p>Two components to the Gamer’s Grind Trial, one is available to all gamers and the other is available to purchase in the “shop” page. Introducing a new and fun way of earning more money!
</p>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="col-12 col-md-6 sm-m-top">
                        <ul className="feature-style">
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/2.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Challenges</h3>
                              </div>
                              <div>
                                 <p>Introducing a new way to play games! Player’s will have a limited time to complete a specific task (challenge) in certain games. 1st place will have earned cash prizes or gaming related gear! There will be daily, weekly, monthly challenges, some will require tokens to participate.
</p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/4.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Ranking system</h3>
                              </div>
                              <div>
                                 <p>A position on a rating based on money earned (won). This will pair up gamers with other gamers related to their level.</p>
                              </div>
                           </li>
                           <li>
                              <div className="feature-icon">
                                 <img src="assets/images/icon/6.png" alt="icon" />
                              </div>
                              <div className="feature-subtitle">
                                 <h3>Leaderboards</h3>
                              </div>
                              <div>
                                 <p>A board displaying the names of leading gamers that earn the most money. Another one displaying the names of leading gamers with the best record. </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default Feature;
