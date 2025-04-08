import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameFieldEmpty, setNameFieldEmpty] = useState(false);
  const [messageFieldEmpty, setMessageFieldEmpty] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, email: value }));
    
    if (emailTouched) {
      if (value && !validateEmail(value)) {
        setEmailError('please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('please enter a valid email address');
    } else if (!formData.email) {
      setEmailError('please fill out this field');
    } else {
      setEmailError('');
    }
  };

  const handleNameBlur = () => {
    if (!formData.name) {
      setNameFieldEmpty(true);
    } else {
      setNameFieldEmpty(false);
    }
  };

  const handleMessageBlur = () => {
    if (!formData.message) {
      setMessageFieldEmpty(true);
    } else {
      setMessageFieldEmpty(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, name: value }));
    if (value) {
      setNameFieldEmpty(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, message: value }));
    if (value) {
      setMessageFieldEmpty(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameEmpty = !formData.name;
    const messageEmpty = !formData.message;
    const emailInvalid = !formData.email || (formData.email && !validateEmail(formData.email));
    
    setNameFieldEmpty(nameEmpty);
    setMessageFieldEmpty(messageEmpty);
    setEmailTouched(true);
    
    if (emailInvalid) {
      setEmailError(!formData.email ? 'please fill out this field' : 'please enter a valid email address');
    }
    
    if (nameEmpty || messageEmpty || emailInvalid) return;
    
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setEmailError('');
      setEmailTouched(false);
      setNameFieldEmpty(false);
      setMessageFieldEmpty(false);
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center h-full justify-center">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 
            variants={fadeIn("up", 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="h2 mb-8 text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form 
            variants={fadeIn("up", 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-6 w-full">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  placeholder={nameFieldEmpty ? "please fill out this field" : "name"}
                  className={`focus:border-white/20 input w-full ${nameFieldEmpty ? 'border-red-500 placeholder-red-500' : formData.name ? 'border-white' : ''}`}
                />
              </div>
              <div className="flex-1 relative mt-4 md:mt-0">
                {emailError && emailTouched && emailError !== 'please fill out this field' && (
                  <div className="text-red-500 text-left text-xs md:text-sm absolute -top-6 left-0 w-full">{emailError}</div>
                )}
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder={emailError === 'please fill out this field' && emailTouched ? emailError : "email"}
                  className={`focus:border-white/20 input w-full ${emailError && emailTouched ? 'border-red-500 placeholder-red-500' : formData.email ? 'border-white' : ''}`}
                />
              </div>
            </div>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleSubjectChange}
              placeholder="subject" 
              className={`focus:border-white/20 input ${formData.subject ? 'border-white' : ''}`}
            />
            <div className="relative">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                placeholder={messageFieldEmpty ? "please fill out this field" : "message"}
                className={`textarea focus:border-white/20 ${messageFieldEmpty ? 'border-red-500 placeholder-red-500' : formData.message ? 'border-white' : ''}`}
              />
            </div>
            <div className="relative">
              <button 
                type="submit" 
                className="w-full btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={status === 'loading'}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {status === 'loading' ? 'Sending...' : 'Let\'s talk'}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm absolute -bottom-8 left-0">Failed to send message. Please try again.</p>
              )}
              {status === 'success' && (
                <p className="text-green-500 text-sm absolute -bottom-8 left-0">Message sent successfully!</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
