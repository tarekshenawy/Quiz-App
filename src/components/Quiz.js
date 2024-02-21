import React, { useRef, useState } from 'react';
import "./Quiz.css";


let items = [{
    question : " What sport is called the queen of sports ?",
        text1:"football",
        text2:"Tennis",
        text3:"handball",
        text4:"Volleyball",
        ans:1,
          
},
{
    question : "which is the smallest country in the world ?",
    
        text1:"vatican city",
        text2:"Russia",
        text3:"Qatar",
        text4:"egypt",
        ans:1,

    
          
},
{
    question : "which is the largest desert in the world ?",
    
        text1:"kalahari",
        text2:"Gobi",
        text3:"sahara",
        text4:"antarctica",
        ans:3,

    
          
},
{
    question :"which is the smallest continent in the world ?",
    
        text1:"asia",
        text2:"australia",
        text3:"arctic",
        text4:"africa",
        ans:4,
},

]

export default function Quiz() {
    let [index,setindex]=useState(0);
    let [data,setdata]=useState(items[index]);
    let [lock,setlock]=useState(false);
    let [score,setscore]=useState(0);
    let [result,setresult]=useState(false);
    let text1 =useRef(null);
    let text2 =useRef(null);
    let text3 =useRef(null);
    let text4 =useRef(null);
    let textarray =[text1,text2,text3,text4];

    function clickhandler(e,ans){
        if(lock === false){
            if(data.ans === ans){
                e.target.classList.add("correct");
                setlock(true);
                setscore(prev=>prev+1);
        
               }else{
                e.target.classList.add("incorrect")
                setlock(true);
                textarray[data.ans-1].current.classList.add("correct");
                
               }

        }
       
      
        
    }

    function nextpage(){
        if(lock === true){
            if(index=== items.length-1){
                setresult(true);
                return 0;
                
            }
            setindex(++index);
            setdata(items[index]); 
                setlock(false);
                textarray.map((el)=>{
                    el.current.classList.remove("correct");
                    el.current.classList.remove("incorrect");
                    return null;
                })
                
           
           

        }
      
       
    }
    function resethandler(){
        setindex(0);
        setdata(items[0]);
        setlock(false);
        setresult(false);
        setscore(0);
    }
  

    



  return (
    <div className="container">
        <h1 className="title">Simple Quiz</h1>
        <hr/>
        {result ? <><h1>you socre {score} out of 4</h1>
        <button className="nextbutton" onClick={()=>resethandler()}  >Reset</button></>:<>
        <div className="quiz">
            <h3 className="question">{index+1}.{data.question}</h3>
            <div className="answers-button">
                <button ref={text1} className='btn' onClick={(e)=>clickhandler(e,1)}>{data.text1}</button>
                <button  ref={text2} className='btn' onClick={(e)=>clickhandler(e,2)}>{data.text2}</button>
                <button ref={text3} className='btn' onClick={(e)=>clickhandler(e,3)}>{data.text3}</button>
                <button ref={text4} className='btn' onClick={(e)=>clickhandler(e,4)}>{data.text4}</button>
                
            </div>
            <button className="nextbutton" onClick={()=>nextpage()} >Next</button>
        </div>

        </>}
        
        
       
        </div>
    
  )
}



