import React from "react";
import { Layout } from "../../Layouts/Index";
import { StyledHome } from "./StyledHome";
import { FaRobot } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <div className="container-home">
          <h1>Menu</h1>
          <span>(Choisissez un mode de jeu...)</span>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <FaRobot />
                  Solo
                </Link>
              </li>
              <li>
                <Link to="/duo">
                  <IoPeopleCircleOutline />
                  Duo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </StyledHome>
    </Layout>
  );
};
