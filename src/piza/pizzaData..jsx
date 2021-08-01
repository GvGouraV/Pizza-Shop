import React, { Component } from "react";
import { Link } from "react-router-dom";
class PizzaData extends Component{
  state = {
    check:-1,
    
  }

showDropDown = (arr,name,id,val,lable,index) =>{

  return(<div className="col">
  <select className="form-control" style={{width : "130px"}} id={id} name={name} value={val}  onChange={this.handleChange} onClick={()=>this.changeIndex(index)}>
            
            <option  selected={val==''?true:false}  >{lable}</option>
                        {arr.map(op=><option selected={val==op?true:false} >{op}</option>)}
  </select> 
</div>)
}
  changeIndex = (index) =>{
    let s1 = {...this.state}
    s1.check=index
    this.setState(s1)
  }
 
 showFilds = (piz,sizes,crusts,index,category) => {
   let {check} = this.state
   let {Data,selArr,onHandleCart,myCart,option,index1} = this.props
console.log(index1)
   if(check==index)
     {
             piz.crust=option.crust
             piz.size=option.size
   
     }if(index1>=0){
      let {crust='',size='',image=''}=myCart[index1]
      if(image==piz.image){
      piz.crust=crust
        piz.size=size
       console.log("ji")}

     }


   return(
          <div className="col-6 border">
              <img src={piz.image}  width="280" height="120"/>
              <h1 style={{fontSize : "15px"}}>{piz.name}</h1>
              <p style={{fontSize : "15px"}}>{piz.desc}</p>  
              {category=="veg"||category=="non-veg"
              ?<div className="row"> 
                 {this.showDropDown(sizes,"size","size"+index,piz.size,"Select Size",index)}  
                 {this.showDropDown(crusts,"crust","crst"+index,piz.crust,"Select Crust",index)}  
                 </div>
                
             
              
              :""}{myCart.find(pi=>pi.image==piz.image)
                ?  this.button(myCart.find(pi=>pi.image==piz.image).qty,myCart.findIndex(pi=>pi.image==piz.image))
                :<button className="btn btn-primary" onClick={()=>onHandleCart(piz.image)}>Add to Cart</button> 
              }
                     
            </div>)
 }
 
 handleChange = (e) =>{
  let s1 = this.state
  const { currentTarget : input} = e;
  let option = {...this.props.option}
  let crsts = document.getElementById("crst"+s1.check).value
  let sizes = document.getElementById("size"+s1.check).value
  option.size=sizes;
  option.crust=crsts;
  this.props.onOptionChange(option);
}

 
 button = (qty,index) =>{
   let {add,sub} = this.props
   return(<div className="container text-center">
    <div class="input-group text-center mb-3 container-fluid">
          <button class="btn btn-danger  text-center" onClick={()=>sub(index)} >-</button>
          <div class="input-group-prepend">
          <input type="text" class="form-control " disabled  value={qty} style={{width: "40px" ,height: "40px"}}/>
          </div>
          <button class="btn btn-success text-center" onClick={()=>add(index)} >+</button>
   </div></div>)
 }
 
 
 
 
  render(){
    let {check} = this.state
  let { Data ,sizes,crusts,myCart } = this.props;
  const{ category } = this.props.match.params

  let Pizza=
  category=="veg"
  ?Data.filter((piz)=>(piz.type=='Pizza'&&piz.veg=="Yes"))
  :category=="non-veg"
  ?Data.filter((piz)=>(piz.type=='Pizza'&&piz.veg=="No"))
  :category=="sideDishes"
  ? Data.filter((piz)=>(piz.type=='SideDish'))
  :category=="otherItem"
  ?Data.filter((piz)=>(piz.type=='Beverage'||piz.type=="Burger Pizza"))
  :[]
  
check=-1 
  
    return(
       <div className="container text-center">
           <div className="row">
             <div className="col-8">

                  <div className="row border">
                    {Pizza.map((piz,index)=>(
                       index%2==0
                       ? this.showFilds(piz,sizes,crusts,piz.veg=="Yes"?index:index+6,category)
                       : this.showFilds(piz,sizes,crusts,piz.veg=="Yes"?index:index+6,category)
                      
                       ))}
                  </div> 
             </div>
             <div className="col-4">{
             category=="home"
             ?""
             : myCart.length==0
             ?<h1>Cart is Empty</h1>
              :myCart.map((ct,index)=>(
               <div className="row">
                 <div className="col">
                 <img src={ct.image}  width="280" height="120"/>
                 <h1 style={{fontSize : "15px"}}>{ct.name}</h1>
                 <p style={{fontSize : "15px"}}>{ct.desc}</p>  
                 {ct.type=="Pizza"?<h6>{ct.size}{ct.crust}</h6>:""}
                 {this.button(ct.qty,index)}
                   </div>
               </div>

              ))}
             </div>
           </div>
       </div>
    )
 }
}
export default PizzaData;