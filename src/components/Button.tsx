import React from 'react';

interface ButtonProps {
  title: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title}) => {
  return <button className=' bg-orange-500 py-2 px-6 rounded text-white hover:bg-opacity-60 transition ease-in duration-200'>{title}</button>;
};

export default Button;
