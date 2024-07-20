import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-secondary hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover:underline">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-accent">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h11v-9h-3v-3h3V9.5c0-3.07 1.882-4.5 4.433-4.5 1.259 0 2.34.093 2.657.135v3.08h-1.821c-1.427 0-1.703.678-1.703 1.673V11h3.406l-.445 3H18v9h4c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z"/>
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* Twitter Icon */}
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.935 4.935 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195 4.923 4.923 0 00-8.384 4.482C7.688 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.099A4.904 4.904 0 01.96 9.031v.061a4.927 4.927 0 003.95 4.827 4.996 4.996 0 01-2.212.084 4.935 4.935 0 004.604 3.417 9.874 9.874 0 01-6.102 2.105c-.397 0-.788-.023-1.175-.069a13.978 13.978 0 007.557 2.212c9.056 0 14.004-7.503 14.004-14.004 0-.213-.004-.426-.014-.637A10.006 10.006 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* LinkedIn Icon */}
                  <path d="M20.447 20.452H16.82v-5.569c0-1.327-.025-3.036-1.849-3.036-1.85 0-2.134 1.446-2.134 2.94v5.665h-3.632V9h3.485v1.561h.05c.486-.922 1.676-1.891 3.448-1.891 3.688 0 4.369 2.428 4.369 5.584v6.198h-.001zM5.337 7.433c-1.179 0-2.136-.958-2.136-2.137s.957-2.136 2.136-2.136c1.179 0 2.136.958 2.136 2.136 0 1.18-.957 2.137-2.136 2.137zm1.817 13.019H3.518V9h3.635v11.452zM22.225 0H1.771C.791 0 0 .771 0 1.725v20.55C0 23.229.791 24 1.771 24h20.451C23.209 24 24 23.229 24 22.275V1.725C24 .771 23.209 0 22.225 0z"/>
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* Instagram Icon */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.742.128 4.387.372 3.225 1.533 2.063 2.695 1.819 4.05 1.76 5.36.702 6.64.69 7.043.69 10.5s.012 3.86.07 5.14c.058 1.31.302 2.665 1.464 3.827 1.161 1.161 2.516 1.405 3.826 1.464 1.28.058 1.683.07 5.14.07s3.86-.012 5.14-.07c1.31-.058 2.665-.302 3.827-1.464 1.161-1.161 1.405-2.516 1.464-3.826.058-1.28.07-1.683.07-5.14s-.012-3.86-.07-5.14c-.058-1.31-.302-2.665-1.464-3.827-1.161-1.161-2.516-1.405-3.826-1.464C15.665.012 15.262 0 12 0z"/>
                  <path d="M12 5.838A6.162 6.162 0 105.838 12 6.168 6.168 0 0012 5.838zm0 10.162A3.838 3.838 0 118.162 12 3.842 3.842 0 0112 16z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="mb-2">Email: example@example.com</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p>Address: 123 Street Name, City, Country</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
