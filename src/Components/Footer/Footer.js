import styled from 'styled-components';

const ContainerDeveloper = styled.div`
  transform: translate(-45%, -20%);
  position: fixed;
  top: 95%;
  left: 50%;
`;

const Link = styled.a`
  color: orange;
  font-size: 20px;
  font-weight: 600;
`;

const Developer = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: orange;
  text-align: right;
`;

export const Footer = () => {
  return (
    <ContainerDeveloper>
      <Developer>
        Developed by{' '}
        <Link href="https://www.linkedin.com/in/alexey-korotenko-379613219/">
          Alexey Korotenko
        </Link>
      </Developer>
    </ContainerDeveloper>
  );
};
