# express-server-exercise

- 설치

  1. npm init
     -> 갑자기 끊긴다고 당황하지 말고 계속 엔터누른다.
     -> package.json을 만들어준다.

  2. npm install express
     -> Hello world 예제 (https://expressjs.com/ko/starter/hello-world.html)

  3. 서버는 `listen`으로 연다.

  4. 서버를 실행하고 싶다.(app.js를 실행하고 싶다.) 라고 하시면 nodemon 또는 node를 사용하면 된다.
     -> npx nodemon app.js

- POST (https://expressjs.com/ko/guide/routing.html)

  1. 미들웨어가 있어야 바디를 받아올 수 있다.
     -> `express.json();`을 통해 json을 받아올 수 있다.
     -> 에러가 나온다면 `express.json({strick: false});`
     -> 미들웨어를 한번에 쓰기 위해 use를 쓴다.
     -> 하나만 적용하고 싶으면 `app.get('/', jsonParser,(req, res) ~~` 이렇게 중간에 넣는 방법도 있다.

- 클라이언트 포트 번호로 여는 방법

  1. `npx serve -l 3000`

- cors 설치
  1. 콜스를 설치 해야 클라이언트에서 받을 수 있음
  2. 콜스 설치
     `npm install cors`
  3. 모든 요청에 대해 콜스 허용
  ```
  const cors = require('cors');

  app.use(cors());
  ```
  4. res.json으로 해야 클라이언트에서 문자열 받을 수 있음
