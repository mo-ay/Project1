import React,{Component} from 'react';

class Category extends Component{
    state={
        category:[]
    }



    async componentDidMount(){
        
        const url='http://localhost:8001/category';
        
        const response=await fetch(url);
      
        const result=await response.json();
        
        this.setState({category:result});
        
        console.log(this.state.category);

    }

    createCategory =async(e)=>{

        e.preventDefault();

        const url='http://localhost:8001/addcategory';
        const body={
            categories:e.target.categoryname.value}
        const response=await fetch(url,{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)});
        const result=await response.json();
        console.log("elie")

        this.componentDidMount();
        e.target.categoryname.value="";

    }
   
    // getId=async(e)=>{
    // const  id=e.target.del.value;
    //     const url=`http://localhost:8001/categoryid/${id}`;
    //     console.log(id+"piza");
    // }


    removeCategory =async(x)=>{

        const url='http://localhost:8001/deletecategory';
        const body={
            id:x
        }
        const response=await fetch(url,{method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)
    });
     this.componentDidMount();
        }


    }
   
    getId=async(e)=>{
    const  id=e.target.del.value;
        const url=`http://localhost:8001/categoryid/${id}`;
        console.log(id+"piza");
    }


    removeCategory =async(e)=>{
        const url='http://localhost:8001/deletecategory';



    }






    
    render(){
        return(
            <div className="Category">
                <h1>categories</h1>
                <div> </div>
                    <ul>

             {this.state.category.map(cat=> <li key={cat.id}> {cat.categories} <span style={{color:"red",margin:"20px"}} onClick={()=>this.removeCategory(cat.id)} > 
            X</span></li>,<br></br>)}
            </ul>

        {this.state.category.map(cat=> 
            
            <li key={cat.id}> {cat.categories} 
            <span className="delete" > 
            <button  value={cat.key}    onClick={this.getId} name="del">Del</button>
          </span></li>,<br></br>)}</ul>


            <form   onSubmit={this.createCategory}>
                <input type="text" name="categoryname"></input>
                <input type="submit" />
            </form>
            </div>
        )
    }

}
export default Category;