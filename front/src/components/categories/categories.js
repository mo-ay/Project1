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

 

    
    render(){
        return(
            
            <div className="Category">

                {!this.props.adminView?

                  
                     <div className="allBlogsTop homeCategories">
                       <h2 className="allBlogsHeading">All Blogs:</h2>
                        <select  name="" id="">{this.state.category.map(cat=> 
                          <option key={cat.id} >{cat.categories}</option>)}
                        </select>
                     </div>
                  
                  :
          <div className="adminCategories">
            <ul>
             {this.state.category.map(cat=> <li key={cat.id}> {cat.categories} <span style={{color:"red",margin:"20px"}} onClick={()=>this.removeCategory(cat.id)} > 
              X</span></li>,<br></br>)}
            </ul>
                <form   onSubmit={this.createCategory}>
                <input type="text" name="categoryname"></input>
                <input type="submit" />
            </form>
            </div>   
    };


         </div>
        )
    }
}
export default Category;