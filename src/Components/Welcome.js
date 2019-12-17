import React, { Component} from 'react'; 

import ModifAcc2 from './ModifAcc2.js';
import data2 from './data2.js'
import LogOut from './LogOut.js'
import CardData from './CardData.js'
import AddCard from './AddCard.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import ModifCard from './ModifCard.js';
import MakeDeposit from './MakeDeposit.js';
import MakeWith from './MakeWith.js';
import MoneyTransfer from './MoneyTransfer.js';

class Welcome extends Component {

    constructor(props) {
        super(props); 
        this.state = {

            userEmail : this.props.userEmail,
            userMdp: this.props.userMdp,
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            userId:this.props.userId,

            addCardDigit : '',
            addCardBrand : '',
            addCardExp : '', 

            cardsDigit : [],
            cardsBrand : [],
            cardsExp : [],

            balance : 0,
            depositValue: 0,
            withValue: 0, 

            userCardNum : this.props.CardData[this.props.userId].last_4,
            userCardBrand : this.props.CardData[this.props.userId].brand,
            userCardExp : this.props.CardData[this.props.userId].expired_at
         
      
  
        }
        

    }

    handleUserCardBrandUpdate(item) {
        this.setState({userCardBrand :  item
        })
    }

    handleUserCardDateUpdate(item) {
        this.setState({UserCardExp :  item
        })
    }

    handleUserCardNumUpdate(item) {
        this.setState({UserCardNum :  item
        })

    }

    handlePlusBalance(item){
        this.setState({depositValue :  item
        })
    }

    handleMoinBalance(item) {
        this.setState({withValue :  item
        })
    }

    addCardDigitUpdate(item) {
        this.setState({addCardDigit : item})
    }
    addCardBrandUpdate(item){
        this.setState({addCardBrand : item})
    }
    addCardExpUpdate(item){
        this.setState({addCardExp : item})
    }


    handleUserMdpUpdate(item) {
        this.setState({userMdp : item})
    }

    handleUserEmailUpdate(item) {

        this.setState({userEmail : item});
    }

    handleUserNameUpdate(item) {
        this.setState({userName : item})
    }

    handleUserSurnameUpdate(item) {
        this.setState({userSurname : item})
    }

    addCard(event) {
        event.preventDefault();

        
        if(this.state.addCardDigit != '' && this.state.addCardBrand != '' && this.state.addCardExp != ''){
            
        
            this.setState({
                cardsDigit : [...this.state.cardsDigit, this.state.addCardDigit],
                cardsBrand : [...this.state.cardsBrand, this.state.addCardBrand],
                cardsExp : [...this.state.cardsExp, this.state.addCardExp],
                addCardDigit : '',
                addCardBrand : '',
                addCardExp : ''
            })

            alert("Card Added")

        }

        alert("Card not added")

        console.log(this.state.addCardDigit)
        console.log(this.state.cardsDigit)
    }

    dep(event) {
        event.preventDefault();
        

        const a = Number(this.state.balance)
        const b = Number(this.state.depositValue)

        if(b>0)
        {
            const c = a+b 
     
            this.setState({
                
                balance : c
            })
        }
      
        
    }

    with(event) {
        event.preventDefault();
        

        const a = Number(this.state.balance)
        const b = Number(this.state.withValue)
        const c = a-b 
     

        if(b>0)
        {
            if(c>0){

                this.setState({
                
                    balance : c
                })
                
            }
            else {
                    alert("Balance cannot be negatif")
            }
        }
      
    }
 
    
    render() { 

        console.log(this.state.userCardNum)
        console.log(this.state.userCardBrand)
        console.log(this.state.userCardExp)

            return (

                <div>

                    <h1>Welcome Back {this.state.userName} ! </h1>
                    <h2>What would you like to do today ?</h2>
                    <h3>Your Balance {this.state.balance}</h3>


                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/ModifCard"> Modify your account </Link></li>
                                

                                <li><Link to="/AddCard"> Add a bank card </Link></li>
                                <li><Link to="/ModifAcc2"> Modify your card(s)</Link></li>
                                <li><Link to="/MakeDeposit"> Make a deposit </Link></li>
                                <li><Link to="/MakeWith"> Make a withdrawal </Link></li>
                                <li><Link to="/MoneyTransfer"> Make a money transfer </Link></li>
                                <li><Link to="/LogOut"> Log Out </Link></li>

                               
                            </ul>

                            
                            <Route 
                                path="/AddCard" 
                                component={()=><AddCard 
                                    addCardDigitUpdate = {this.addCardDigitUpdate.bind(this)} 
                                    addCardExpUpdate = {this.addCardExpUpdate.bind(this)} 
                                    addCardBrandUpdate = {this.addCardBrandUpdate.bind(this)} 
                                    addCardDigit = {this.state.addCardDigit} 
                                    addCardBrand = {this.state.addCardBrand} 
                                    addCardExp = {this.state.addCardExp}
                                    addCard = {this.addCard.bind(this)}  
                                />} 
                            />

                            <Route path="/ModifCard" 
                                component={()=><ModifCard 
                                    userEmail = {this.state.userEmail} 
                                    userName={this.state.userName} 
                                    handleUserNameUpdate = {this.handleUserNameUpdate.bind(this)}  
                                    handleUserEmailUpdate={this.handleUserEmailUpdate.bind(this)} 
                                    userMdp = {this.state.userMdp} 
                                    handleUserMdpUpdate={this.handleUserMdpUpdate.bind(this)} 
                                    userSurname = {this.state.userSurname} 
                                    handleUserSurnameUpdate = {this.handleUserSurnameUpdate.bind(this) } 
                                />} 
                                    
                            />

                            <Route path="/ModifAcc2" 
                                component={()=><ModifAcc2 
                                    userCardBrand={this.state.userCardBrand}
                                    userCardNum={this.state.userCardNum}
                                    userCardExp={this.state.userCardExp}
                                    handleUserCardNumUpdate = {this.handleUserCardNumUpdate.bind(this)}
                                    handleUserCardBrandUpdate = {this.handleUserCardBrandUpdate.bind(this)}
                                    handleUserCardDateUpdate = {this.handleUserCardDateUpdate.bind(this)}
                            
                            
                                />} 
                            />

                            <Route path="/MakeDeposit" 
                                component={()=><MakeDeposit
                                    handlePlusBalance = {this.handlePlusBalance.bind(this)}
                                    depositValue = {this.state.depositValue}
                                    userCardNum = {this.state.userCardNum}
                                    userCardBrand = {this.state.userCardBrand}
                                    dep = {this.dep.bind(this)}
           
                                />}     
                            />

                            <Route path="/MakeWith" 
                                component={()=><MakeWith
                                    userCardNum = {this.state.userCardNum}
                                    userCardBrand = {this.state.userCardBrand}
                                    handleMoinBalance = {this.handleMoinBalance.bind(this)}
                                    with = {this.with.bind(this)}
                                    withValue = {this.state.withValue}

                                
                                />} 
                            />





                            <Route path="/MoneyTransfer" component={()=><MoneyTransfer/>} />
                            <Route path="/LogOut" component={()=><LogOut/>} />





                        </div>

                    </Router>

                </div>

     
            )
    }
}

export default Welcome;