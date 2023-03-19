import React from 'react';
import { Container, Icon, Select, Textarea, TextInput} from 'react-materialize';

export default function Contact() {
  const handleSubmit =(e)=> {
    e.preventDefault()
  }
  return (
    <Container>
    <div style={{backgroundColor:'white',borderRadius:'15px', borderRadius:'15px 15px', borderRadius:'15px 15px 15px ', borderRadius:'15px 15px 15px 15px'}}>
      <h1>Contact Us</h1>
      <h4>Feel free to get in touch with us using the contact form below.</h4>
      <form onSubmit={handleSubmit}>
      <TextInput id="TextInput-38" label="Your Name"/>
      <TextInput email id="TextInput-41" label="Email" validate/>
      <TextInput id="TextInput-38" label="Message"/>
      <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
      <option disabled value="">
        Choose your favourite film
      </option>
      <option value="1">
        Bo Gia
      </option>
      <option value="2">
        Chi Chi Em Em 1
      </option>
      <option value="3">
        Nha Ba Nu
      </option>
      <option value="4">
        Tiec Trang Mau
      </option>
      <option value="5">
        Chia Khoa Tram Ty
      </option>
      <option value="6">
        Em chua 18
      </option>
      <option value="7">
        Em va Trinh
      </option>
      <option value="8">
        Mat Biec
      </option>
      <option value="9">
        Thanh Soi
      </option>
      </Select>
      <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your Content"/>
      <button class="waves-effect waves-light btn">Submit</button>
      </form>
      {/* <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message</label>
          <textarea className="form-control" id="messageInput" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}
    <br></br><br></br><br></br><br></br>
    </div>
  

    </Container>
  );
}
