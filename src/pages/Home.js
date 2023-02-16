import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Home = ({ load, handleLoader }) => {
    return (
        (load) ? <Loader /> :
            <section className="home section active">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Myself <span className="name">Dr. Sriparna Saha</span></h3>
                            {/* <h3 className="my-profession">I'm a <span className="typing">web designer</span></h3> */}
                            <p>I'm a Associate Professor at Indian Institute of Technology, Patna.
                                <br />
                                received the M.Tech and Ph.D. degrees in computer science from Indian Statistical Institute Kolkata, Kolkata, India.
                            </p>
                            {/* <div className="social-media">
                            <a href="https://github.com/Ashish9140" target="_blank">
                                <div className="icon"><i className="fa-brands fa-github"></i></div>
                            </a>
                            <a href="https://www.linkedin.com/in/ashish-kumar-9a648420b/" target="_blank">
                                <div className="icon"><i className="fa-brands fa-linkedin"></i></div>
                            </a>
                            <div className="icon"> <i className="fa-brands fa-twitter"></i></div>
                            <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                        </div> */}
                            <Link to="/contact" className="btn hire-me" onClick={handleLoader}>Contact Me</Link>
                        </div>
                        <div className="home-img padd-15">
                            <img src="images/sriparna.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Home