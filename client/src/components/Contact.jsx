import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({listing}) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState('');

    const onChange = (e)=>{
        setMessage(e.target.value);
    }

    useEffect(()=>{
        const fetchLandlord = async ()=>{
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error);
            }
        }
      fetchLandlord();
    },[listing.userRef])
    return (
       <>
       {landlord &&(
         <div className='flex flex-col gap-3'>
            <p>Contact <span className='font-semibold'>{landlord.username}</span> for <span className='font-semibold'>{listing.name}</span></p>

            <textarea name="message" id="message" rows='2'
            value={message} onChange={onChange}
            placeholder='Enter Your Message here...'
            className='w-full outline-none border-2 border-slate-500 rounded-md p-3  bg-zinc-300 '
            ></textarea>

            <Link to={`mailto:${landlord.email} ? subject=Regarding ${listing.name} &body=${message}`}
            className='bg-slate-700 text-white uppercase p-3 rounded-md text-center hover:opacity-95'>
              Send Message
            </Link>

         </div>

       )}
       </>
    )
}