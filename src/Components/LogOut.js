import React, { Component} from 'react'; 

import data2 from './data2.js'

import Log from './Log.js'; 

class LogOut extends Component {

    constructor(props) {
        super(props); 
        this.state = {

            logOut : false,
            modifAcc : true  

           

        }
    
       this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {
       
        this.setState({ logOut : true })
        this.setState({ modifAcc : false })
    }

    render() { 


        if(this.state.modifAcc===true)
        {
            return (
                <div>
                
                    <button onClick={this.handleClick}>Log Out</button>
                    
                </div>



            )
        }
        
        if(this.state.logOut === true)
        {

            return <Log data2={data2}/>
        }
        



    }


}

export default LogOut;