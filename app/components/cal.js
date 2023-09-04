/* First make sure that you have installed the package */
  
  /* If you are using yarn */
  // yarn add @calcom/embed-react
  
  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Cal() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#7e22ce"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return (
    <button
    className="btn btn-secondary btn-sm mask mask-hexagon fixed z-40 bottom-10 right-5"
	  data-cal-link="lexington/30min"
	  data-cal-config='{"layout":"month_view"}'
	  ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg></button>);
  };
  