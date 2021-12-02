import React ,{useEffect,useState} from 'react'
import { Fragment } from 'react';
import { Button, Form, Container, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';


function Add(){
  useEffect(() => {
    
  document.title="Orientation"
  }, []);
  const [course ,setCourse]=useState({});
  // form handler function
  const handleForm=(e)=>
{
  console.log(course);

  e.preventDefault();
};

const notify = () => toast.success("Added Successfully!");
    return(
      <div className='App'>
        <h1 className="text-center">Sign up here</h1>
        <Form className="form" onSubmit={handleForm}>
        <FormGroup>
          <Label for="userid">UserID</Label>
          <Input type="text"
           name="userid" 
           id="userid"
          onChange={(e)=>{
            setCourse({...course,id:e.target.value});
          }} placeholder="User Id" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Email Id</Label>
          <Input type="email" name="Course title" id="CT"
           onChange={(e)=>{
            setCourse({...course,title: e.target.value});
          }} placeholder="Enter your email here" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Comment </Label>
          <Input type="text-area" style={{height:200}} name="CD" id="CD"
           onChange={(e)=>{
            setCourse({...course,description: e.target.value});
          }} placeholder="Course description " />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" onClick={notify} color="success">Submit</Button>
          {/* <Button color="warning">Clear</Button> */}
        </Container>
        </Form>
        
        </div>
    )
}
export default Add