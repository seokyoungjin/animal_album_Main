export default function TabBar({ initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.template = () => {
    let temp = `<div id="all">전체</div>
   <div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>`;

    return temp;
  };

  this.render = () => {
    console.log(this.template());
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
}
