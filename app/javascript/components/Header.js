import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ text, isAdd, isBack }) => {
  return (
    <HeaderWrapper text={text} isAdd={isAdd} isBack={isBack}>
      {isBack && <div className="action">{<Link to="">‹</Link>}</div>}
      <div>{text}</div>
      {isAdd && <div className="action">{<Link to="add">+</Link>}</div>}
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isAdd: PropTypes.bool,
  text: PropTypes.string,
  isBack: PropTypes.bool,
};

const HeaderWrapper = styled.header`
  background: #6c00f7;
  color: white;
  padding: 20px 20px 20px 20px;
  position: fixed;
  width: 100%;
  font-size: 25px;
  display: ${(props) => (props.isAdd || props.isBack ? "flex" : "block")};
  justify-content: ${(props) => (props.isAdd ? "space-between" : "unset")};
  align-items: center;

  .action {
    font-size: 30px;
    padding-right: ${(props) => (props.isAdd ? "0px" : "20px")};
  }

  img {
    width: 30px;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

export default Header;
