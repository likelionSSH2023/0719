// Detail.jsx
import { styled } from "styled-components";

import { useLocation } from 'react-router-dom';
import { HomeContainer } from "./components/BodyStyle";


const Box = styled.div`
  position: relative;
  /* transform: rotate(50%,50%); */
  margin: 100px;
  width: 800px;
  /* height: 800px; */
  border-radius: 50px;
  background-color: white;
`
const INFO1= styled.div`
  margin: 25px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size: 40px;
    color: black;
  }
  h2{
    font-size: 20px;
    color: gray;
  }
`

const INFO2 =styled.div`
height: 200px;
  margin: 100px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`

const INFO2_1 = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const INFO2_2 = styled.div`
  height: 100%;
  width: 400px; 
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 50px;
  padding: 40px;
  h1{
    font-size: 20px;
    /* margin: 20px; */
  }
  h2{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    margin: 10px;
  }
`
const Detail = () => {
  const location = useLocation();
  const item = location.state.item


  function IDEX_NM_Color(INDEX_NM) {
    console.log(INDEX_NM)
    switch(INDEX_NM){
    case '좋음' :
      return "green";
    case '보통':
      return "yellow";
    case '나쁨':
      return "red";
    default:
      return " ";
    }
  }

  return (
    <HomeContainer>

    <Box>
      <INFO1>
        <h1>{item.MSRRGN_NM} | {item.MSRSTE_NM}</h1>
        <h2>{item.MSRDT}</h2>
      </INFO1>
      <INFO2>
        <INFO2_1>
          <div>미세먼지(㎍/㎥): {item.PM10}</div>
          <div>초미세먼지농도(㎍/㎥) : {item.PM25}</div>
          <div>오존(ppm) : {item.O3}</div>
          <div>통합대기환경지수: {item.IDEX_MVL}</div>
        </INFO2_1>

        <INFO2_2 style={{ backgroundColor: IDEX_NM_Color(item.IDEX_NM)}}>
          <h1>통합대기환경등급</h1>
          <h2>{ IDEX_NM_Color(item.IDEX_NM) == (" ") ? "-" : item.IDEX_NM }</h2>
        </INFO2_2>

      </INFO2>
    </Box>
    
    </HomeContainer>
    
  )

};

export default Detail;
