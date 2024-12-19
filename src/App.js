import React from 'react';
import Class1 from './Class1.js';
const App = () => {
  return (
    <div>
      <h1>Learn React</h1>
      <label aria-label="content">Hello</label>
      <input
        type="text"
        placeholder="Enter User Name"
        data-testid="username"
      />
			<button name="btnsave">Save</button>
			<Class1/>
    </div>
  );
};

export default App;
