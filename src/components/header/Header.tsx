import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Header: React.FC<Props> = ({ title, ...props }) => {
  return (
    <div className={props.className}>
      {title}
    </div>
  );
};

export default Header;
