import React from 'react';
import Question_03_Component from './Question_03_Component'; // コンポーネントのインポート

export default function Question_03() {
  return (
    <div>
      <h1 className='question-title'>【問３】コンポーネント呼出し</h1>
      <div className='question-content'>
        {/* Question_03_Component を呼び出し、異なるプロパティを渡す */}
        <Question_03_Component button="Click Me" message="This is the first button" />
        <Question_03_Component button="Press Here" message="This is the second button" />
        <Question_03_Component button="Submit" message="This is the third button" />
      </div>
    </div>
  );
}
