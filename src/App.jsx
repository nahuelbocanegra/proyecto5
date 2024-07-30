import { useState } from 'react'
import './App.css'
import './assets/styles/styles.less'
import img from './assets/img/js/img'


function App() {
  const cartas=[img[0],img[1],img[2],img[3],img[4],img[5],img[6],img[7],img[8],img[9],img[10],img[11]]
  const [estado,setEstado]=useState(true);

 
  const Li=(props)=>{
    const{img,index}=props;

    console.log(index)
    return(
      <li onClick={()=>{setEstado(!estado)}} className={`${estado? "":`estado${index}`}`}>
              <div className='front'>
                  
              </div>
              <div className='back'>
                <img src={img} alt="" />
              </div>
      </li>
    )
  }

  


  
  return (
    
    <div>

      <ul>
        {
          cartas.map((img,index)=>(
           
           <Li key={index} index={index} img={img}></Li>
          ))
        }
     
      </ul>
    </div>

  )
}

export default App
