import React from 'react';
import { nanoid } from 'nanoid';
import { getDatabase, child, ref, set } from 'firebase/database';
import {isWeburi} from 'valid-url';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            longURL: '',
            preferedAlias: '',
            generatedURL:'',
            loading: false, //shgow a spiner button when loading
            errors: [],
            errorMessage: {},
            toolTipMessage: 'Copy To Clipboard',
            

        };

}

//when the user clicks submit, this will be called 
onSubmit = async (event) => {
    event.preventDefault(); //prevents the page from reloading when the form is submitted
    this.setState({
        loading: true,
        generatedURL:'', 


    })

    //validate the unput the user has submitted
    var isFormValid = await this.validateForm();
    if(!isFormValid){
       return
        }

    // if the user has input a prefered alias then we use it, if not, we generate one
    //be sure to change the URL to your own domain
    var generatedKey = nanoid(5); 
    var generatedURL= "short.me.com/" + generatedKey;

    // if the user has input their own alias
    if(this.state.preferedAlias !== ''){
        generatedKey = this.state.preferedAlias
        generatedURL= "short.me.com/" + this.state.preferedAlias;

    }

    const db = getDatabase();
    set(ref(db, '/' + generatedKey), {

        generatedKey: generatedKey,
        longURL: this.state.longURL,
        preferedAlias: this.state.preferedAlias,
        generatedURL: generatedURL,
    }).then((resylt) => {
        this.setState({
            generatedURL: generatedURL,
            loading: false,
        })
    }).catch((e) => {
        // handel errors
    })

    }

    //check if field has an error
    hasError = (key) => {
        return this.state.errors.indexOf(key) !== -1;
    }

    //save the content6 of the form as the user is typing 
    handleChange = (e) =>{
        const {id, value} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [id]: value,
        })); 
    }


        validateTnput = async () => {
        var errors = [];
        var errorMessage = this.state.errorMessage;

        //validate teh long URL
        if(this.state.lognURL.length === 0){
            errors.push('longURL');
            errorMessage['longURL'] = 'Please enter a long URL';
        }else if(!isWeburi(this.state.longURL)){
            errors.push('longURL');
            errorMessage['longURL'] = 'Please enter a valid URL'; 
        }
    }

    
}