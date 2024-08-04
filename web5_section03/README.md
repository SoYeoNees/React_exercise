## 1. 리액트는 HTML대신 JSX를 사용한다.

- jsx는 리액트로 프로젝트 개발할 때만 사용
- 공식적인 자바스크립트 문법은 아니다.
- JSX파일에 자바스크립트와 HTML을 동시에 작성하여 편리

## 2. 리액트는 최상단에 하나의 태그(요소)로 감싸야 한다.

<></>

## 3. 하나로만 되어 있는 태그는 꼭 닫아줘야 한다.

<img></img>
<img />

## 4. 클래스는 className으로 써야 한다.

이유? class는 예약어

## 5. style 작성할 때는 {{}}
{{속성명(camelCase) : '속성값'}}

background-color -> backgroundColor

## 6. 변수를 HTML에 넣을 때에는 {}

## 7. 클릭이벤트

onClick = {실행할 함수}
onClick = {funcion(){실행할 코드}}
onClick = {()=>{실행할 코드}}

## 8. 라이브러리 설치는 npm

npm install 라이브러리명
npm i 라이브러리명

npm remove 라이브러리명
npx react-create-app@latest ./
npx 설치X 한번실행

## 9. 데이터는 변수말고 state에 담아서 사용

let [a, b] = [10, 20];
let [like, setLike] = useState(10);
setLike(값변경) => like = 값

변수대신 사용하는 이유?
state는 변동사항이 생기면 state를 사용하고 있는 html도 자동으로 재렌더링