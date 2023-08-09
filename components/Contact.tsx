import { FiPhone, FiMapPin } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { PageInfo } from '@/typings';
import { useCallback, useMemo, useState} from 'react';
import { sendEmail } from '../pages/api/email';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Props = {
   pageInfo: PageInfo[];
}

function Contact({ pageInfo }: Props) {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const { name, email, message } = data;

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
        sendEmail({ email, name, message}) 
      console.log('Data to send: ', data);
    },
    [data],
  );
    
  return (
     <div className='h-screen relative flex overflow-hidden flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='hidden md:inline-flex absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl'> 
            Contact Me
        </h3> 

        <div className='flex flex-col space-y-10'>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                     <FiPhone className='text-[#85caff] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>{pageInfo[0]?.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                     <FiMapPin className='text-[#85caff] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>{pageInfo[0].address}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                     <BsEnvelope className='text-[#85caff] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>{pageInfo[0].email}</p>
                </div>
            </div>
             
            <form 
                className='flex flex-col space-y-2 w-fit mx-auto' 
                method="POST" 
                onSubmit={handleSendMessage}
            >
      
            <div className='flex space-x-2'></div>
                        <input 
                            className='contactInput'
                            name="name" 
                            onChange={onChange} 
                            placeholder="Name"
                            required type="text" 
                        />
                        <input
                            autoComplete="email"
                            className='contactInput'
                            name="email"
                            onChange={onChange}
                            placeholder="Email"
                            required
                            type="email"
                        />

                        <textarea
                            className='contactInput'
                            maxLength={250}
                            name="message"
                            onChange={onChange}
                            placeholder="Message"
                            required
                        />
                    <button
                        aria-label="Submit contact form"
                        className='bg-[#85caff]/40 text-[#1e3348] py-5 px-10 rounded-md font-bold text-lg focus:bg-[#85caff] hover:bg-[#85caff]/70'
                        type="submit">
                        Send Message
                    </button>
            </form>
            </div>
    </div>
  );
};



//   return (
   

//             <form 
//                 onSubmit={handleSubmit(onsubmit)}
//                 className='flex flex-col space-y-2 w-fit mx-auto'>
//                <div className='flex space-x-2'>
//                     <input 
//                         placeholder='Name' 
//                         type='text' 
//                         name={fullname}
//                         className='contactInput'
//                         value={fullname}
//                         onChange={(e) => {
//                         setFullname(e.target.value);
//                     }}
//                     />
//                     <input 
//                         placeholder='Email' 
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => {
//                         setEmail(e.target.value);
//                         }}
//                         className='contactInput' 
//                     />
//                </div> 

//                <input 
//                   placeholder='Subject' 
//                   type="text"
//                   name="subject"
//                   value={subject}
//                   onChange={(e) => {
//                   setSubject(e.target.value);
//                   }}
//                   className='contactInput'
//                 />

//                <textarea 
//                    placeholder='Message' 
//                    name="message"
//                    value={message}
//                    onChange={(e) => {
//                    setMessage(e.target.value);
//                    }}
//                    className='contactInput'
//                />
//                <button 
//                  type='submit' 
//                  className='bg-[#85caff]/40 text-[#1e3348] py-5 px-10 rounded-md font-bold text-lg focus:bg-[#85caff] hover:bg-[#85caff]/70'
//                 >
//                  Submit
//                </button>
//             </form>
//         </div>
//     </div>
//   );
// };

export default Contact;