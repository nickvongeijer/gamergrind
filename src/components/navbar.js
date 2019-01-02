import React from 'react';

class Navbar extends React.Component {
  render() {
  	return (
  		<nav className="navbar navbar-expand-lg navbar-dark theme-nav fixed-top">
		   <div id="navbar-main" className="container">
		      <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" /></a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		         <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
		         	<ul className="navbar-nav ml-auto" id="mymenu">
			            <li className="nav-item">
			               <a className="nav-link" href="#home">Home</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#about">about</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#feature">features</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#screenshot">screenshot</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#team">team</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#contact" data-menuanchor="contact">contact us</a>
			            </li>

		         	</ul>
		      </div>
		   </div>
		</nav>
  	);
  }
}
/*
<li className="nav-item dropdown">
   <a className="nav-link dropdown-toggle" href="#blog"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">blog</a>
   <ul className="dropdown-menu">
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-list`} target="_blank">blog list</a></li>
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-details`} target="_blank">blog details</a></li>
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-leftside`} target="_blank">leftsidebar</a></li>
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-rightside`} target="_blank">rightsidebar</a></li>
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-left-sidebar`} target="_blank">details leftsidebar</a></li>
     <li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-right-sidebar`} target="_blank">details rightsidebar</a></li>
   </ul>
</li>
*/


export default Navbar;
