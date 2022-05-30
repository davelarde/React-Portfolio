import React, {useState} from 'react'

function Contact() {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setName or setEmail based on what field the user is typing in
    // return name === 'name' ? setName(value) : setEmail(value);
    if(name==="name"){
      setName(value)
    } else if(name==="email"){
      setEmail(value)
    } else {
      setMessage(value)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p className='h1-responsive font-weight-bold text-center my-4'>
        Hello {name} 
      </p>
      
<section className="mb-4 bg-active" >


    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
        a matter of hours to help you.</p>

    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                          <label for="name" className="">Your name</label>
                            <input 
                            value={name}
                            type="text" 
                            name="name" 
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="form-control"/>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                          <label for="email" className="">Your email</label>
                            <input 
                            value={email}
                            type="text"
                             name="email" 
                             onChange={handleInputChange}
                             placeholder="Email"
                             className="form-control"/>
                        </div>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <label for="subject" className="">Subject</label>
                            <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Subject"
                            className="form-control"/>
                        </div>
                    </div>
                </div>
                
                <div className="row">

                 
                    <div className="col-md-12">

                        <div className="md-form">
                            <label for="message">Your message</label>
                            <textarea 
                            value={message}
                            type="text"
                             name="message" 
                             onChange={handleInputChange}
                             placeholder="Message"
                             rows="2" 
                             className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
            </form>
            <div className="status"></div>
        </div>
        
        
    </div>

</section>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button> 
   
<div className="gif text-center">
<img src="https://marketinginbound.cl/wp-content/uploads/2020/08/4039dbf0e5561de5f05c8c3f546a8744.gif" class="img-fluid" alt="Responsive img"/>
</div>
</div>
  );
}

export default Contact