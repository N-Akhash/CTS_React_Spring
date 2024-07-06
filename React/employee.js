import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Employee extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            empId: '',
            salary: '',
            designation: '',
            submitted: false,
        };

    }
    handelechange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handlesubmit = (e) =>{
        e.preventDefault();
        this.setState({submitted:true});
        // this.setState({
        //         name:'',
        //     empId:'',
        //     salary:'',
        //     designation:'',
        //     submitted:true,
        // });
    }

    render(){
        const {name, empId, salary, designation, submitted} =this.state;
        return(
            <div className="container">
                <h1 className="text-primary mt-250 mb-300 ml-1">Employee-Info</h1>
                <h3 className="text-left">Enter Employee Details</h3>
                <form id="employee-info" onSubmit={this.handlesubmit}>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-end">NAME:</label>
                        <div className="col-sm-9">
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder="Enter the name"
                        onChange={this.handelechange}
                        />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-end">EMPLOYEE ID:</label>
                        <div className="col-sm-9">
                        <input
                        type="text"
                        className="form-control"
                        name="empId"
                        value={empId}
                        placeholder="Enter the emp id"
                        onChange={this.handelechange}
                        />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-end">SALARY:</label>
                        <div className="col-sm-9">
                        <input
                        type="text"
                        className="form-control"
                        name="salary"
                        value={salary}
                        placeholder="Enter the salary"
                        onChange={this.handelechange}
                        />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-end">DESIGNATION:</label>
                        <div className="col-sm-9">
                        <input
                        type="text"
                        className="form-control"
                        name="designation"
                        value={designation}
                        placeholder="Enter the designation"
                        onChange={this.handelechange}
                        />
                        </div>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
                {submitted&&(
                    <div className="mt-4">
                        <h2 className="text-center">Added Employee Details</h2>
                        <p className="text-center"><strong>NAME:</strong>{'  '}{name}</p>
                        <p className="text-center"><strong>EMP ID:</strong>{'  '}{empId}</p>
                        <p className="text-center"><strong>SALARY:</strong>{'  '}{salary}</p>
                        <p className="text-center"><strong>DESIGNATION:</strong>{'  '}{designation}</p>
                    </div>
                )}

            </div>   
        );
    }
}

export default Employee;