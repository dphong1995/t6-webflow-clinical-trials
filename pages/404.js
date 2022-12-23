import Header from "../components/header";

export default function Custom404() {
  return (
    <>
      <Header/>
      <section className="utility-page-wrap">
        <div data-w-id="5e86adabd2a28d2afbf80eae00000000000b" style={{
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          opacity: 1,
          transformStyle: 'preserve-3d'
        }} className="card _404 w-form">
          <div className="_404-title">404</div>
          <h2>Page Not Found</h2><p className="paragraph _404">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis semper convallis euismod vestibulum in pharetra.<br/></p>
          <div className="_2-buttons"><a href="/post-a-job" className="button-primary _2-buttons-button w-button">Post a
            job</a><a href="/" className="button-secondary _2-buttons-button w-button">See all jobs</a></div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-default w-container">
          <div data-w-id="41920341-92b7-05c3-2ae0-042579c2b641" className="footer-content-top" style={{
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}>
            <div className="footer-main-content"><a href="/" className="footer-logo-container w-inline-block"><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c1dcf8ddd80_logo-job-board-x-template.svg"
              alt="Job Board X Webflow Template - Logo" className="footer-logo"/></a><p
              className="paragraph footer-main-content-paragraph">Join our newsletter and receive the best job openings
              of the week, right on your inbox.</p></div>
            <div className="footer-newsletter-form-block w-form">
              <form id="wf-form-Footer-Newsletter-Form" name="wf-form-Footer-Newsletter-Form"
                    data-name="Footer Newsletter Form" method="get" className="footer-newsletter-form"
                    aria-label="Footer Newsletter Form"><input type="email" className="input footer-newsletter w-input"
                                                               maxLength={256} name="Email" data-name="Email"
                                                               placeholder="Subscribe to our newsletter" id="email"
                                                               required/><input type="submit" defaultValue="Subscribe"
                                                                                data-wait="Please wait..."
                                                                                className="button-primary small footer-newsletter w-button"/>
              </form>
              <div className="success-message w-form-done" tabIndex={-1} role="region"
                   aria-label="Footer Newsletter Form success">
                <div>Thanks for joining our newsletter.</div>
              </div>
              <div className="error-message w-form-fail" tabIndex={-1} role="region"
                   aria-label="Footer Newsletter Form failure">
                <div>Oops! Something went wrong.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-default w-container"/>
        <div className="divider footer-content-bottom-divider"/>
        <div className="container-default w-container">
          <div data-w-id="41920341-92b7-05c3-2ae0-042579c2b695" className="footer-content-bottom" style={{
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}>
            <div className="footer-small-print">© Copyright Job Board X - Designed by <a
              href="https://brixtemplates.com/" target="_blank">BRIX Templates</a> - Powered by <a
              href="https://webflow.com/" target="_blank">Webflow</a></div>
            <div className="footer-social-media-wrapper"><a href="https://www.facebook.com/" target="_blank"
                                                            className="image-wrapper social-media-link facebook w-inline-block"/><a
              href="https://twitter.com/" target="_blank"
              className="image-wrapper social-media-link twitter w-inline-block"/><a href="https://www.instagram.com/"
                                                                                     target="_blank"
                                                                                     className="image-wrapper social-media-link instagram w-inline-block"/><a
              href="https://www.linkedin.com/" target="_blank"
              className="image-wrapper social-media-link linkedin w-inline-block"/><a href="https://www.youtube.com/"
                                                                                      target="_blank"
                                                                                      className="image-wrapper social-media-link youtube w-inline-block"/><a
              href="https://www.whatsapp.com/" target="_blank"
              className="image-wrapper social-media-link whatsapp w-inline-block"/></div>
          </div>
        </div>
      </footer>

    </>
  )
}
