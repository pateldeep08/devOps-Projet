import React, { Component} from 'react'; 

class ModifCard extends Component {

    constructor(props) {
        super(props); 
        
    }

   

    render() {

  
  
        

        return (
        
            <div>
                    <h1>Modification of your Accout Details</h1>
                    <form>
                            <input 
                                name = "email"
                                value={this.props.userEmail}
                                type="email"
                                placeholder="Email @"
                                onChange={(e)=>{this.props.handleUserEmailUpdate(e.target.value)}}
                            />

                            <input 
                                name = "password"
                                value={this.props.userMdp}
                                type="password"
                                placeholder="Password"
                                onChange={(e)=>{this.props.handleUserMdpUpdate(e.target.value)}}
                            />

                            <input 
                                name = "name"
                                value={this.props.userName}
                                type="text"
                                placeholder="Name"
                                onChange={(e)=>{this.props.handleUserNameUpdate(e.target.value)}}
                            /> 

                            <input 
                                name = "Surname"
                                value={this.props.userSurname}
                                type="text"
                                placeholder="SurnName"
                                onChange={(e)=>{this.props.handleUserSurnameUpdate(e.target.value)}}
                            />   



                     
                     

                    </form>

            </div>



        )
    }


    
}

export default ModifCard;