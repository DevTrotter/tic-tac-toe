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
        <h1>Bienvenu !!!!</h1>
        <div>
          <h1>Menu (Choisissez un mode de jeu !)</h1>
          <nav>
            <ul>
              <li>
                <FaRobot />
                Solo
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
