import React from 'react';

function Book({name, image}) {
  return (
    <div>
      <h2> {name} </h2>
      <img src={image} />
    </div>
  );
}

const BookList = [
  {
    name: "전천당 7",
    image:
      "https://gfile.gilbut.co.kr//gilbut/dang_samplebook/202008//book_07.jpg"
  },
  {
    name: "고무줄 늘리기",
    image:
      "https://cdn.news2day.co.kr/data/tmp/2003/20200313150047_ydkqtwba.jpg"
  },
  {
    name: "엉덩이 탐정 6",
    image:
      "https://image.yes24.com/goods/60564391/800x0"
  },
  {
    name: "설민석의 한국사 대모험 15",
    image:
      "https://image.yes24.com/momo/TopCate3060/MidCate010/305189451.jpg"
  }
]

// 이 application에서 Food Component로 정보를 보내고 그런 다음에 Food Component에서 그 정보를 어떻게 사용하는지
function App() {
  return (
    <div>
      { BookList.map( popular => (
        <Book name={popular.name} image={popular.image} />
      ))}
    </div>
  );
}

export default App;
