import React, { Component} from 'react'; 

class AddCard extends Component {

    constructor(props) {
        super(props); 
        this.state = {

           

        }

    }

    render() {

  
  
        

        return (
        
            <div>
                <h1>New Card</h1>
                <form>
                    <input 
                        name = "texte"
                        value={this.props.addCardDigit}
                        type="number"
                        placeholder="Last 4 Digits"
                        onChange={(e)=>{this.props.addCardDigitUpdate(e.target.value)}}
                    />

                    <input 
                        name = "texte"
                        value={this.props.addCardBrand}
                        type="texte"
                        placeholder="Brand"
                        onChange={(e)=>{this.props.addCardBrandUpdate(e.target.value)}}
                    />

                    <input 
                        name = "texte"
                        value={this.props.addCardExp}
                        type="date"
                        placeholder="Exp"
                        onChange={(e)=>{this.props.addCardExpUpdate(e.target.value)}}
                    /> 

                    <button onClick = {this.props.addCard}>Add</button>

                </form>

            </div>








        )
    }



}

export default AddCard;