import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <div id="header">
      <div>
        <a href="#" onClick={() => {
          props.printText();
          alert("test");
        }}>
          {props.title}
        </a>
      </div>
    </div>
  );
  
}
function Main(props) {
  var list =  [];

  props.list.forEach(element => {
    list.push(<li>{element}</li>);
  });

  for(var i=0; i<props.length; i++){
    list.push(<li></li>)
  }

  return <div id="main">
        <ul>
         {list}
        </ul>
      </div>
}
      
function Footer(props) {
  return <div id="Footer">
      <div><a href="#" onClick={()=>{
        props.printText();
        alert(props.message);
      }}>{props.message}</a></div>
    </div>
}



function App() {
  //Main, Footer 컴포넌트 생성해서 부착
  var subject1 = ["자바", "자바스크립트", "오라클"];
  var subject2 = ["html", "css", "리액트", "mysql"];
  return (
    <>
      <Header title="자바 재밌다!" printText={()=>{
        console.log("함수 보내기 테스트!");
      }}></Header>
      <Header title="오라클 재밌다!" printText={()=>{
        alert("함수 보내기 테스트22222222!");
      }}></Header>
      <Header title="html 재미없다!"></Header>

      <Main list={subject1}></Main>
      <Main list={subject2}></Main>

      <Footer message="zzzz"></Footer>
    </>
  );
}

export default App;

