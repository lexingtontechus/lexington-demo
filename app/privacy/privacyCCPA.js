"use client";

export default function PrivacCCPA() {
  return (
    <>
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left">
              Category of Personal Information
            </th>
            <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left">
              Examples
            </th>
          </tr>
        </thead>
        <tbody>
          {/*Identfiers*/}
          <tr className="bg-green-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">Identifiers</span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Identifiers, including relating to data used to identify you, such
              as full name, email, address, birthdate (month and day), and phone
              number. Contact details, such as real name, alias, postal address,
              telephone or mobile contact number, unique personal identifier,
              online identifier, Internet Protocol address, email address and
              account name.
            </td>
          </tr>
          {/*Personal categories*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Personal information categories listed in the California
                Customer Records statute
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Name, contact information, education, employment, employment
              history and financial information
            </td>
          </tr>
          {/*Protected categories*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Protected classification characteristics under California or
                federal law
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Gender and date of birth
            </td>
          </tr>
          {/*Commercial information*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">Commercial information</span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Transaction information, purchase history, account history and
              products or services purchased, obtained, or considered, financial
              details and payment information
            </td>
          </tr>
          {/*Biometric information*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">Biometric information</span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Fingerprints and voiceprints
            </td>
          </tr>
          {/*Internet activity*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Internet or other similiar activity
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Browsing history, search history, online behavior, interest data,
              and interactions with our and other websites, applications,
              systems and advertisements. device information, logs, IP address,
              and analytics data
            </td>
          </tr>
          {/*Geolocation data*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">Geolocation data</span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Device location
            </td>
          </tr>
          {/*Audio, electronic, visual, thermal, olfactory, or
                            similar information*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Audio, electronic, visual, thermal, olfactory, or similar
                information
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Images and audio, video or call recordings created in connection
              with our business activities, photo or avatar, videos, and
              recordings of phone calls between you and us, where permitted by
              law.
            </td>
          </tr>
          {/* Professional or employment-related information*/}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Professional or employment-related information
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Business contact details in order to provide you our services at a
              business level, job title as well as work history and professional
              qualifications if you apply for a job with us. Including
              communication preferences, customer service and communications
              history, personal information you permit us to see when
              interacting with us through social media, and personal information
              you provide us in relation to a question, request, inquiry,
              survey, contest or promotion.
            </td>
          </tr>
          {/* Inferences drawn from other personal information */}
          <tr className="bg-red-500">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
              <span className="ml-0 font-bold">
                Inferences drawn from other personal information
              </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
              Inferences drawn from any of the collected personal information
              listed above to create a profile or summary about, for example, an
              individual’s preferences and characteristics, including our
              predictions about your interests and preferences and related
              Service Profile Information.
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left">
              Category of Personal Information
            </th>
            <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left">
              Examples
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="italic text-sm">
        Your data is not disclosed for business purposes or sold to third
        parties.
      </div>
    </>
  );
}

function Yes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 512 512"
      className="fill-green-400"
    >
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
    </svg>
  );
}

function No() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 512 512"
      className="fill-red-600"
    >
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </svg>
  );
}