import React, {useState,useEffect} from "react";
export const Home =()=>{
  
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  
  /*useEffect(()=>{
    var memo=localStorage("nome",name)
  },[name]);*/
  
   const showMemoName =()=>{
   var user=localStorage.setItem('USUARIO',JSON.stringify(name));
 
   };
   
   const showMemoEmail=()=>{
     var user=localStorage.setItem('EMAIL',JSON.stringify(email));
   };
   
   const showMemoPassword=()=>{
     var user=localStorage
     .setItem('KEY',password);
   }
   
   const getAllfunctions=()=>{
     setTimeout(()=>{
       alert(" Atenção Dados Salvo Em localStorage")
     },5000)
     showMemoName();
     showMemoName();
      showMemoEmail();
   };
   
    const showEventName =(e)=>{
    const EventName = e.target.value;
    setName(EventName);
  };
  
  const showEventEmail =(y)=>{
    const EventEmail=y.target.value;
    setEmail(EventEmail);
  }
   
  const showEventPassword=(x)=>{
    const EventPassword = x.target.value;
    setPassword(EventPassword);
    }
   
   const Styles={
     width:"100%", 
     display:"flex", 
     flexDirection:"column", 
     backgroundColor:"#00BFFF", 
     height:"755px", 
     justifyContent:"start", 
     alignItems:"center", 
     borderRadius:"6px"
   };
   
   const StyleInputs={
     width:"270px", 
     borderRadius:"6px", 
     textAlign:"center", 
     border:"0", 
     outLine:"none", 
     padding:"18px", 
   };
   
   const StylesSubmit={
     width:"170px", 
     height:"60px", 
     borderRadius:"7px", 
     border:"0", 
     outLine:"none", 
     backgroundColor:"#00FA9A", 
     color:"#ffffff", 
     fontWeight:"800", 
     letterSpacing:"2px"
   };
   
   const StylesImfo={
     width:"350px", 
     margin:"90px", 
     height:"250px", 
     backgroundColor:"#fff", 
     borderRadius:"6px", 
     display:"flexStart",
     flexDirection:"column", 
     justifyContent:"center", 
     alignItems:"center", 
     
   };
   
   const StylesParagraph={
     display:"flex", 
     //justifyContent:"flexStart", 
     alignItems:"center", 
     marginTop:"40px", 
     marginLeft:"8px", 
     color:"#696969"
   };
  
  return(
 
    <div style={Styles}>
    
    <h1>Formulario</h1>
    <input type="text"
    onChange={showEventName} placeholder="Seu Nome"  style={StyleInputs}/><br/>
    
    <input type="email" 
    onChange={showEventEmail} placeholder="Seu Email" style={StyleInputs} /><br/>
    
    <input type="password"
    onChange={showEventPassword} placeholder="Sua Senha" style={StyleInputs} /><br/>
    <input type="submit" 
    onClick={getAllfunctions}
    style={StylesSubmit} />
     
    
    <div style={StylesImfo}>
    
    <p style={StylesParagraph}> 
    <strong>Nome:</strong> {name}</p>
     
     <p style={StylesParagraph}> 
     <strong>Email:</strong> {email}</p>
     
    <p style={StylesParagraph}> 
    <strong>Senha:</strong>{password}</p>
    </div>
    
    <div>
    <a href="https://www.instagram.com/guittzoom/">power by guitt/zoom</a>
    </div>
    </div>
     
    );
   
}