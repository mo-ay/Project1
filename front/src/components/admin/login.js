import React from 'react';
import { Redirect } from 'react-router-dom';

class login extends React.Component{


    state ={
        autho: 0,
        err : ""
    }

    loginCheck = async (e)=>{
        e.preventDefault();
        
        const url = "http://localhost:8001/login"
        const body = {
            adminName : e.target.adminName.value ,
            adminPassword : e.target.adminPassword.value
        }
       
      

        const response= await fetch(url,{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)}).catch(function (error) {
            console.log(error );
          });
          const result = await response.status;
                this.setState({autho:result})
          if(result !== 200 ){
            alert("Uesr name Or password is wrong")
          }
          
           
    }




    render(){
        if(this.state.autho===200){
            return(
                <Redirect to= './dashboard'/> 
            )
        }
        return(
            <div>
            <form onSubmit = {this.loginCheck}>
                
                <input type="text" name ="adminName" placeholder="user name"/>
                <input type="password" name ="adminPassword" />
                <input type = "submit" value="LogIn"/>

            </form>
            </div>
        )
    }

}
export default login