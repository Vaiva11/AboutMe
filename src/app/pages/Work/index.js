import React from 'react';
import './index.scss';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import { WorkBox } from '../../components';

function Work() {
  return (
    <div className="container">
      <WorkBox to="/work/html" title="HTML CSS">
        <FaHtml5 />
        <FaCss3Alt />
      </WorkBox>
      <WorkBox to="/work/JS" title="Java Script">
        <FaJsSquare />
      </WorkBox>
      <WorkBox to="/work/NodeJs" title="Node.js">
        <FaNodeJs />
      </WorkBox>
      <WorkBox to="/work/ReactPage" title="React">
        <FaReact />
      </WorkBox>
      <WorkBox to="/work/VueJs" title="Vue.Js">
        <FaVuejs />
      </WorkBox>
    </div>
  );
}

export default Work;
