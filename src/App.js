import React, {useState} from 'react'
import Icon from './Icon/Icon'
// React toastify
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


const App = () => {

const tiktokArray = new Array(9).fill("")
const [winMessage, setWinMessage] = useState("")
const [isCross, setIsCross] = useState(true)

// Restart tthe game  
const restartGame = () => {
    tiktokArray.fill("") 
    setWinMessage("") 
    setIsCross(true)
}

// win Logic 
const winLogic = () => {
    if(tiktokArray[0] == tiktokArray[1] && tiktokArray[0] == tiktokArray[2] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[3] == tiktokArray[4] && tiktokArray[3] == tiktokArray[5] && tiktokArray[3] !== ""){
        console.log("winner is", tiktokArray[3])
      }
      else if(tiktokArray[6] == tiktokArray[7] && tiktokArray[6] == tiktokArray[8] && tiktokArray[6] !== ""){
        console.log("winner is", tiktokArray[6])
      }
      //colums 
      else if(tiktokArray[0] == tiktokArray[3] && tiktokArray[0] == tiktokArray[6] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[1] == tiktokArray[4] && tiktokArray[1] == tiktokArray[7]  && tiktokArray[1] !== ""){
        console.log("winner is", tiktokArray[1])
      }
      else if(tiktokArray[2] == tiktokArray[5] && tiktokArray[2] == tiktokArray[8] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
      //diagnoles 
      else if(tiktokArray[0] == tiktokArray[4] && tiktokArray[0] == tiktokArray[8] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[2] == tiktokArray[4] && tiktokArray[2] == tiktokArray[6] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
}

// fill tik tok array  
const fillTiktokArray = (index) => {
    if(winMessage !== ""){
        return  toast.error('Game has already ended', {
            position: "bottom-center"
            });
    }
    if(tiktokArray[index] !== ""){
        return  toast.error('This box is already filled', {
            position: "bottom-center"
            });
    }
    else{
        tiktokArray[index] =  isCross ? "cross" : "circle"
        setIsCross(!isCross)
    }
    winLogic()
}

// design of tik tok game

    return(
         <div>
        <div className='gameboard'>
          <p>Tic Tac</p>
          <input className='game1' type="text"/>
          <input className='game2' type="text"/>
          <input className='game3' type="text"/><br/>

          <input className='game4' type="text"/>
          <input className='game5' type="text"/>
          <input className='game6' type="text"/><br/>
          <input className='game7' type="text"/>
          <input className='game8' type="text"/>
          <input className='game9' type="text"/><br/>
          <button>RESET</button>
          
          
          
        </div>
        </div>   
        


    )
}
export default App