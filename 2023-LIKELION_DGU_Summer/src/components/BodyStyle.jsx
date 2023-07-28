import { styled } from "styled-components";

// Body Component 관련 styled component

// Frame---------------------------------------
export const HomeContainer = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadSection = styled.section`
  width: 700px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => `1px solid ${props.theme.primaryColor}`};
  transition: all 0.3s;
  margin-top: 50px;
  @media all and (max-width: 705px) {
    width: 95%;
  }
  @media all and (max-width: 505px) {
    width: 375px;
  }
`;

export const BodySection = styled.section`
  width: 700px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 95%;
  }
  @media all and (max-width: 505px) {
    width: 375px;
  }
`;

// Item---------------------------------------
export const HeadText = styled.h1`
  font-family: "AppleSDGothicNeoB";
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const DataTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableTh = styled.th`
  min-width: 50px;
  height: 40px;
  vertical-align: middle;
  border: ${(props) => `1px solid ${props.theme.primaryColor}`};
`;

export const TableTd = styled.td`
  vertical-align: middle;
  border: ${(props) => `1px solid ${props.theme.primaryColor}`};
`;

export const EmptyText = styled.section`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "AppleSDGothicNeoB";
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
  @media all and (max-width: 705px) {
    width: 95%;
  }
  @media all and (max-width: 505px) {
    width: 375px;
  }
`;
