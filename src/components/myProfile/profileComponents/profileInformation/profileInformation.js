import React, {Component} from 'react'
import './profileInformation.css'

class ProfileInformation extends Component{
constructor(){
    super()
    this.state={
        firstName:'',
        lastName:'',
        gender:'',
        email:'',
        mobileNo:'',
        personalInfoEdit:false,
        emailInfoEdit:false,
        mobileInfoEdit:false
    }
    this.handleChange=this.handleChange.bind(this)
}
handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}
Edit(name){
    switch(name){
        case 'personalInfoEdit':{
            this.setState({
                personalInfoEdit:true
            },()=>console.log(name))
            break;
        }    
        case 'emailInfoEdit':{
            this.setState({
                emailInfoEdit:true
            })
            break;
        }
        case 'mobileInfoEdit':{
            this.setState({
                mobileInfoEdit:true
            })
            break;
        }
        default:break;
    }
}
Cancel(name){
    switch(name){
        case 'personalInfoEdit':{
            this.setState({
                personalInfoEdit:false
            })
            break;
        }
        case 'emailInfoEdit':{
            this.setState({
                emailInfoEdit:false
            })
            break;
        }
        case 'mobileInfoEdit':{
            this.setState({
                mobileInfoEdit:false
            })
            break;
        }
        default:break;
    }
}

    render(){
        return(
            <div className='info-main-div'>
                <div className='pb-4'>
                    <div className='pb-3'>
                        <span className='info-span'>Personal Information</span>
                        {!this.state.personalInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('personalInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('personalInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="First Name" name="firstName" disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="Last Name" name="lastName" disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>
                        </div>
                            {this.state.personalInfoEdit ? (
                                <div className='col-md-4'>
                                    <button className='btn btn-svae'>Save</button>
                                </div>
                            ) : (
                                <div></div>
                        )}
                    </div>
                    <div>
                        <div className='pt-3'>
                            Your Gender
                        </div>
                        <div className='pt-1'>
                            <div className="form-check">
                                <label className="form-check-label pr-5">
                                 <input type="radio" className="form-check-input color-change" name="gender" disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>Mail
                                </label>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input color-change" name="gender" disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>Female
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='pb-4'>     
                    <div className='pb-3'>
                    <span className='info-span'>Email Address</span>
                        {!this.state.emailInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('emailInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('emailInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="Entter Email" name="email" disabled = {!this.state.emailInfoEdit} onChange={this.handleChange}/>
                            </div>
                            {this.state.emailInfoEdit ? (
                                <div className='col-md-4'>
                                    <button className='btn btn-svae'>Save</button>
                                </div>
                            ) : (
                                <div></div>
                            )}
                    </div>
                    </div>
                </div>
                <div className='pb-4'>    
                    <div className='pb-3'>
                    <span className='info-span'>Mobile Number</span>
                        {!this.state.mobileInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('mobileInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('mobileInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="Enter Mobile.No" name="mobileNo" disabled = {!this.state.mobileInfoEdit} onChange={this.handleChange}/>
                        </div>
                        {this.state.mobileInfoEdit ? (
                        <div className='col-md-4'>
                            <button className='btn btn-svae'>Save</button>
                        </div>
                        ):(<div></div>)}

                    </div>
                </div>
             </div>
        )
    }
}
export default ProfileInformation;