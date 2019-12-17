import React, { Component} from 'react'; 

class Nav extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           

        }

    }

    render() {

  
  
        

        return (
        
            <div>

                    <h1>Welcome Back {this.props.userName} ! </h1>
                    <h2>What would you like to do today ?</h2>

                <ul>
                    <li> Modify your account </li>
                    <li> Add a bank card </li>
                    <li> Modify a bank card </li>
                    <li> Make a deposit </li>
                    <li> Make a withdrawal </li>
                    <li> Make a money transfer </li>
                    <li> Log Out</li>
                </ul>

                
            

            </div>



        )
    }



}

export default Nav;