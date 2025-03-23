import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SendMailer = (values) => {
  console.log(values?.values);

  const ServiceId = "service_7za05em";
  const templateId = "template_lumgfxd";
  const publicKey = "ccyd0Q_LLjS1m6f3W";

  /******************** Creat object  */

  const tempelateparams = {
    from_name: values?.values?.name,
    from_email: values?.values?.email,
    from_phone: values?.values?.phone,
    message: values?.values?.detail,
  };

  /******************** */
  emailjs.send(ServiceId, templateId, tempelateparams, publicKey).then(
    () => {
      Swal.fire({
        title: "<p style='color:rgb(157, 34, 22);'>Successfully Sent!!!</p>",
        html: "<p style='color: #c4cfde;'>Your message was sent successfully!!!</p>",
        icon: "success",
        background: "rgb(0, 0, 0)",
        color: "#c4cfde !important",
        iconColor: "rgb(51, 138, 29)",
        confirmButtonColor: "#dc3545",
        backdrop: `
      rgba(113, 112, 112, 0.6)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
      });
    },
    (error) => {
      alert("failed", error);
    }
  );
};
export default SendMailer;
