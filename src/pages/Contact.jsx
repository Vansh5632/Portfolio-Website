import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.status === 200) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-primary to-secondary text-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 animate-fade-in-down">
          Get in Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col items-start w-full lg:w-2/5 space-y-8">
            {[
              { icon: FaEnvelope, text: 'vanshgilhotra8885@gmail.com', href: 'mailto:vanshgilhotra8885@gmail.com' },
              { icon: FaPhone, text: '+91-12345-67890' },
              { icon: FaMapMarkerAlt, text: 'Jalandhar, Punjab, India' },
            ].map(({ icon: Icon, text, href }, index) => (
              
                <a
                  key={index}
                  href={href || '#'}
                  className="group flex items-center hover:translate-x-2 transition duration-300 text-lg sm:text-xl"
                >
                  <Icon className="text-highlight mr-4 text-2xl sm:text-3xl group-hover:animate-bounce" />
                  <span className="group-hover:text-highlight transition duration-300">{text}</span>
                </a>
            ))}
            
            {/* Social Media Links */}
            <div className="mt-8 space-y-4 w-full">
              {[
                { icon: FaLinkedin, text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/vansh-gilhotra-059762220/', bgColor: 'bg-blue-600 hover:bg-blue-700' },
                { icon: FaGithub, text: 'Follow on GitHub', href: 'https://github.com/Vansh5632', bgColor: 'bg-gray-800 hover:bg-gray-900' },
                { icon: FaTwitter, text: 'Follow on Twitter', href: 'https://x.com/gilhotravansh7', bgColor: 'bg-blue-400 hover:bg-blue-500' },
              ].map(({ icon: Icon, text, href, bgColor }, index) => (
                  <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-base sm:text-lg ${bgColor} transition duration-300 p-3 sm:p-4 rounded-lg`}
                    >
                      <Icon className="mr-3 text-xl sm:text-2xl" />
                      <span>{text}</span>
                    </a>
                
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="mb-6">
                  <label className="block text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition duration-300 h-32 sm:h-40"
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition duration-300"
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-secondary text-white p-3 sm:p-4 rounded-lg hover:bg-highlight transition duration-300 text-lg sm:text-xl font-semibold transform hover:scale-105"
              >
                Send Message
              </button>
              {formStatus && (
                <div className={`mt-4 p-3 rounded-lg text-center ${
                  formStatus.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;