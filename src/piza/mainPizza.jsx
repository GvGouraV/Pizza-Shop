import React, { Component } from "react";
import {Route , Switch ,Redirect } from "react-router-dom";
import PizzaData from "./pizzaData."
import Home from "./home";
import NavPizza from "./navPizza";
class MainPizza extends Component{
state={
  sizes : ["Regular","Medium","Large"],
  crusts : ["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic HandTossed"],
  pizzaData:[
    {"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes","crust":"","size":""},
    {"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes","crust":"","size":""},
    {"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton IcedTea","desc":"Lipton Iced Tea","veg":"Yes","crust":"","size":""},
    {"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes","crust":"","size":""},
    {"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"BurgerPizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo","veg":"No","crust":"","size":""},
    {"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato & capsicum in creamy mayo","veg":"Yes","crust":"","size":""},
    {"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes","crust":"","size":""},
    {"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"SideDish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed GarlicBread for a Cheesy indulgence","veg":"Yes","crust":"","size":""},
    {"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"SideDish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolutedelight with your favourite Garlic Breadsticks","veg":"Yes","crust":"","size":""},
    {"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"SideDish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastes best with dip","veg":"Yes","crust":"","size":""},
    {"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"SideDish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamyharissa sauce","veg":"No","crust":"","size":""},
    {"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"VegParcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes","crust":"","size":""},
    {"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"SideDish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecue chicken","veg":"No","crust":"","size":""},
    {"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"SideDish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilledmushrooms","veg":"Yes","crust":"","size":""},
    {"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes","crust":"","size":""},
    {"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes","crust":"","size":""},
    {"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"Deluxe Veggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes","crust":"","size":""},
    {"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farm house","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes","crust":"","size":""},
    {"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes","crust":"","size":""},
    {"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno","veg":"Yes","crust":"","size":""},
    {"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"Peppy Paneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes","crust":"","size":""},
    {"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"Veg Extravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno &extra cheese","veg":"Yes","crust":"","size":""},
    {"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese","veg":"No","crust":"","size":""},
    {"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No","crust":"","size":""},
    {"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepperbarbeque chicken & onion","veg":"No","crust":"","size":""},
    {"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo","veg":"No","crust":"","size":""}
    ],

    option:{ 
      size:"",
      crust:"",
      check:-1},
      myCart:[],
      index1:-1
   
};

handleOptionChange = (option)=>{
   let s1 = {...this.state}
  
       s1.option.size=option.size
       s1.option.crust=option.crust
    
  this.setState(s1)
 }

 handleCartItem = (img) =>{
  let s1 = {...this.state}

  let find = s1.pizzaData.find(piz=>piz.image==img)

  if(find.type=="Pizza")
    {
        if(s1.option.size=="")
            alert("Select The Size")
        else if(s1.option.crust=='')
            alert("Select the Crust")
        else if(s1.option.size!=""&&s1.option.crust!=''){
             let findCart=s1.myCart.find(piz=>piz.image==img)
             if(findCart){}
             else{
                s1.myCart.push({type:find.type,image:find.image,name:find.name,desc:find.desc,qty:1,crust:s1.option.crust,size:s1.option.size})
               s1.index1= s1.myCart.findIndex(pi=>pi.image==img)
                
              }
              console.log(s1.myCart)
             s1.option.size=""
             s1.option.crust=''
            }
      }
  else{
             
      let findCart=s1.myCart.find(piz=>piz.image==img)
         if(findCart){}
         else{
           s1.myCart.push({type:find.type,image:find.image,name:find.name,desc:find.desc,qty:1,crust:s1.option.crust,size:s1.option.size})
           }
            s1.option.size=""
            s1.option.crust=''
            

       }
         this.setState(s1)
  
 }

 addButton = (index) =>{
   let s1 = {...this.state}
   s1.myCart[index].qty++
   
   this.setState(s1)

 }
 subButton = (index) =>{
  let s1 = {...this.state}
  s1.myCart[index].qty--
  if(s1.myCart[index].qty<=0){
  
    s1.myCart.splice(index,1)
  }
   
 
  console.log(s1.myCart)
  this.setState(s1) 
 }

 showNavBar = () =>{
   
 }
    render(){
        let { pizzaData  , sizes , crusts ,option ,selArr, myCart,index1} = this.state
        

      return(
        <div className="container">
            <NavPizza/>
                <Switch>
                <Route path="/:category/:page" render={(props) =>
                   <PizzaData {...props} Data={pizzaData } 
                   sizes={sizes} crusts={crusts} 
                   option={option} selArr={selArr} 
                   add={this.addButton}
                   sub={this.subButton}
                   onHandleCart={this.handleCartItem}
                   onOptionChange={this.handleOptionChange} 
                   myCart={myCart}
                   index1={index1}/>}
                   />
      
                <Redirect from="/" to="/home/1"/>
                   
                </Switch>
         </div>)
    }
}
export default MainPizza;