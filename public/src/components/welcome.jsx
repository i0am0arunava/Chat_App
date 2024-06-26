/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect ,} from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import { useNavigate } from "react-router-dom";
export default function Welcome({ currentUser }) {
const navigate=useNavigate()
    useEffect(() => {
        const checkUser = async () => {
            if (!localStorage.getItem("chat-app-user")) {
                navigate("/login");
            }
            console.log("hellow2")
        };

        checkUser();
    }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{currentUser?.username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
