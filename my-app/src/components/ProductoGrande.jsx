import { useEffect, useState } from "react";
import inventario from "../assets/json/inventario";

import image from '../assets/img/img.jpg'

import './ProductoGrande.css'
import Sidebar from "./Sidebar";

const ProductoGrande = () => {
    const [data,setData] = useState([]);
    const [dataScroll,setDataScroll] = useState([]);

    useEffect(()=>{

        
            const getData = async () => {
                try {
                    const datos = inventario;
                   
                    datos.forEach(element => {
                        console.log(data.length);
                        if(data.length < 1){
                            console.log(element);
                            setData([...data,element])
                        }else{
                            console.log('enough');
                        }
                    });
                   
                    console.log(data);
                } catch (error) {
                    console.log('tenemos un problema ');
                }
            }
            getData();
       
    })

    return(
        <div className="bodyProducts">
            {
            data.map((item,i)=>(
                   <div className="product" key={i}>
                   <div className="left">
                    <div className="titCont"> <h2  className="titulo">{item.name}</h2></div>
                    <div className="descCont"><h2 className="descripcion">{item.description}</h2> </div>
                 </div>
   
               <div className="rigth">
                <div className="image">
                <img src={image} className="realImage"/>
   
                </div>            
                <Sidebar></Sidebar>
               </div>
               </div>
            ))} 

            
        </div>
    )
}

export default ProductoGrande;