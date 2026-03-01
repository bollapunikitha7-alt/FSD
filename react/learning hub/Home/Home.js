import "./Home.css";

function Home() {
  return (
    <>
    
    <div className="page">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczwsxR9y-_okqSQ7DlJDIaIM48Qd2EgJc7A&s" class="homeimg"
        />
      </div>
<section class="welcome">
        <h1>Welcome to LearnHub</h1>
        <p>Your one-stop platform to learn new skills online</p>
        <button>Get Started</button>
      </section>
      <section class="about">
        <h2>About LearnHub</h2>
        <p>
          LearnHub is an online learning platform designed to help students and
          professionals gain new skills in technology, business, and personal
          development. Our goal is to make learning simple, flexible, and
          affordable for everyone.
        </p>
      </section>
      <section className="categories">
        <h2>Course Categories</h2>
        <div className="cards">
          <div className="card">Web Development</div>
          <div className="card">Data Science</div>
          <div className="card">Artificial Intelligence</div>
          <div className="card">Cloud Computing</div>
        </div>
      </section>
      <section class="benifits">
        <h2>Why Choose LearnHub?</h2>
        <ul>
          <li>Beginner-friendly courses</li>
          <li>Experienced mentors</li>
          <li>Flexible learning schedule</li>
          <li>Industry-recognized certificates</li>
          <li>Affordable pricing</li>
        </ul>
      </section>
      <section class="instructions">
        <h2>How It Works</h2>
        <ul>
          <li>Create a free account</li>
          <li>Choose a course you like</li>
          <li>Learn at your own pace</li>
          <li>Complete assessments</li>
          <li>Get certified</li>
        </ul>
      </section>
      
            <section class="features">
        <h2>Our Features</h2>
        <div class="f1">
          <div class="f2">
            <h3>Expert Mentors</h3>
            <p>Learn from industry professionals</p>
          </div>
          <div class="f2">
            <h3>Flexible Learning</h3>
            <p>Study anytime, anywhere</p>
          </div>
          <div class="f2">
            <h3>Certifications</h3>
            <p>Get certified after course completion</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact Us</h2>
        <div class="contactus">
        <div class="contact">
        <p><b>B.Ajith Kumar</b></p>
        <p>phn no:1234567890</p>
        <p>email:ajith@gmail.com</p>
       </div>
       <div class="contact">
        <p><b>B.Ajith Kumar</b></p>
        <p>phn no:1234567890</p>
        <p>email:ajith@gmail.com</p>
       </div>
       <div class="contact">
        <p><b>B.Ajith Kumar</b></p>
        <p>phn no:1234567890</p>
        <p>email:ajith@gmail.com</p>
       </div>
       </div>
      </section>
    </>
  );
}
export default Home;