const styles = new CSSStyleSheet()
styles.replaceSync(`

* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background-color: #e5e5f5;
}

.container {
  margin-top: 50px;
  margin-left: 500px;
  justify-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  width: 70vh;
  height: 100vh;
}
input {
  width: 100px;
  background-color: blue;
}
todo-list {
  color: #cbc0c0;
  display: block;
  padding: 20px 20px 20px 20px;
}

svg {
  width: 20px;
  height: 20px;
  fill: #b5ea81;
}
.fill {
  color: #b5ea81;
}
.arrow {
  width: 50px;
  fill: #a9a9f5;
}

back-list {
  margin-top: 30px;
  display: flex;
  color: #9d9dea;
  margin-bottom: 30px;
}
today-to {
  color: #9d9dea;
  display: flex;
  margin-bottom: 10px;
}

today-to h1 {
  margin-left: 20px;
}
today-to img {
  margin-left: 250px;
  width: 50px;
  height: 50px;
  fill: #a9a9f5;
  color: #a9a9f5;
  margin-top: px;
  margin-bottom: 10px;
}

load-to div {
  position: absolute;
  border: 1px solid black;
  border-radius: 20px;
  height: 10px;
  width: 370px;
  margin-left: 10px;
}

 load-to {
  position: relative;
  border: 1px solid #9797f9;
  border-radius: 20px;
  height: 10px;
  width: 70px;
  top: 100px;
  background-color: #9797f9;
  margin-bottom: 20px;
}
`)