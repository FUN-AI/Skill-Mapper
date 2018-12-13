import React from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;

class Layout extends React.Component {
  getTopicTags(){
    return ["AI", "C#", "C++", "javascript"];
  }
  showtagButton(tags){
    for()
    <Button>

    </Button>
  }

  firstLayer(){
    <div>
      <Grid>
        
      </Grid>
    </div>
  }
  render() {
    return (
      <div>
        <Grid>

        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));