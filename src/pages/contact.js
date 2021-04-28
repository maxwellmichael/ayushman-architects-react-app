import React, { Component } from 'react';

class ContactPage extends Component {
    render() { 
        return ( 
            <React.Fragment>
               <div className="container">
  <section className="section1">
    <div className="sec1title">
      <h1>Get in touch</h1>
    </div>	
  </section>
  <section className="section2"> 
    <div className="contactform">
      <h5>Drop us a line...</h5>
      <form action="#">
        <label htmlFor="firstname">
          <i className="cntfrmicn fa fa-user" />
          <input name="firstname" className="form-fields" type="text" />
        </label>
        <label htmlFor="email">
          <i className="cntfrmicn fa fa-envelope" />
          <input name="email" className="form-fields" type="text" />
        </label>
        <label htmlFor="contact">
          <i className="cntfrmicn fa fa-phone" />
          <input name="contact" className="form-fields" type="text" />
        </label>
        <label htmlFor="textarea">
          <i className="cntfrmicn fa fa-comment" />
          <textarea className="form-fields" name="textarea" id cols={30} rows={10} defaultValue={""} />
        </label>
        <button className="form-fields button" value="Send" type="submit">Send <i className="fa fa-paper-plane" /></button>
      </form>
    </div>
    <div className="contmap" style={{overflow: 'hidden', height: 550, width: '100%'}}><div id="gmap_canvas" style={{height: '100%', width: '100%'}} /><div><small><a href="http://embedgooglemaps.com">									embed google maps							</a></small></div><div><small><a href="http://freedirectorysubmissionsites.com/">free web directories</a></small></div><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div>
  </section>
</div>

            </React.Fragment>
         );
    }
}
 
export default ContactPage;