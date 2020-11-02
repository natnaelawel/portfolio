import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

import "./style.css";

function MyModal({ setIsModalOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleClose = (e, type) => {
    if (type === "inner") {
    } else {
      setIsModalOpen(false);
    }
    if (type !== "outer") {
      e.stopPropagation();
      return;
    }
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {
      REACT_APP_EMAILJS_RECEIVER_NAME: receiverName,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
      REACT_APP_EMAILJS_SERVICE_ID: serviceId,
    } = process.env;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: receiverName,
      message,
    };
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      if (response) {
        setName("");
        setMessage("");
        setEmail("");
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        handleClose(e, "outer");
      }
    } catch (error) {
      console.log("FAILED...", error);
      setIsLoading(false);
      setError(error.message);
    }
    // emailjs.send(serviceId, templateId, templateParams).then(
    //   function (response) {
    //     console.log("SUCCESS!", response.status, response.text);
    //   },
    //   function (error) {
    //   }
    // );
  };

  return (
    <div
      className="my__modal__container"
      onClick={(e) => handleClose(e, "outer")}
    >
      <div className="modal__box" onClick={(e) => handleClose(e, "inner")}>
        <form onSubmit={handleSubmit} method="post">
          <div className="modal__box__header">
            <h2>Contact Me</h2>
            <button onClick={(e) => handleClose(e, "close Button")}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          {error && <h5 className="error">error</h5>}
          <div className="modal__box__content">
            <div className="form__group">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form__group sendBtn">
              <button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <div className="progressBtn">
                    <span className="loader"></span>Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyModal;

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 10
//   },
// };
// Modal.setAppElement("html");

// function MyModal({isModalOpen, setIsModalOpen}) {
//  var subtitle;
// //  const [modalIsOpen, setIsOpen] = React.useState(false);
// //  function openModal() {
// //    setIsOpen(true);
// //  }

// const handleClose = ()=>{
//     setIsModalOpen(false)
// }
//  function afterOpenModal() {
//    // references are now sync'd and can be accessed.
//    subtitle.style.color = "#f00";
//  }

// //  function closeModal() {
// //    setIsOpen(false);
// //  }

//     return (
//       <div>
//         <Modal
//           isOpen={isModalOpen}
//           onAfterOpen={afterOpenModal}
//           //   onRequestClose={closeModal}
//           onRequestClose={handleClose}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//           <button onClick={handleClose}>close</button>
//           {/* <button onClick={closeModal}>close</button> */}
//           <div>I am a modal</div>
//           <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </Modal>
//       </div>
//     );
// }

// export default MyModal
