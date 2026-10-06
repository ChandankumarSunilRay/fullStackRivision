import Card from './component/Card';

function App() {

  let newObj = {
    father: "sun",
    doughter: "sister"

  }


  return (
    <>

      <h1> This is app.js page</h1>
      <Card myText = "passingProps "/>
      <Card myText="secondPage" />
    </>
  );
}

export default App;