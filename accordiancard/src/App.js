import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const Wrapper = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.isOpen ? "400px" : "50px")};
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
  border: 0;
  padding: 0;
  text-align: left;
  background: transparent;
  colod: ${rgba("white", 0.85)};
`;

const Content = styled.div`
  color: ${rgba("white", 0.85)};
`;

const Header1 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    Dashboard
  </Header>
);

const Content1 = () => (
    "Analytics"
);

const Header2 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    H2 Dash
  </Header>
);

const Content2 = () => (
    "C2 Content"
);

const Header3 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    H3 Dash
  </Header>
);

const Content3 = () => (
  "C3 Content"
);

const Header4 = ({ isOpen }) => (
  <Header isOpen={isOpen}>
    H4 Dash
  </Header>
);

const Content4 = () => (
    "C4 Content"
);

const items = [
  {
    content: Content1,
    header: Header1
  },
  {
    content: Content2,
    header: Header2
  },
  {
    content: Content3,
    header: Header3
  },
  {
    content: Content4,
    header: Header4
  }
];

const Accordian = ({
  active, items, setActive
}) => (
  <div>
    {items.map((item, index) => (
      <Wrapper key={index} isOpen={active === index}>
        <Header onClick={setActive(index)}>
          {item.header && React.createElement(item.header, { isOpen: active === index })}
        </Header>
        <Content>
          {item.content && React.createElement(item.content)}
        </Content>
      </Wrapper>
    ))}
  </div>
);

export default Accordian;
