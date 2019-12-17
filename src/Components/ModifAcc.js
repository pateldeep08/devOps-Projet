import React, {Component} from 'react'; 

import data2 from './data2.js'

import Welcome from './Welcome.js';



class ModifAcc extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           
            
            userEmail : this.props.userEmail,
            userMdp: this.props.userMdp,
            userName: this.props.userName,
            userSurname:this.props.userSurname,
            userId: this.props.userId,

            

        }
    
        this.handleClick1 = this.handleClick1.bind(this);
   
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleMdpUpdate = this.handleMdpUpdate.bind(this);
        this.handleNameUpdate = this.handleNameUpdate.bind(this);
        this.handleSurnameUpdate = this.handleSurnameUpdate.bind(this);
    
    }

    handleUserUpdate(item) {
        this.setState({ userEmail : item})
    }
    
   
  

    /*
<div>
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

                    <input 
                        name = "Name"
                        value={this.state.userName}
                        type="text"
                        placeholder="Name"
                        onChange={this.handleNameUpdate}
                    />
                                            
                    <input 
                        name = "Surname"
                        value={this.state.userSurname}
                        type="text"
                        placeholder="Surname"
                        onChange={this.handleSurnameUpdate}
                    />
                    <button onClick={this.handleClick1}>Ok</button>
           


                </form>
                
                
            </div>


    */

    render() { 


        return (
            <div>
               <h1>fzf</h1>
                
            </div>

        )
      


        



    }


}

export default ModifAcc;