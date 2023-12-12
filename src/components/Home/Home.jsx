
import React ,{ useEffect, useRef, useState }from 'react';

import banner from "../../../src/assets/banner.png"
import logo from "../../../src/assets/log.jpg"
import { MdFileDownload } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import pdf from "../../assets/Ridoy-Mia (1).pdf"
const Home = () => {
    const [project,setProject] = useState([])
    const homeref = useRef(null);
    const skillref = useRef(null);
    const projectref = useRef(null);
    const aboutRef = useRef(null);
    const contactref = useRef(null);
  
  useEffect(()=>{
    fetch(`https://portfulio-server.vercel.app/api/v1/project/all`).then(res =>res.json()).then(data =>{
      console.log(data,'projects');
      setProject(data?.result)
    })
  },[])
  const navigate = useNavigate()
    // Add more refs for other sections as needed
  
    const handleMenuClick = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const details = (id)=>{
        console.log(id,'details');
        navigate(`/details/${id}`)
    }
    return (
        <div>
             <div className=' text-black'>
      <div className='container'>
        <div className='fixed top-0 left-0 right-0'>
        <div className="navbar container  bg-gray-200  text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                <Link className='text-lg px-3 bold' to=""onClick={() => handleMenuClick(homeref)} >Home</Link>
                <Link className='text-lg px-3 bold' to="skills" onClick={() => handleMenuClick(skillref)}>Skills</Link>
                <Link className='text-lg px-3 bold' to="projects" onClick={() => handleMenuClick(projectref)}>Projects</Link>

                <Link className='text-lg px-3 bold' onClick={() => handleMenuClick(aboutRef)} to="about">About</Link>

                <Link className='text-lg px-3 bold' to="contact" onClick={() => handleMenuClick(contactref)}>Contact</Link>
              </ul>
            </div>
            <a className=" text-xl text-yellow-500 font-bold">RIDOY-MIA</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <Link className='text-lg px-3 bold' to=""onClick={() => handleMenuClick(homeref)} >Home</Link>
                <Link className='text-lg px-3 bold' to="skills" onClick={() => handleMenuClick(skillref)}>Skills</Link>
                <Link className='text-lg px-3 bold' to="projects" onClick={() => handleMenuClick(projectref)}>Projects</Link>

                <Link className='text-lg px-3 bold' onClick={() => handleMenuClick(aboutRef)} to="about">About</Link>

                <Link className='text-lg px-3 bold' to="contact" onClick={() => handleMenuClick(contactref)}>Contact</Link>



            </ul>
          </div>

        </div>
        </div>
        {/* banner section  */}
        <section ref={homeref} className=' shadow-inner'>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:pt-20 md:pt-20 pt-10'>
            <div className=' px-10'>
              <div className='flex justify-end items-center align-middle'>
                <img src={banner} className='lg:h-96 lg:w-96  h-68 w-68 rounded-full'></img>
              </div>
            </div>
            <div className='lg:pt-20 md:pt-5 lg:text-left md:text-left text-center'>
              <h1 className='lg:text-5xl md:text-3xl text-3xl mt-10 lg:mt-0 md:mt-0 text-yellow-500 font-semibold'>-I'M RIDOY MIA-</h1>
              <h1 className='lg:text-xl md:text-md  font-semibold  pt-7'>MERN STACK DEVELOPER</h1>
              <p className='lg:pe-30 pt-5  line-clamp-6'>I am MERN stack developer focused on crafting clean & user friendly experiences, I am passionate about building excellent software that improve the lives of those around me</p>
              <div className='flex lg:justify-start md:justify-start justify-center items-center'>
              <a
  href="https://drive.google.com/file/d/1JB9Di1C2t04NGHb-TJ2-Ea18qshGpqOd/view?usp=sharing"
  download="your_resume_filename.pdf"
>
  <button className="flex justify-center items-center align-middle gap-x-3 bg-yellow-500 text-white py-2 px-5 my-5 rounded-lg">
    <h1>Download resume </h1>
    <MdFileDownload />
  </button>
</a>


              </div>
            </div>
          </div>
        </section>
        {/* Skills section */}
        <section  ref={skillref} className='bg-base-100 rounded-lg'>
          <h1 className='mt-14 pt-10 text-left text-4xl font-semibold text-yellow-500 pb-20'>--Skills--</h1>
          <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 justify-center gap-y-12'>
            
            <div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 95 }} role="progressbar"> 95%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>HTML</h1>
              </div>
            </div>
            <div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 70 }} role="progressbar"> 70%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>CSS</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 60 }} role="progressbar"> 60%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>JAVASCRIPT</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 850 }} role="progressbar"> 85%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>REACT.JS</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 70 }} role="progressbar"> 70%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>NEXT.JS</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 50 }} role="progressbar"> 50%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>REDUX</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 60 }} role="progressbar"> 60%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>EXPRESS.JS</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 65 }} role="progressbar"> 65%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>NODE.JS</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 90 }} role="progressbar"> 90%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>MONGODB</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 90 }} role="progressbar"> 90%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>MONGOOSE</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 70 }} role="progressbar"> 70%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>PRISMA</h1>
              </div>
            </div><div className=' text-center items-center'>
              <div className="radial-progress text-yellow-500" style={{ "--value": 60 }} role="progressbar"> 60%</div>
              <div className='text-center'>
                <h1 className='text-md py-3 font-semibold'>POSTGRESQL</h1>
              </div>
            </div>
            

          </div>
        </section>
        <section ref={projectref} className='py-20'>
        <h1 className='mt-14 pt-10 text-left text-4xl font-semibold text-yellow-500 pb-20'>--projects--</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-x-5 gap-y-10'>
            {
              project?.map(p => <div className=' shadow-2xl rounded-md p-5'>
                <img src={p?.picture} className='w-96 h-72'></img>
                <div>
                  <p className='text-xl font-semibold py-2'>Name : {p?.name}</p>
                  <button className='py-2 px-10 bg-yellow-500 text-white rounded-sm' onClick={()=>details(p?._id)}>Details</button>
                </div>
              </div>)
            }
          </div>
        </section>
     
     {/* about section  */}
      
        <section ref={aboutRef}>
        <h1 className='mt-14 pt-10 text-left text-4xl font-semibold text-yellow-500 pb-20'>--ABOUT ME--</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
          <div className='px-5'>
            <h1 className='font-semibold py-8'>PERSONAL INFO</h1>
             <div className='grid grid-cols-2'>
               <div>
                  <p className='py-2'>Name: Ridoy mia</p>
                  <p className='py-2'>Age: 21 Years</p>
                  <p className='py-2'>District: Habiganj</p>
                  <p className='py-2'>Nationality: Bangladeshi</p>
              
               </div>
                <div>
                  <p className='py-2'>Address: Madhabpur,Habiganj</p>
                  <p className='py-2'>Phone: +8801314791920</p>
                  <p className='py-2'>Email: Ridoymia1531@gmail.com</p>
                  <p className='py-2'>Email: <a className='text-blue-400' href='https://www.linkedin.com/in/ridoy-miya-7903652a0/'>Linkedin</a></p>
                  <p className='py-2'>Language: Bangali</p>
              
               </div>
             </div>
          </div>
          <div className='px-10'>
            <h1 className='font-semibold py-8'>ACADEMIC INFO</h1>
             <p className='py-2'>Institute Name : Habiganj polytechnic institute</p>
             <p className='py-2'>Location : Habiganj,Sylhet,Bangladesh </p>
             <p className='py-2'>Duration : 2019-2023</p>
             <p className='py-2'>Subject : Computer Teachnology</p>
          </div>
        </div>
        </section>
        {/* contact sections  */}
        <section ref={contactref} className=' shadow-2xl px-5'>
         <h1 className='text-left font-semibold text-yellow-500 text-4xl py-16'>--Contact with  me --</h1>
          <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12'>
           <div className='col-span-0 lg:col-span-2 md:col-span-2'></div>
           <div className='col-span-0 lg:col-span-8 md:col-span-8 py-10'>
       

              <form action="https://formsubmit.io/send/Ridoymia153159hero@gmail.com" method="POST">
    <div className='flex justify-start items-center align-middle gap-x-2'>
        <input type='text' name="first" placeholder='first' className='w-full py-3 mt-5 rounded-md outline-none px-5' />
        <input type='text' name='last' placeholder='last' className='w-full py-3 mt-5 rounded-md outline-none px-5' />
    </div>
    <input type='email' name='email' placeholder='email' className='w-full py-3 mt-5 rounded-md outline-none px-5' />
    <textarea type='text' name='message' placeholder='message' className='w-full py-7 mt-5 rounded-md outline-none px-5' />
    <div className='flex justify-center items-center align-middle my-5'>
        <button type='submit' className='py-2 px-10  bg-yellow-500 text-white rounded-md'>Submit</button>
    </div>
</form>

           </div>
          </div>
        </section>
      </div>

    </div>
        </div>
    );
};

export default Home;