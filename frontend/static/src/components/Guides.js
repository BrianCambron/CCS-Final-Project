// import React, { Component } from 'react';
import './CSS/Guides.css'

function Guides(props){
  return(
    <div className="guides">
      <div>
          <h5 style={{textDecoration: 'underline'}}>Tips to get you started</h5>
          <ol style={{paddingLeft: '20px', paddingRight:'15px'}}>
            <li style={{fontStyle: 'italic'}}>Note your net income:</li>
            <p><span><i className="far fa-hand-point-right"></i></span> The first step in creating a budget is to identify the amount of money you have coming in.</p>
            <li style={{fontStyle: 'italic'}}>Track your spending:</li>
            <p><span><i className="far fa-hand-point-right"></i></span> It’s helpful to keep track of and categorize your spending so you know where you can make adjustments.</p>
            <li style={{fontStyle: 'italic'}}>Set your goals</li>
            <p><span><i className="far fa-hand-point-right"></i></span> Before you start sifting through the information you’ve tracked, make a list of all the financial goals you want to accomplish in the short-and long-term.</p>
            <li style={{fontStyle: 'italic'}}>Make a plan</li>
            <p><span><i className="far fa-hand-point-right"></i></span> Use the variable and fixed expenses you compiled to help you get a sense of what you’ll spend in the coming months.</p>
            <li style={{fontStyle: 'italic'}}>Adjust your habits if necessary</li>
            <p><span><i className="far fa-hand-point-right"></i></span> You can start to see where you have money left over or where you can cut back so that you have money to put toward your goals. </p>
            <li style={{fontStyle: 'italic'}}>Keep checking in</li>
            <p><span><i className="far fa-hand-point-right"></i></span> It’s important that you review your budget on a regular basis to be sure you are staying on track.</p>
          </ol>
        </div>
      <div className='shadow p-3 mb-5'>
        <h5 style={{textDecoration: 'underline'}}>Helpful Articles</h5>
        <div className='mb-3'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp#:~:text=Senator%20Elizabeth%20Warren%20popularized%20the,socking%20away%2020%25%20to%20savings.">The 50/20/30 Rule</a>
        </div>
        <div className='mb-3'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.investopedia.com/terms/b/budget.asp">What is a Budget?</a>
        </div>
        <div className='mb-3'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.daveramsey.com/blog/the-truth-about-budgeting">Truth about Budgeting</a>
        </div>
      </div>
    </div>
  )
}
export default Guides;
