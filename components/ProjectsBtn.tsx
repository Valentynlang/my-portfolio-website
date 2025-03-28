import React from 'react';
import { CommonProps } from '../types';

interface ProjectsBtnProps extends CommonProps {
  // Add specific props here
}


const ProjectsBtn: React.FC<ProjectsBtnProps> = ({ children, className }) => {
  return <div>Project Btn</div>;

};



export default ProjectsBtn;