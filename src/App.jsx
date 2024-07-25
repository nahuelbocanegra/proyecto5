import { useState } from 'react'
import './App.css'
import './assets/styles/styles.less'
import img from './assets/img/js/img'


function App() {
  const cartas=[1,2,3,4,5,6,7,8,9,10,11,12]


  


  
  return (
    
    <div>

      <ul>
        {
          cartas.map((num,index)=>(
            <li key={index}>
              <div className='front'>
                  
              </div>
              <div className='back'>
                {img.map((url,index)=>(
                    <img src={url} alt="" srcset="" />
                ))}
                  
              </div>
            </li>
          ))
        }
     
      </ul>
    </div>

  )
}

export default App
