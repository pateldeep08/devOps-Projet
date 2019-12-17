import React, { Component} from 'react'; 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Welcome from './Welcome.js'; 
import data2 from './data2.js'
import CardData from './CardData.js'
import MakeDeposit from './MakeDeposit.js';
import ModifCard from './ModifCard.js';
import AddCard from './AddCard.js';
import ModifAcc from './ModifAcc.js';
import MoneyTransfer from './MoneyTransfer.js';
import MakeWith from './MakeWith.js';
import Nav from './Nav.js';

class Log extends Component {
    constructor(props) {
        super(props); 
        this.state = {

            userEmail :'', 
            userMdp: '',
            isLog : false ,
            userName: '',
            userSurname:'',
            userId:'',

        };

        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleMdpUpdate = this.handleMdpUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this); 
    }


handleUserUpdate(event) {
    this.setState({ userEmail : event.target.value})
}

handleMdpUpdate(event) {
    this.setState({ userMdp : event.target.value})
}

handleClick() {
    
    let i 
    let a 

    for (i=0; i<2; i++)
    {
        if (this.state.userEmail === this.props.data2[i].email)
        {
            a=i            
            if(this.state.userMdp === this.props.data2[a].password)
            {
                this.setState({ isLog : true})
                this.setState({ userName : this.props.data2[a].first_name})
                this.setState({ userSurname : this.props.data2[a].last_name})
                this.setState({ userId : this.props.data2[a].id})
            }
        }
    }     

}  
    render () {

       

        
        if(this.state.isLog===false)
        {
            return (
                <div>
                    <h1>LogIn</h1>
                    <form>
                        <input 
                            name = "email"
                            value={this.state.userEmail}
                            type="email"
                            placeholder="Email @"
                            onChange={this.handleUserUpdate}
                        />

                        <input 
                            name = "password"
                            value={this.state.userMdp}
                            type="password"
                            placeholder="Mot de passe"
                            onChange={this.handleMdpUpdate}                
                        />

                        <button onClick={this.handleClick}>Connexion</button>

                    </form>

                </div>

            )
        }

/*



 <ModifAcc />
<AddCard />
                        
                        <MakeDeposit/>

                        <MoneyTransfer />
                        <MakeWith />
                        <ModifCard /> 
                         <Route path="/" exact component={Welcome}  userName={this.state.userName} />

<Router>
                    <div>
                    <Nav/>
                        <Switch>
                          
                            <Route path="/ModifAcc" component={ModifAcc} />
                            <Route path="/AddCard" component={AddCard} />



                        </Switch>
                     
                

                    </div>
                </Router>








 */


        
        if(this.state.isLog===true) {
            
           
            return (<Welcome CardData = {CardData} userEmail = {this.state.userEmail} userSurname = {this.state.userSurname} userName = {this.state.userName} userId= {this.state.userId} userMdp = {this.state.userMdp} />)


        }

        
    }
    
        
}

export default Log;