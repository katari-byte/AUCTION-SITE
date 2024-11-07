import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="text-white ">
        <div className="flex items-center justify-center flex-col h-[280px] bg-hero-img bg-cover">
          <h1 className="text-center font-bold text-3xl">Privacy Policy</h1>
          <div className="flex gap-2 font-medium pt-2">
            <Link
              to="/"
              className="no-underline hover:text-theme-color transition-all"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-theme-color">Privacy Policy</span>
          </div>
        </div>
        <div className="px-4 py-20 flex flex-col m-auto gap-10 max-w-[1300px]">
          {/* Privacy Policy */}

          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Privacy Policy Overview
            </h2>
            <p className="text-body-text-color pt-5">
              At Real-Time Online Auction, we prioritize the privacy and security 
              of our users. This policy explains the types of data we gather, 
              our methods of use, and our approach to safeguarding your personal information.
            </p>
          </div>
          {/* Information Collection */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Information We Collect
            </h2>

            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                This includes identifiable information, such as your name, 
                email, phone number, billing address, and shipping details. 
                You share this information with us during account registration, 
                auction participation, or customer support interactions.
              </li>
              <li>
                <span className="font-semibold">
                  Non-Personal Information:{" "}
                </span>
                This data, like browsing patterns, IP addresses, and device details, 
                is collected automatically and helps us understand website usage 
                without identifying individual users.
              </li>
            </ul>
          </div>
          {/* Usage of Information */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              How We Use Your Information
            </h2>
            <p className="text-body-text-color pt-5">
              We utilize collected data for several purposes, including:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>
                <span className="font-semibold">
                  Service Provision and Enhancement:
                </span>{" "}
                Your information enables us to facilitate auctions, process 
                transactions, send relevant notifications, and offer support.
              </li>
              <li>
                <span className="font-semibold">
                  Personalization:{" "}
                </span>
                We tailor your experience by suggesting auctions and content 
                based on your interests and past activity.
              </li>
              <li>
                <span className="font-semibold">
                  Marketing and Communications:{" "}
                </span>
                Occasionally, we may send updates, newsletters, and promotions 
                via email. You may opt out of these communications at any time.
              </li>
            </ul>
          </div>
          {/* Data Security */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Data Security
            </h2>
            <p className="text-body-text-color pt-5">
              We employ a range of measures to protect your data from unauthorized 
              access, use, or exposure, including:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 text-body-text-color pt-5">
              <li>Secure servers for data storage</li>
              <li>Encryption technologies to safeguard information</li>
              <li>Controlled access, restricted to authorized personnel only</li>
            </ul>
          </div>
          {/* Copyright and Intellectual Property */}
          <div>
            <h2 className="font-bold text-2xl text-heading-color">
              Intellectual Property and Website Security
            </h2>
            <p className="text-body-text-color pt-5">
              Our platform respects and enforces intellectual property rights. 
              Users are prohibited from listing items that infringe on copyrights 
              or trademarks. We are also committed to securing our website against 
              unauthorized access to ensure a safe user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
