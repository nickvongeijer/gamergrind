import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../../store/actions/blogActions'

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('submit')
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    render() {
        console.log('create post');
        return (
          <div>
            <section id="contact" className="contact">
                <div className="contact-decor">
                    <div className="contact-circle1"><img src="assets/images/main-banner12.png" alt="" /></div>
                    <div className="contact-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            <div className="contact-us">
                                <div className="w-100">
                                    <h2 className="title"><span>Create </span>Post</h2>
                                    <form className="theme-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 md-fgrup-margin">
                                                <input type="text" className="form-control" id="title" placeholder="Title" required="required" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-sm-12 col-md-6 md-fgrup-margin">
                                                <input type="text" className="form-control" id="author" placeholder="Author" required="required" onChange={this.handleChange} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="image" placeholder="IMAGE UPLOAD" required="required" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="content" rows="4" placeholder="Content" required="required" onChange={this.handleChange} ></textarea>
                                    </div>
                                    <div className="form-button">
                                        <button type="submit" className="btn btn-custom theme-color">Post</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost)
