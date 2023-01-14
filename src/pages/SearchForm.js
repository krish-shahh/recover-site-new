
import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import tw from "twin.macro";
import { mock_data } from './mock_data.js';
const Content = tw.div`max-w-screen-xl mx-auto`;

export default () => {
    const [contacts, setContacts] = useState(mock_data);
    const [search, setSearch] = useState('');
    
    return (
        <Content>
            <br />
            <form>
            <input 
                type={"text"}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by State'
            ></input>
            </form>
            <br />

            <div className="clearfix">
        <div className="row">
        {mock_data.filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.location.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => (
            <div className="col-md-4 animated fadeIn" key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={item.profile}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {item.name}
                  </h5>
                  <p className="card-text">
                    {item.location}
                    <br />
                  </p>
                  <a href={item.email}>
                    <button className="btn btn-light btn-block w-50 mx-auto">
                      Contact
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </Content>

    );
};
