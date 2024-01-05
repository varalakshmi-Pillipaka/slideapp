import './index.css';
import {useState} from 'react';
function App() {

  const msg=[<Ques1 />, <Ques2 />, <Ques3 />, <Ques4 />, <Ques5 />];
  const [pg, setpg] = useState(1);

  function handlePrevious()
  {
    setpg(pg - 1);
  }
  
  function handleNext()
  {
    setpg(pg+1);
  }

  return (
   <div className="page">
      <div class="number">
      
         <div class="varu">
         <div id="p" class={pg===1?"active":""} >1</div> 
         </div>
         
         <div class="varu">
         <div id="p" class={pg===2?"active":""}>2</div>
         </div>
         
         <div class="varu">
         <div id= "p" class={pg===3?"active":""}>3</div>
         </div>

         <div class="varu">
         <div id= "p" class={pg===4?"active":""}>4</div>
         </div>

         <div class="varu">
         <div id= "p" class={pg===5?"active":""}>5</div>
         </div>
         
      </div>

        <div class="myclass">
           <div className="message">
            <form onSubmit={getResult} >
                 {msg[pg-1]} 
            </form>           
            </div>
        </div>    
      
        <div class="mycls" >
          <div className="buttons">
            <br></br>
            <br></br>
              <button onClick={handlePrevious} >previous</button>
              <button onClick={handleNext}>next</button>
          </div>
       </div>
  </div>
  );
}
export default App;

function Ques(props)
{
  return(
    <div>
    <h3>{props.ques}</h3>
    <input type='radio' name={props.name} value={props.op1} /><label>{props.op1} </label>
    <br/>
    <input type='radio' name={props.name} value={props.op2} /><label>{props.op2} </label>
    <br/>
    <input type='radio' name={props.name} value={props.op2} /><label>{props.op3} </label>
    </div>
  )
}

  function getResult(event)
  {
    let ans1 = event.target.q1.value;
    let ans2 = event.target.q2.value;
    let ans3 = event.target.q3.value;
    let ans4 = event.target.q4.value;
    let ans5 = event.target.q5.value;
    let marks=0;
    
    if(ans1 === 'A.OOPL')
    {
      marks++;
    }
    if(ans2 === 'A. DBMS')
    {
      marks++;
    }
    if(ans3 === 'C. All Of the above')
    {
      marks++;
    }
    if(ans4 === 'B. JavaScriptL')
    {
      marks++;
    }
    if(ans5 === 'C. Object-Based')
    {
      marks++;
    }
    alert('Total Marks: '+marks);
  }

  function Ques1()
  {
    return(
      <div class="question">
              <Ques
               ques = "Q1. What is JAVA...?"
                   op1 = "A.OOPL"
                   op2 = "B.Functional"
                   op3 = "C.Scripting"
               name="q1"
               />
     </div>
    );
  }

  function Ques2()
  {
    return(
      <div class="question">
     <Ques
      ques = "Q2. What is SQL...?"
          op1 = "A. DBMS"
          op2 = "B. PL"
          op3 = "C.Scripting "
      name="q2"
     />
     </div>
    );
  }

  function Ques3()
  {
    return(
      <div class="question">
     <Ques
      ques = "Q3. What is Python...?"
          op1 = "A. High LevelL"
          op2 = "B. Structured"
          op3 = "C. All Of the above"
      name="q3"
     />
     </div>
    );
  }

  function Ques4()
  {
    return(
      <div class="question">
        <Ques
            ques = "Q4. What is reactJS...?"
                op1 = "A. OOPs"
                op2 = "B. JavaScriptL"
                op3 = "C. Structured"
            name="q4"
           />
      </div>
    );
  }

  function Ques5()
  {
    return(
      <div class="question">
        <Ques
            ques = "Q5. Which type of JavaScript language is...?"
                op1 = "A. Assembly-language"
                op2 = "B. Object-Oriented"
                op3 = "C. Object-Based"
            name="q5"
           />
           <br></br>
           <input type='Submit'  value='GetResult'/>
      </div>
    );
  }

