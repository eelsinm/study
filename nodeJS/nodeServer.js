//node_modules 에 있는 express 관련파일 가져온다
let express = require ('express');

//express는 함수이므로 반환값을 변수에 저장한다.
let app = express();

//public 디렉토리를 static으로 기억한다.
//public 내부의 파일들을 localhost:8080/파일명으로 브라우저에서 불러올수 있다.
app.use(express.static('public'))

//8080 포트로 서버 오픈
app.listen (8080, function(){
    console.log("hi, this is server");
    console.log("hello, world");
})

app.get('/', function(req, res){
    //res.send("<h1>hello</h1>");
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res){
    //res.send("<h1>hello</h1>");
    res.sendFile(__dirname + "/public/main.html")
})

