import { useEffect, useState } from "react";
import { BodySection, DataTable, HeadSection, HeadText, HomeContainer, TableTd, TableTh } from "./components/BodyStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  // State 작성------------------------------------------------
  const [weatherData, setWeatherData] = useState([]);
  const {VITE_APP_API_KEY}= import.meta.env;
  // console.log(VITE_APP_API_KEY)

  // Function 작성---------------------------------------------
  //컴포넌트가 최초 mount 됐을 때, 데이터를 가져와달라는 요청을 보내는 함수
  const fetchData = async () => {
    // console.log("HW")
    // react.StrictMode 때문에 useEffect((),[])실행시 2번실행됨
    try {
      const response = await axios.get(`http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/32`);
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log(error)
    }
  }

  const sortedData = weatherData.sort((a,b) => a.PM10 - b.PM10).slice(0,3);
  // console.log(weatherData)

  // OPEN API 비동기로 불러와 State에 저장하기


  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    fetchData();
  }, [])

  function IDEX_NM_Color(INDEX_NM) {
    switch(INDEX_NM){
    case '좋음' :
      return "green";
    case '보통':
      return "";
    case '나쁨':
      return "red";
    default:
      return " ";
    }
  }

  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>측정일</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>

          <tbody>

            {weatherData.map((item, idx) => (
              <tr 
              key={idx} 
              onClick={() => navigate(`/detail/${item.MSRSTE_NM}`,{
                state:{
                  item:item,
                }
              })}
              style={{ backgroundColor: item.MSRSTE_NM == '중구'? "orange":"" }}
              >
                {/* 측정일 */}
                <TableTd>{item.MSRDT}</TableTd>
                {/* 측정소 */}
                <TableTd>{item.MSRSTE_NM}</TableTd>

                <TableTd style={{ color:sortedData.includes(item) ? "yellow":"" }}>{item.PM10}</TableTd>
                <TableTd>{item.PM25}</TableTd>
                <TableTd style = {{color:IDEX_NM_Color(item.IDEX_NM)}}>
                  { IDEX_NM_Color(item.IDEX_NM) == (" ") ? "-" : item.IDEX_NM }
                </TableTd>
                <TableTd>{item.IDEX_MVL}</TableTd>
              </tr>

            ))}
          </tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
