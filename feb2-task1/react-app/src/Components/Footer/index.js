import "./index.css"
function Footer(props){
    const{user,isUser}=props;
 
    if(isUser==="userActive"){
        const {id,email,first_name,last_name,avatar}=user;
        return(
            <footer className="Footer-Cont">
           
            
            
                <h1>User Details:</h1>
               
                
            
            <div className="user-cont">
                <div>
                <p>User Id : {id}</p>
                <p>User Email : {email}</p>
                <p>User Full name : {first_name+" "+last_name}</p>
                </div>
                <img src= {avatar} alt=" " />
            </div>
              
              
            
            </footer>
        )
    }
    else if(isUser==="productActive"){
        const{id,name,color,year,pantone_value}=user
        return(
            <footer className="Footer-Cont">
           
            
            
               <h1>Product Details:</h1>
               
                
            
             <div className="product-cont">
               <p>Product Id : {id}</p>
               <p>Product Name : {name}</p>
               <p>Product Color : {color}</p>
               <p>Product Year : {year}</p>
               <p>Product Pantone value : {pantone_value}</p>
             </div>
              
              
            
             </footer>
        )
    }
    
}
export default Footer;