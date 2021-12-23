import React from "react";
import FlagIcon from "@mui/icons-material/Flag";
import DomainIcon from "@mui/icons-material/Domain";

const University = (props) => {
  const { name, country, domains, web_pages } = props;

  return (
    <div className="person">
      <div className="details">
        <h1>{name}</h1>
        <hr />
        <div className="abc">
          <p>
            <strong>
              COUNTRY <FlagIcon />
            </strong>
            <br /> {country}
          </p>
        </div>
        <div className="abc">
          <p>
            <strong>
              DOMAINS <DomainIcon />
            </strong>
            <br /> {domains}
          </p>
        </div>
        <hr />
        <div className="abc">
          <p>
            <strong>WEBSITE : </strong> <br />
            <br />
            <a href={web_pages} target="_blank" className="btn-get-started">
              VISIT
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default University;
