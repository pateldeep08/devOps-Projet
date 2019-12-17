import React, { Component} from 'react'; 

class MakeWith extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           

        }

    }

    render() {

        return (
        
            <div>
                <h1>Make Withdrawal </h1>
              
                <h2>How Much Would you like to Withdrawal ?</h2>
               
                <input 
                    name = "payOut"
                    value = {this.props.withValue}
                    type="number"
                    placeholder="How Much Would you like to Deposite ?"
                    onChange={(e)=>{this.props.handleMoinBalance(e.target.value)}}
                />

                <h2>From which credit card you would like to Withdraval ?  </h2>
                
                <h3>

                    {this.props.userCardNum}{this.props.userCardBrand}
                    <button onClick = {this.props.with}>O</button>
                
                
                
                
                </h3>



            </div>




        )
    }



}

export default MakeWith;