"use client"
import ContactForm from "./contactform";

export default function PopupWidget() {
  return (
<>
{/* Open the modal using ID.showModal() method */}
<div className="fixed z-40 right-5 bottom-5">
<button className="btn btn-circle btn-primary" onClick={()=>window.my_modal_5.showModal()}>
<svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Contact Us</h3>
    <p>Set up a meeting to discuss a demo for your business.</p>
    <ContactForm/>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
</div>
</>
      );}