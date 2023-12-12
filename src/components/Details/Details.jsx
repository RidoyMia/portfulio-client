import React ,{ useEffect, useRef, useState }from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [project,setProject] = useState([])
    const homeref = useRef(null);
    const skillref = useRef(null);
    const projectref = useRef(null);
    const aboutRef = useRef(null);
    const contactref = useRef(null);
    const [data,setData] = useState({})
    const handleMenuClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
      const {id} = useParams();
     
      useEffect(()=>{
       fetch(`https://portfulio-server.vercel.app/api/v1/project/single/${id}`).then(res =>res.json()).then(data =>{
        console.log(data,'sigl');
        setData(data?.result)
       })
      },[id])
    return (
        <div className='container'>
             <div className='fixed top-0 left-0 right-0'>
        <div className="navbar container  bg-gray-200  text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                <Link className='text-lg px-3 bold' to="/"onClick={() => handleMenuClick(homeref)} >Home</Link>
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
            <Link className='text-lg px-3 bold' to="/"onClick={() => handleMenuClick(homeref)} >Home</Link>
                <Link className='text-lg px-3 bold' to="skills" onClick={() => handleMenuClick(skillref)}>Skills</Link>
                <Link className='text-lg px-3 bold' to="projects" onClick={() => handleMenuClick(projectref)}>Projects</Link>

                <Link className='text-lg px-3 bold' onClick={() => handleMenuClick(aboutRef)} to="about">About</Link>

                <Link className='text-lg px-3 bold' to="contact" onClick={() => handleMenuClick(contactref)}>Contact</Link>



            </ul>
          </div>

        </div>
           </div>
           <div className='py-32'>
             <img src={data?.picture} className='w-full h-full'></img>

             <div className='flex  justify-start  items-center align-middle'>
                <p className='pr-5'>Name : {data?.name}</p>
                <p className='text-blue-400'><a href={data?.live}>Live site link</a></p>
             </div>
             <div className='flex  justify-start  items-center align-middle py-10'>
                <p>Client repo link  : <a className='text-blue-400 px-3' href={data?.client}>Repository</a></p>
                <p>server repo link  : <a className='text-blue-400 px-3' href={data?.server}>Repository</a></p>
             </div>

             <div  className='py-10'>
                <h1 className='text-xl font-semibold '>Descriptions :</h1>
                <p className='py-5'>{data?.descriptions}</p>
             </div>
           </div>
        </div>
    );
};

export default Details;