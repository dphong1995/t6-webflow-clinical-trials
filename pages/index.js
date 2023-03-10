import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header/>
      <section className="section home wf-section">
        <div data-w-id="79cc5e11-23b1-da9f-4f65-26174000ce2d" style={{
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          opacity: 1,
          transformStyle: 'preserve-3d'
        }} className="container-medium-736px home-hero"><h1 data-w-id="7c40314c-5dc6-b15a-84ae-c36852bb1073"
                                                            className="title home-hero">Connecting you to promising new
          treatments </h1><p className="paragraph home-hero">Helping you find a clinical trial or research study near
          you.</p></div>
        <div data-w-id="651950f6-e58e-81e6-31bd-2aa5b9f5c2c4" style={{
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          opacity: 1,
          transformStyle: 'preserve-3d'
        }} className="container-default w-container">
          <div className="div-block">
            <a href="#googtrans(en|en)" data-lang="en" className="button-3 w-button lang-select">English</a>
            <a href="#googtrans(en|fr)" data-lang="fr" className="button w-button lang-select">French</a>
            <a href="#googtrans(zh-CN)" data-lang="zh-CN" className="button-2 w-button lang-select">Chinese</a>
            <a href="#googtrans(es)" data-lang="es" className="button-2 w-button lang-select">Spanish</a>
          </div>
          <div className="card home-jobs-filters">
            <form action="/search" className="home-jobs-filter-search w-form"><input type="search"
                                                                                     className="input home-jobs-filter-search-input w-input"
                                                                                     maxLength={256} name="query"
                                                                                     placeholder="Search Trials"
                                                                                     id="search" required/><input
              type="submit" defaultValue="Search"
              className="button-primary small home-jobs-filter-search-button w-button"/></form>
            <div className="home-jobs-filters-wrapper">
              <div data-hover="true" data-delay={0} className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button w-dropdown-toggle" id="w-dropdown-toggle-2"
                     aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button"
                     tabIndex={0}><img
                  src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c7ad78ddd92_icon-2-dropdown-job-categories-job-board-x-template.svg"
                  alt="Graph Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Condition</div>
                  <img
                    src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c51e28dddc1_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list" style={{
                  display: 'none',
                  opacity: 0,
                  transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  height: '0px'
                }} id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/phase-i" className="dropdown-nav-link" tabIndex={0}>Phase I</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/phase-ii" className="dropdown-nav-link" tabIndex={0}>Phase II</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/phase-iii" className="dropdown-nav-link" tabIndex={0}>Phase III</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div data-hover="true" data-delay={0} className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button w-dropdown-toggle" id="w-dropdown-toggle-3"
                     aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button"
                     tabIndex={0}><img
                  src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c83a48ddd91_icon-1-dropdown-job-categories-job-board-x-template.svg"
                  alt="Location Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Location</div>
                  <img
                    src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c51e28dddc1_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list" style={{
                  display: 'none',
                  opacity: 0,
                  transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  height: '0px'
                }} id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/augusta-ga" className="dropdown-nav-link" tabIndex={0}>Augusta,
                          GA</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/houston-tx" className="dropdown-nav-link" tabIndex={0}>Houston,
                          TX</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/boston" className="dropdown-nav-link" tabIndex={0}>Boston, MA</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/memphis" className="dropdown-nav-link" tabIndex={0}>Memphis,
                          TN</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/austin-tx" className="dropdown-nav-link" tabIndex={0}>Austin,
                          TX</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/miami-fl" className="dropdown-nav-link" tabIndex={0}>Miami,
                          FL</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/new-york-ny" className="dropdown-nav-link" tabIndex={0}>New York,
                          NY</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/remote" className="dropdown-nav-link" tabIndex={0}>Remote</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div data-hover="true" data-delay={0} className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button last w-dropdown-toggle" id="w-dropdown-toggle-4"
                     aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button"
                     tabIndex={0}><img
                  src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c3b118ddd94_icon-3-dropdown-job-categories-job-board-x-template.svg"
                  alt="Portfolio Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Distance</div>
                  <img
                    src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c51e28dddc1_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list" style={{
                  display: 'none',
                  opacity: 0,
                  transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                  height: '0px'
                }} id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/design" className="dropdown-nav-link" tabIndex={0}>Design</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/active" className="dropdown-nav-link" tabIndex={0}>Active</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/enrolling" className="dropdown-nav-link"
                          tabIndex={0}>Enrolling</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/recruiting" className="dropdown-nav-link"
                          tabIndex={0}>Recruiting</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/completed" className="dropdown-nav-link"
                          tabIndex={0}>Completed</a></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="companies-wrapper">
            <div className="companies-text">Trusted by</div>
            <div className="companies-logos-wrapper"><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c73b08ddd82_logo-1-companies-job-board-x-template.svg"
              alt="Google Logo - Job Board X Webflow Template" className="image company-logo first"/><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c39158ddd81_logo-2-companies-job-board-x-template.svg"
              alt="Facebook Logo - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c2ebd8ddd83_logo-3-companies-job-board-x-template.svg"
              alt="YouTube - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765cfb318ddd84_logo-4-companies-job-board-x-template.svg"
              alt="Pinterest Logo - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c81298ddd85_logo-5-companies-job-board-x-template.svg"
              alt="Webflow Logo - Job Board X Webflow Template" className="image company-logo last"/></div>
          </div>
          <div className="job-board-wrapper">
            <div className="split-content job-board-content">
              <div className="featured-jobs-wrapper"><h2 className="title featured-jobs">Featured Trials</h2>
                <div className="w-dyn-list">
                  <div role="list" className="featured-jobs-grid w-dyn-items">
                    <div role="listitem" className="featured-job-item w-dyn-item"><a href="/job/import-item-2"
                                                                                     target="_blank"
                                                                                     className="card job featured w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a413630bd706414486f790_mgh.png"
                          alt="Haplo Peripheral Blood Sct In GVHD Prevention" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job-featured">Haplo
                          Peripheral Blood Sct In GVHD Prevention</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link featured">Massachusetts General Hospital</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1 featured"/>
                              <div className="card-link-arrow-2 featured"/>
                              <div className="card-link-arrow-3 featured"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Boston, MA</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Phase</div>
                          </div>
                          <div className="card-job-category-text">Phase I</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Enrolling</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="featured-job-item w-dyn-item"><a
                      href="/job/study-of-cd19-directed-allogeneic-memory-t-cell-therapy" target="_blank"
                      className="card job featured w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a41427d004d00a76700d52_StJude.png"
                          alt="Study of CD19-directed Allogeneic Memory T-cell Therapy for Relapsed/Refractory CD19+ Leukemia"
                          className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job-featured">Study of
                          CD19-directed Allogeneic Memory T-cell Therapy for Relapsed/Refractory CD19+ Leukemia</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link featured">St. Jude Children's Research Hospital</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1 featured"/>
                              <div className="card-link-arrow-2 featured"/>
                              <div className="card-link-arrow-3 featured"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Memphis, TN</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Phase</div>
                          </div>
                          <div className="card-job-category-text">Phase I</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Active</div>
                        </div>
                      </div>
                    </a></div>
                  </div>
                </div>
              </div>
              <div className="jobs-wrapper"><h2 className="title jobs">Latest Trials</h2>
                <div className="w-dyn-list">
                  <div role="list" className="jobs-grid w-dyn-items">
                    <div role="listitem" className="job-item w-dyn-item"><a
                      href="/company/massachusetts-general-hospital" className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a413630bd706414486f790_mgh.png"
                          alt="A Study of H3B-8800 (RVT-2001) in Participants With Lower Risk Myelodysplastic Syndromes"
                          className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">A Study of
                          H3B-8800 (RVT-2001) in Participants With Lower Risk Myelodysplastic Syndromes</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Massachusetts General Hospital</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Boston, MA</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase I</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Recruiting</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/company/md-anderson"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a41c49df36e11ab6e91c4c_MD%20Anderson.png"
                          alt="Dasatinib and Venetoclax in Treating Patients With Philadelphia Chromosome Positive"
                          className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Dasatinib and
                          Venetoclax in Treating Patients With Philadelphia Chromosome Positive</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">MD Anderson Cancer Center</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Houston, TX</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase II</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Recruiting</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/company/tg-therapeutics"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a4c52e6709522d234dd7fd_tg.png"
                          alt="Study of TG-1801 Alone or in Combination With Ublituximab" className="image card-job"/>
                        </div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Study of TG-1801
                          Alone or in Combination With Ublituximab</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">TG Therapeutics</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Boston, MA</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase II</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Enrolling</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/company/augusta-university"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a4addd16e186414f16bc3a_AU.png"
                          alt="Asciminib as Initial Therapy for Patients With Chronic Myeloid Leukemia in Chronic Phase"
                          className="image card-job" style={{
                          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }}/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job"
                                                                    style={{color: 'rgb(23, 23, 40)'}}>Asciminib as
                          Initial Therapy for Patients With Chronic Myeloid Leukemia in Chronic Phase</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Augusta University</div>
                            <div className="card-link-arrow" style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}>
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Augusta, GA</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase II</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Enrolling</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a
                      href="/company/massachusetts-general-hospital" className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a413630bd706414486f790_mgh.png"
                          alt="Haplo Peripheral Blood Sct In GVHD Prevention" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Haplo Peripheral
                          Blood Sct In GVHD Prevention</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Massachusetts General Hospital</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Boston, MA</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase I</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Enrolling</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/company/stjude"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a41427d004d00a76700d52_StJude.png"
                          alt="Study of CD19-directed Allogeneic Memory T-cell Therapy for Relapsed/Refractory CD19+ Leukemia"
                          className="image card-job" style={{
                          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d'
                        }}/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job"
                                                                    style={{color: 'rgb(23, 23, 40)'}}>Study of
                          CD19-directed Allogeneic Memory T-cell Therapy for Relapsed/Refractory CD19+ Leukemia</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">St. Jude Children's Research Hospital</div>
                            <div className="card-link-arrow" style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}>
                              <div className="card-link-arrow-1"/>
                              <div className="card-link-arrow-2"/>
                              <div className="card-link-arrow-3"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c98fc8ddd87_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Location</div>
                          </div>
                          <div className="card-job-category-text">Memphis, TN</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c510f8ddd88_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div>
                          </div>
                          <div className="card-job-category-text">Phase I</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c89f38ddd8f_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Status</div>
                          </div>
                          <div className="card-job-category-text">Active</div>
                        </div>
                      </div>
                    </a></div>
                  </div>
                  <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination"/>
                </div>
              </div>
            </div>
            <div className="split-content job-sidebar">
              <div className="job-sidebar-wrapper">
                <div className="card job-board-featured-companies">
                  <div className="card-job-board-featured-companies-content"><h4
                    className="title featured-companies">Featured Hospitals &amp; Research Centers</h4>
                    <div className="w-dyn-list">
                      <div role="list" className="featured-companies-grid w-dyn-items">
                        <div role="listitem" className="featured-company-item w-dyn-item"><a
                          href="/company/massachusetts-general-hospital"
                          className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a413630bd706414486f790_mgh.png"
                              alt="Massachusetts General Hospital" className="image featured-company"/></div>
                            <h5 className="title featured-company">Massachusetts General Hospital</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"/>
                            <div className="featured-company-arrow-1"/>
                            <div className="featured-company-arrow-3"/>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/stjude"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a41427d004d00a76700d52_StJude.png"
                              alt="St. Jude Children's Research Hospital" className="image featured-company"/></div>
                            <h5 className="title featured-company">St. Jude Children's Research Hospital</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"/>
                            <div className="featured-company-arrow-1"/>
                            <div className="featured-company-arrow-3"/>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a
                          href="/company/standfordchildrens" className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a4186767095202b4412880_SC%20logo.png"
                              alt="Lucile Packard Children's Hospital Stanford" className="image featured-company"/>
                            </div>
                            <h5 className="title featured-company">Lucile Packard Children's Hospital Stanford</h5>
                          </div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"/>
                            <div className="featured-company-arrow-1"/>
                            <div className="featured-company-arrow-3"/>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/md-anderson"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://uploads-ssl.webflow.com/637be9fff1765c82ee8ddd63/63a41c49df36e11ab6e91c4c_MD%20Anderson.png"
                              alt="MD Anderson Cancer Center" className="image featured-company"/></div>
                            <h5 className="title featured-company">MD Anderson Cancer Center</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"/>
                            <div className="featured-company-arrow-1"/>
                            <div className="featured-company-arrow-3"/>
                          </div>
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg home-hero"/>
        <div/>
        <div data-collapse="medium" data-animation="over-left" data-duration={400}
             data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner"
             className="header w-nav">
          <div className="container-default w-container">
            <div className="header-wrapper">
              <div className="split-content header-right"><a href="/" aria-current="page"
                                                             className="brand w-nav-brand w--current" aria-label="home"><img
                src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/63a36d17a017067ad44825f9_Talosix_logo.svg"
                alt="" className="header-logo"/></a></div>
              <div className="split-content header-center">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <ul role="list" className="header-navigation">
                    <li className="nav-item-wrapper"><a href="/" aria-current="page"
                                                        className="nav-link w--current">Home</a></li>
                    <li className="nav-item-wrapper"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-item-wrapper">
                      <div data-hover="true" data-delay={0} data-w-id="18b86231-820c-c7b9-b34b-25486eac4d70"
                           className="nav-link-dropdown w-dropdown" style={{maxWidth: '1246px'}}>
                        <div className="nav-link dropdown w-dropdown-toggle" id="w-dropdown-toggle-5"
                             aria-controls="w-dropdown-list-5" aria-haspopup="menu" aria-expanded="false" role="button"
                             tabIndex={0}>
                          <div>Conditions<span className="dropdown-arrow"/></div>
                        </div>
                        <nav className="dropdown-list categories w-dropdown-list" style={{
                          display: 'none',
                          opacity: 0,
                          transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d',
                          height: '0px'
                        }} id="w-dropdown-list-5" aria-labelledby="w-dropdown-toggle-5">
                          <div className="dropdown-nav-main-wrapper">
                            <div className="dropdown-nav-pages-wrapper"><img
                              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765cf2888dddbf_icon-location-job-board-x-template.svg"
                              alt="Location - Job Board X Webflow Template" className="image jobs-filters"/>
                              <div className="title h5-size dropdown-nav-title">Locations</div>
                              <div className="dropdown-nav-content categories">
                                <div className="w-dyn-list">
                                  <div role="list"
                                       className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/augusta-ga" className="dropdown-nav-link"
                                      tabIndex={0}>Augusta, GA</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/houston-tx" className="dropdown-nav-link"
                                      tabIndex={0}>Houston, TX</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/boston" className="dropdown-nav-link" tabIndex={0}>Boston,
                                      MA</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/memphis" className="dropdown-nav-link" tabIndex={0}>Memphis,
                                      TN</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/austin-tx" className="dropdown-nav-link"
                                      tabIndex={0}>Austin, TX</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/miami-fl" className="dropdown-nav-link" tabIndex={0}>Miami,
                                      FL</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/new-york-ny" className="dropdown-nav-link"
                                      tabIndex={0}>New York, NY</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-location-category/remote" className="dropdown-nav-link"
                                      tabIndex={0}>Remote</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown-nav-pages-wrapper"><img
                              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c188e8dddbe_icon-level-job-board-x-template.svg"
                              alt="Graph Icon - Job Board X Webflow Template" className="image jobs-filters"/>
                              <div className="title h5-size dropdown-nav-title">Job Level</div>
                              <div className="dropdown-nav-content categories">
                                <div className="w-dyn-list">
                                  <div role="list"
                                       className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-level-category/phase-i" className="dropdown-nav-link" tabIndex={0}>Phase
                                      I</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-level-category/phase-ii" className="dropdown-nav-link" tabIndex={0}>Phase
                                      II</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-level-category/phase-iii" className="dropdown-nav-link" tabIndex={0}>Phase
                                      III</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown-nav-pages-wrapper last"><img
                              src="https://uploads-ssl.webflow.com/637be9fef1765c0f958ddd3c/637be9fff1765c0fd98dddc0_icon-department-job-board-x-template.svg"
                              alt="Portfolio - Job Board X Webflow Template" className="image jobs-filters"/>
                              <div className="title h5-size dropdown-nav-title">Department</div>
                              <div className="dropdown-nav-content categories">
                                <div className="w-dyn-list">
                                  <div role="list"
                                       className="jobs-filters-dropdown-links-grid header-dropdown w-dyn-items">
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-department-category/design" className="dropdown-nav-link"
                                      tabIndex={0}>Design</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-department-category/active" className="dropdown-nav-link"
                                      tabIndex={0}>Active</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-department-category/enrolling" className="dropdown-nav-link"
                                      tabIndex={0}>Enrolling</a></div>
                                  </div>
                                </div>
                                <div className="w-dyn-list">
                                  <div role="list"
                                       className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-department-category/recruiting" className="dropdown-nav-link"
                                      tabIndex={0}>Recruiting</a></div>
                                    <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                      href="/job-department-category/completed" className="dropdown-nav-link"
                                      tabIndex={0}>Completed</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>
                    <li className="nav-item-wrapper">
                      <div data-hover="true" data-delay={0} data-w-id="9d8771e1-cd36-f259-3eb7-a23f095b6d83"
                           className="nav-link-dropdown w-dropdown" style={{maxWidth: '1246px'}}>
                        <div className="nav-link dropdown w-dropdown-toggle" id="w-dropdown-toggle-6"
                             aria-controls="w-dropdown-list-6" aria-haspopup="menu" aria-expanded="false" role="button"
                             tabIndex={0}/>
                        <nav className="dropdown-list w-dropdown-list" style={{
                          display: 'none',
                          opacity: 0,
                          transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                          transformStyle: 'preserve-3d',
                          height: '0px'
                        }} id="w-dropdown-list-6" aria-labelledby="w-dropdown-toggle-6">
                          <div className="dropdown-nav-main-wrapper">
                            <div className="dropdown-nav-pages-wrapper">
                              <div className="title h5-size dropdown-nav-title">Menu</div>
                              <div className="dropdown-nav-content">
                                <ul role="list" className="dropdown-nav">
                                  <li className="dropdown-nav-item"><a href="/" aria-current="page"
                                                                       className="dropdown-nav-link w--current"
                                                                       tabIndex={0}>Home</a></li>
                                  <li className="dropdown-nav-item"><a href="/about" className="dropdown-nav-link"
                                                                       tabIndex={0}>About us</a></li>
                                  <li className="dropdown-nav-item"><a
                                    href="https://jobboardxtemplate.webflow.io/job/backend-software-engineer"
                                    className="dropdown-nav-link" tabIndex={0}>Job post</a></li>
                                  <li className="dropdown-nav-item"><a
                                    href="https://jobboardxtemplate.webflow.io/job-location-category/remote"
                                    className="dropdown-nav-link" tabIndex={0}>Job post category</a></li>
                                  <li className="dropdown-nav-item"><a href="/companies" className="dropdown-nav-link"
                                                                       tabIndex={0}>Companies</a></li>
                                  <li className="dropdown-nav-item"><a
                                    href="https://jobboardxtemplate.webflow.io/company/webflow"
                                    className="dropdown-nav-link" tabIndex={0}>Single company</a></li>
                                </ul>
                                <ul role="list" className="dropdown-nav last">
                                  <li className="dropdown-nav-item"><a href="/post-a-job" className="dropdown-nav-link"
                                                                       tabIndex={0}>Post a free job</a></li>
                                  <li className="dropdown-nav-item"><a href="/pricing" className="dropdown-nav-link"
                                                                       tabIndex={0}>Post a paid job</a></li>
                                  <li className="dropdown-nav-item"><a href="/blog" className="dropdown-nav-link"
                                                                       tabIndex={0}>Blog</a></li>
                                  <li className="dropdown-nav-item"><a
                                    href="https://jobboardxtemplate.webflow.io/blog/how-to-easily-collaborate-with-designers-as-a-developer"
                                    className="dropdown-nav-link" tabIndex={0}>Blog post</a></li>
                                  <li className="dropdown-nav-item"><a href="/contact" className="dropdown-nav-link"
                                                                       tabIndex={0}>Contact</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="dropdown-nav-pages-wrapper last">
                              <div className="title h5-size dropdown-nav-title">Utility Pages</div>
                              <div className="dropdown-nav-content">
                                <ul role="list" className="dropdown-nav last">
                                  <li className="dropdown-nav-item"><a href="/utility-pages/style-guide"
                                                                       className="dropdown-nav-link" tabIndex={0}>Style
                                    guide</a></li>
                                  <li className="dropdown-nav-item"><a href="/utility-pages/start-here"
                                                                       className="dropdown-nav-link" tabIndex={0}>Start
                                    here</a></li>
                                  <li className="dropdown-nav-item"><a href="https://jobboardxtemplate.webflow.io/404"
                                                                       className="dropdown-nav-link" tabIndex={0}>404
                                    Not found</a></li>
                                  <li className="dropdown-nav-item"><a href="https://jobboardxtemplate.webflow.io/401"
                                                                       className="dropdown-nav-link" tabIndex={0}>Password
                                    protected</a></li>
                                  <li className="dropdown-nav-item"><a href="/utility-pages/licenses"
                                                                       className="dropdown-nav-link"
                                                                       tabIndex={0}>Licenses</a></li>
                                  <li className="dropdown-nav-item"><a href="/utility-pages/changelog"
                                                                       className="dropdown-nav-link"
                                                                       tabIndex={0}>Changelog</a></li>
                                  <li className="dropdown-nav-item"><a href="https://brixtemplates.com/more-templates"
                                                                       className="dropdown-nav-link special"
                                                                       tabIndex={0}>Browse&nbsp;more templates</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>
                    <li className="nav-item-wrapper"><a href="/contact" className="nav-link">Contact</a></li>
                    <li className="nav-item-wrapper button-mobile"><a href="/post-a-job"
                                                                      className="button-primary header-button button-mobile w-button">Post
                      a job</a></li>
                  </ul>
                </nav>
                <div data-node-type="commerce-cart-wrapper" data-open-product data-wf-cart-type="rightSidebar"
                     data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
comment
extraItems {
  name
  pluginId
  pluginName
  price {
    value
    unit
    decimalValue
    string
  }
}
id
startedOn
statusFlags {
  hasDownloads
  hasSubscription
  isFreeOrder
  requiresShipping
}
subtotal {
  value
  unit
  decimalValue
  string
}
total {
  value
  unit
  decimalValue
  string
}
updatedOn
userItems {
  count
  sku {
    f__draft_0ht
    f__archived_0ht
    f_main_image_4dr {
      url
      file {
        size
        origFileName
        createdOn
        updatedOn
        mimeType
        width
        height
        variants {
          origFileName
          quality
          height
          width
          s3Url
          error
          size
        }
      }
      alt
    }
    f_sku_values_3dr {
      property {
        id
      }
      value {
        id
      }
    }
    id
  }
  price {
    value
    unit
    decimalValue
    string
  }
  product {
    id
    f__draft_0ht
    f__archived_0ht
    f_name_
    f_sku_properties_3dr {
      id
      name
      enum {
        id
        name
        slug
      }
    }
    f_slug_
  }
  id
  rowTotal {
    value
    unit
    decimalValue
    string
  }
  subscriptionFrequency
  subscriptionInterval
  subscriptionTrial
}
userItemsCount
    }
  }
  site {
    id
    commerce {
businessAddress {
  country
}
defaultCountry
defaultCurrency
quickCheckoutEnabled
    }
  }
}
" data-wf-page-link-href-prefix className="w-commerce-commercecartwrapper cart"><a href="#"
                                                                                   data-node-type="commerce-cart-open-link"
                                                                                   className="w-commerce-commercecartopenlink cart-button w-inline-block"/>
                  <div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}}
                       className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
                    <div data-node-type="commerce-cart-container"
                         className="w-commerce-commercecartcontainer cart-container">
                      <div className="w-commerce-commercecartheader cart-header"><h4
                        className="w-commerce-commercecartheading">Your Cart</h4><a href="#"
                                                                                    data-node-type="commerce-cart-close-link"
                                                                                    className="w-commerce-commercecartcloselink cart-close-button w-inline-block">
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                              <polygon
                                points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"/>
                            </g>
                          </g>
                        </svg>
                      </a></div>
                      <div className="w-commerce-commercecartformwrapper">
                        <form data-node-type="commerce-cart-form" style={{display: 'none'}}
                              className="w-commerce-commercecartform">
                          <div className="w-commerce-commercecartlist cart-list"
                               data-wf-collection="database.commerceOrder.userItems"
                               data-wf-template-id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cf4"/>
                          <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem cart-line-item">
                              <div>Subtotal</div>
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                                className="w-commerce-commercecartordervalue card-subtotal"/>
                            </div>
                            <div>
                              <div data-node-type="commerce-cart-quick-checkout-actions" style={{display: 'none'}}><a
                                role="button" tabIndex={0} aria-haspopup="dialog" aria-label="Apple Pay"
                                data-node-type="commerce-cart-apple-pay-button" style={{
                                backgroundImage: '-webkit-named-image(apple-pay-logo-white)',
                                backgroundSize: '100% 50%',
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat'
                              }} className="w-commerce-commercecartapplepaybutton apple-pay">
                                <div/>
                              </a><a role="button" tabIndex={0} aria-haspopup="dialog"
                                     data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}}
                                     className="w-commerce-commercecartquickcheckoutbutton">
                                <svg className="w-commerce-commercequickcheckoutgoogleicon"
                                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     width={16} height={16} viewBox="0 0 16 16">
                                  <defs>
                                    <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"/>
                                    <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"/>
                                  </defs>
                                  <g fill="none" fillRule="evenodd">
                                    <path fill="#4285F4"
                                          d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"/>
                                    <path fill="#34A853"
                                          d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"/>
                                    <g transform="translate(0 4)">
                                      <mask id="google-mark-b" fill="#fff">
                                        <use xlinkHref="#google-mark-a"/>
                                      </mask>
                                      <path fill="#FBBC04"
                                            d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                            mask="url(#google-mark-b)"/>
                                    </g>
                                    <mask id="google-mark-d" fill="#fff">
                                      <use xlinkHref="#google-mark-c"/>
                                    </mask>
                                    <path fill="#EA4335"
                                          d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                          mask="url(#google-mark-d)"/>
                                  </g>
                                </svg>
                                <svg className="w-commerce-commercequickcheckoutmicrosofticon"
                                     xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                  <g fill="none" fillRule="evenodd">
                                    <polygon fill="#F05022" points="7 7 1 7 1 1 7 1"/>
                                    <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"/>
                                    <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"/>
                                    <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"/>
                                  </g>
                                </svg>
                                <div>Pay with browser.</div>
                              </a></div>
                              <a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button"
                                 className="w-commerce-commercecartcheckoutbutton button-primary"
                                 data-loading-text="Hang Tight...">Continue to Checkout</a></div>
                          </div>
                        </form>
                        <div className="w-commerce-commercecartemptystate empty-state cart-empty">
                          <div>No items found.</div>
                          <a href="/pricing" className="button-primary cart-empty w-button">Post a featured job</a>
                        </div>
                        <div style={{display: 'none'}} data-node-type="commerce-cart-error"
                             className="w-commerce-commercecarterrorstate error-message">
                          <div className="w-cart-error-msg"
                               data-w-cart-quantity-error="Product is not available in this quantity."
                               data-w-cart-general-error="Something went wrong when adding this item to the cart."
                               data-w-cart-checkout-error="Checkout is disabled on this site."
                               data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                               data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product
                            is not available in this quantity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="split-content header-left">
                <div className="menu-button w-nav-button" style={{WebkitUserSelect: 'text'}} aria-label="menu"
                     role="button" tabIndex={0} aria-controls="w-nav-overlay-1" aria-haspopup="menu"
                     aria-expanded="false">
                  <div className="header-menu-button-icon-wrapper">
                    <div className="icon-wrapper">
                      <div className="header-menu-button-icon-top"/>
                      <div className="header-menu-button-icon-medium"/>
                      <div className="header-menu-button-icon-bottom"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-1"/>
        </div>
      </section>
    </>
  )
}
