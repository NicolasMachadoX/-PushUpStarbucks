import { useEffect, useState } from "react";
import inventario from "../assets/json/inventario";
import image from '../assets/img/img.jpg'

import './Scroll.css'

import  {Link} from 'react-router-dom'



const Scroll = () => {
     const [data,setData] = useState([]);
 
     useEffect(()=>{
 
         
             const getData = async () => {
                 try {
                     const datos = inventario;
                     setData(datos);
                         console.log(data);
                 } catch (error) {
                     console.log('tenemos un problema ');
                 }
             }
             getData();
        
     })
 
     return(
               <div className="scrollContainer">
                   
                    <div className="scroll">
                         <ul className="ulScroll">
                         { data.map((item,i)=>(
                         <li className="itemScroll">
                         <img className="imgScroll" src={image} alt="" />
                         <div className="textScroll">
                         <p >{item.name}-${item.price}</p>
                         </div>
                         
                         </li>
                      ))}
                         </ul>       
                    </div>
                   
               </div>            
     )
};

export default Scroll;