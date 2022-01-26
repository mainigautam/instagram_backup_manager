import React from "react";

const NoPage = () => {
  return (
    <>
      <div className="notFoundation">
        <div className="notFound">404!</div>
        <div className="subNotFound">
          No Such Route go Back to
          <a href="/" className="homeLink">
            Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NoPage;
