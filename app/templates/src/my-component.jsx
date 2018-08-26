import React, {Component} from 'react';

// 可自行选用 less 或 styl 来编写样式
import './my-component.less';
// import './my-component.styl';

const MyComponent = () => {
  return (
    <div className="container">
      <div className="content">
        <p>React here!!!</p>
      </div>
    </div>
  );
};

export default MyComponent;
