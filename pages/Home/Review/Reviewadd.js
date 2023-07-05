import React from 'react';

const Reviewadd = () => {
    const addReview=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const name=e.target.name.value
        const review=e.target.review.value
        const category=e.target.category.value
      const post={email,name,category,review}
      
      fetch("http://localhost:5000/review",{
        method:"POST",
        headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(post)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
            window.location.reload()
        }
      })
    

    }
    return (
        <div className='container p-5'>
           <form onSubmit={addReview} className='mx-auto'>
  <div class="form-group">
    <label for="exampleInputEmail1">Your Email</label>
    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
 
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
 
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Add Category</label>
    <input type="text" class="form-control" name='category' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
 
  </div>
 
  <div class="form-group">
  <label for="exampleFormControlTextarea1">Add Review</label>
    <textarea class="form-control" name='review' id="exampleFormControlTextarea1" rows="3"></textarea>
 
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    );
};

export default Reviewadd;