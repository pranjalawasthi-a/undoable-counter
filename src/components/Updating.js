import {useState} from 'react';
import './Updating.css';
const Updating =() =>{
    const[result,setResult]=useState(0);
    const[undoLog,setUndoLog]=useState([]);
    const[redoLog,setRedoLog]=useState([]);

    const changeResult =(num)=>{
        setResult(result+num);
        const arr=undoLog;
        arr.unshift(result+num);
        if(arr.length>50)
        arr.pop();
    }
    const undoHandler=()=>{
        if(undoLog.length>0){
            const arr=undoLog;
            setResult(arr[0]);
            redoLog.unshift(arr[0]);
            arr.shift();
        }

    }

    const redoHandler =()=>{
        if(redoLog.length>0){
            const arr=redoLog;
            setResult(arr[0]);
            undoLog.unshift(arr[0]);
            redoLog.shift();
        }
       
    }
    return ( 
        <div className="parent">
            <div className='u-r'>
                <button onClick={() => {undoHandler()}} className>Undo</button>
                <button onClick={() => {redoHandler()}}>Redo</button>
            </div>
            <div className='add-sub'>
                <div className='child'>
                <button  onClick={() => {changeResult(-100)}} className="buttons-color">-100</button>
                <button  onClick={() => {changeResult(-10)}} className="buttons-color">-10</button>
                <button  onClick={() => {changeResult(-1)}} className="buttons-color">-1</button>
                </div>
                <p className='result'>Counter : {result}</p>
                <div className='child'>
                <button onClick={() => {changeResult(1)}} className="buttons-color">+1</button>
                <button onClick={() => {changeResult(10)}} className="buttons-color">+10</button>
                <button onClick={() => {changeResult(100)}} className="buttons-color">+100</button>
                </div>
            </div>
            

            
        </div>
       
    );
}

export default Updating;