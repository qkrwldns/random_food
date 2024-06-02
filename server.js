const bodyParser = require('body-parser');
const express = require('express');
const path = require("path"); // Make sure to require 'path'
const app = express();
const port = 3000;
// EJS를 사용하기 위한 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Explicitly set the views directory
app.use(express.json()); // Middleware to parse JSON
app.listen(port, () =>{
    console.log(`서버 실행중: http://localhost:${port}`);
});

const Mf = {
    "컵라면": ["새우탕", "컵누들", "쌀국수", "치즈게티 콕콕콕"],
    "국밥": ["선지해장국", "내장국밥", "육개장", "만둣국"],
    "분식" : ["떡볶이", "돈까스", "라면", "토스트"],
    "밥" : ["한솥"],
    "육류": ["치킨", "소고기", "삼겹살", "황제살", "갈비"]
};

function getRandomFood() {
    // Get all keys (categories) from the Mf object
    const categories = Object.keys(Mf);

    // Select a random category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Get the array of foods for the selected category
    const foods = Mf[randomCategory];

    // Select a random food from the array
    const randomFood = foods[Math.floor(Math.random() * foods.length)];

    // Return the selected category and food
    return { food: randomFood };
}

// Example usage


app.get('/', (req, res) => {
    res.render('main', { food: "좋아하는 음식 중 랜덤" });
});

app.put('/food', (req, res) => {
    const { food } = getRandomFood();
    // res.send('Hello World!' + conut);
    //main.ejs가 뜬거임 // count : count 랑 같음 생략가능 같은 이름은
    res.json({ food });
})

app.delete('/food', (req, res) => {
    res.json({"result":"OK", food: "좋아하는 음식 중 랜덤" });
});