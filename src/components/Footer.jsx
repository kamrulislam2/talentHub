import React from "react";

const Footer = () => {
  return (
    <div className="px-8 lg:px-40 pt-12 lg:pt-32 pb-12 lg:pb-28 bg-black">
      <div className="grid lg:grid-cols-5 border-b border-gray-700 pb-8 lg:pb-12">
        <div className="mr-0 lg:-mr-16">
          <h2 className="font-extrabold text-3xl tracking-wide text-white mb-5">
            TalentHub
          </h2>
          <p className="text-gray-400 font-normal text-base leading-normal mb-5">
            We are the world best talent hunters in Bangladesh. We hunts only
            quality not the quantity.
          </p>
          <img src="https://i.ibb.co/SJM044m/Group-9969.png" alt="" />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-36">
          <h3 className="font-semibold text-xl text-white mb-5">Company</h3>
          <div className="text-gray-400">
            <p className="mb-3 font-normal text-base">About Us</p>
            <p className="mb-3 font-normal text-base">Work</p>
            <p className="mb-3 font-normal text-base">Latest News</p>
            <p className="mb-3 font-normal text-base">Careers</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-28">
          <h3 className="font-semibold text-xl text-white mb-5">Product</h3>
          <div className="text-gray-400">
            <p className="mb-3 font-normal text-base">Prototype</p>
            <p className="mb-3 font-normal text-base">Plans & Pricing</p>
            <p className="mb-3 font-normal text-base">Customers</p>
            <p className="mb-3 font-normal text-base">Integrations</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-28">
          <h3 className="font-semibold text-xl text-white mb-5">Support</h3>
          <div className="text-gray-400">
            <p className="mb-3 font-normal text-base">Help Desk</p>
            <p className="mb-3 font-normal text-base">Sales</p>
            <p className="mb-3 font-normal text-base">Become a Partner</p>
            <p className="mb-3 font-normal text-base">Developers</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-20">
          <h3 className="font-semibold text-xl text-white mb-5">Contact</h3>
          <div className="text-gray-400">
            <p className="mb-3">524 Broadway , NYC</p>
            <p className="mb-3">+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-12 text-white font-normal text-sm opacity-30 lg:flex justify-between items-center">
        <p>
          @2023 <span className="font-semibold">TalentHub</span>. All Rights
          Reserved
        </p>
        <p>Powered by TalentHub</p>
      </div>
    </div>
  );
};

export default Footer;
