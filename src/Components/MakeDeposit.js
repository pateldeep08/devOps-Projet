import React, { Component} from 'react'; 

class MakeDeposit extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           

        }

    }

    render() {

        return (
        
            <div>
                <h1>Make Deposit </h1>
              
                <h2>How Much Would you like to Deposite ?</h2>
               
                <input 
                    name = "payIn"
                    value = {this.props.depositValue}
                    type="number"
                    placeholder="How Much Would you like to Deposite ?"
                    onChange={(e)=>{this.props.handlePlusBalance(e.target.value)}}
                />

                <h2>From which credit card you would like to Deposit ?  </h2>
                
                <h3>

                    {this.props.userCardNum}{this.props.userCardBrand}
                    <button onClick = {this.props.dep}>O</button>
                
                
                
                
                </h3>



            </div>




        )
    }



}

export default MakeDeposit;