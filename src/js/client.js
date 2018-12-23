import React from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;

/* data pull
var SkillBox = React.createClass({
  getInitialState:function(){
    return {skillData:[]};
  },
  handleAdd:function()
})
*/

class Layout extends React.Component {
  getTopicTags(){
    return ["AI", "C#", "C++", "javascript"];
  }
  showtagButton(tags){
    for(i in tags){
    <Button>
      i
    </Button>
    }
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
        <h1><Grid>
          aaaaaa
        </Grid></h1>
      </div>
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));