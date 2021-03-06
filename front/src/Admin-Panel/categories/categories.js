import React,{Component} from 'react';
import "./categories.css"
import trash from "../../trash1.png"
import { Confirm } from 'react-st-modal';
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


        this.props.getCat(this.state.category)

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


    removeCategory =async(id)=>{
         const url=`http://localhost:8001/deletecategory/${id}`;
         const response=await fetch(url,{method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    });
            this.componentDidMount();
        }

 

    
    render(){
        return(
            
            <div className="Category">
                

        <div className="adminCategories">
            
                <form   onSubmit={this.createCategory} className="myForm">
                <input type="text" name="categoryname" placeholder="Create New Category" className="searchText"></input>
                <input type="submit" value="Create" className="submit" />
                
            </form>
            <ul className="gameCategories">
             {this.state.category.map(cat=> <li key={cat.id}> {cat.categories} <span title="delete" className="delete" style={{color:"red",margin:"20px"}} 
             onClick={async ()=>{ const isConfirm = await Confirm(
                          'You cannot undo this action',
                          'Are you sure you want to delete the Category?'
                        );
                        if (isConfirm) {
                         
                            this.removeCategory(cat.id)
                        }
                    }
                } > 
             <img src={trash} className="trash"/>
              </span></li>)}
            </ul>
            </div>   



         </div>
        )
    }
}
export default Category;