import React from 'react'

const ErrorPage:React.FC<{}> = () => {
  return (
    <>
    <hr />
     <section id="quotation" className="align-center padding-large">
      <div className="inner-content">
        <h2 className="section-title divider">Error Page</h2>
        <blockquote>
          <q>The Page you are looking for does not exist</q>
          <div className="author-name">- Uralax</div>
        </blockquote>
      </div>
    </section>
    </>
  )
}

export default ErrorPage
