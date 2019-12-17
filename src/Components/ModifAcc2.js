import React, { Component} from 'react'; 

class ModifAcc2 extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           

        }

    }

    render() {

  
  
        

        return (
        
            <div>
                    <h1>Modification of your Cards Details</h1>
                    <h2>Card 1</h2>
                    <form>
                            <input 
                                name = "card num"
                                value={this.props.userCardNum}
                                type="text"
                                placeholder="Card Num"
                                onChange={(e)=>{this.props.handleUserCardNumUpdate(e.target.value)}}
                            />

                            <input 
                                name = "brand"
                                value={this.props.userCardBrand}
                                type="text"
                                placeholder="card brand"
                                onChange={(e)=>{this.props.handleUserCardBrandUpdate(e.target.value)}}
                            />

                            <input 
                                name = "date"
                                value={this.props.userCardExp}
                                type="text"
                                placeholder="Card Exp data"
                                onChange={(e)=>{this.props.handleUserCardDateUpdate(e.target.value)}}
                            /> 

                         


                     
                     

                    </form>

            </div>



        )
    }



}

export default ModifAcc2;