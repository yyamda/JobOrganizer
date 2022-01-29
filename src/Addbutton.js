import React from "react";
import styled from 'styled-components'; 
import Allcolumns from './allcolumns'; 

const Addit = styled.form`
    display: flex; 
    flex-direction: column;
`
const initialData = require('./jsondata.json');

const processToColumn = {
    "Wishlist": "column-1",
    "Applied": "column-2",
    "Interview": "column-3",
    "Accepted": "column-4",

}


export default class Addbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            company: "",
            process: ""
        };
        this.changeCompany = this.changeCompany.bind(this); 
        this.changeProcess = this.changeProcess.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    changeCompany(event) {
        this.setState({company: event.target.value});
    }

    changeProcess(event) {
        this.setState({process: event.target.value});

    }
    handleSubmit(event) {
        event.preventDefault();
        let task_num = Object.keys(initialData.tasks).length + 1;
        let task_code = "task-" + task_num.toString(); 
        initialData.tasks[task_code] = {
            id: task_code,
            content: this.state.company 
        }
        let column_val = processToColumn[this.state.process];
        console.log(column_val);
        initialData.columns[column_val].taskIds.push(task_code);
        
        Allcolumns();

        this.setState({process: ""})
        this.setState({company: ""})
        console.log(initialData); 

    };

    render() { 
        return (
            <div>
                <Addit onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Company Name" value={this.state.company} onChange={this.changeCompany}/>
                    <select value={this.state.process} onChange={this.changeProcess}>
                        <option value="None"></option>
                        <option value="Wishlist">Wishlist</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Accepted">Accepted</option>
                    </select>
                    <input type="submit" value="Submit"></input> 
                
                </Addit>
            </div>
        )
    }
}
