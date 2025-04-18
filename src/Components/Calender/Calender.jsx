import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

/*****************************************   *************** */
import Header from "../Header";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment/moment";
import axios from "axios";
import Swal from "sweetalert2";
/******************************* icon */
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import "../../JS/cursor.js";
import { Link, useNavigate, useNavigation } from "react-router-dom";
export default function Calender() {
  /******************** storage */

  // ///////////// cursor
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
  // ///////////////// cursor
  // const events = [
  //   { title: "Meeting", start: new Date() },
  //   //   { title: "demo", start: new Date(), end: addDays(new Date(), 3) },
  //   //   { title: "function", start: addDays(new Date(), 3) }, // start after how much day your event
  // ];
  /************************************ Localstorage store the todolist   */
  const locName = localStorage.getItem("name");
  const locTitle = localStorage.getItem("title");
  const locEvent = localStorage.getItem("event");
  const locStardate = localStorage.getItem("startdate");
  const locEnddate = localStorage.getItem("enddate");
  const locDescript = localStorage.getItem("descript");
  const locColor = localStorage.getItem("color")

  const navigate = useNavigate()

  /********************************************** */




  /************************************************** */

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // *************************************** event show state
  const [eventshow, seteventshow] = useState(false);
  const eventClose = () => seteventshow(false);
  // //////////////// event open adn close

  const [eventdetail, seteventdetail] = useState(false);
  const [eventopen, setevent] = useState(true);

  // ***************************************
  console.log(localStorage);

  // console.log(data);
  //  ***************************************
  const formik = useFormik({
    initialValues: {
      event: true,
      name: "",
      title: "",
      startdate: new Date(),
      enddate: "",
      color: "",
      descript: "",
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      startdate: yup.date().required(),
      enddate: yup.date().required(),
      title: yup.string().required(),
      color: yup.string().required(),
      descript: yup.string().required(),
    }),
    onSubmit: (values) => eventsubmit(values),
  });
  /*********************** using localstorage to store the event  */
  const eventsubmit = (values) => {
    localStorage.setItem("name", values?.name);
    localStorage.setItem("title", values?.title);
    localStorage.setItem("startdate", values?.startdate);
    localStorage.setItem("enddate", values?.enddate);
    localStorage.setItem("event", true);
    localStorage.setItem("color", values?.color)
    localStorage.setItem("descript", values?.descript)
    navigate("/calender")
    setShow(false);
  }
  // /////////////////////// event addd
  // const eventsubmit = useMutation({
  //   /**
  //    *
  //    * @param {*} values
  //    * @returns
  //    */


  //   mutationFn: (values) =>
  //     axios.post(
  //       "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users",
  //       values
  //     ),
  //   onSuccess: () => {
  //     setShow(false);
  //     refetch();
  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: "top-start",
  //       showConfirmButton: false,
  //       timer: 3000,
  //       timerProgressBar: true,
  //       didOpen: (toast) => {
  //         toast.onmouseenter = Swal.stopTimer;
  //         toast.onmouseleave = Swal.resumeTimer;
  //       },
  //     });
  //     Toast.fire({
  //       icon: "success",
  //       title: "Event Addedd successfully !!!",
  //     });
  //     formik.setValues({
  //       name: "",
  //       title: "",
  //       startdate: new Date(),
  //       enddate: "",
  //       color: "",
  //       descript: "",
  //     });
  //   },
  // });
  // ///////////////////// delete event
  /******************* data *************************/
  const deleve = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        localStorage.setItem("name", "");
        localStorage.setItem("title", "");
        localStorage.setItem("startdate", "");
        localStorage.setItem("enddate", "");
        localStorage.setItem("event", false);
        localStorage.setItem("color", "")
        localStorage.setItem("descript", "");
        setShow(false);
        navigate("/calender")
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }



  /******************* data *************************/

  const showevent = (id) => {
    axios
      .get(
        `https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users/${id?.event?.id}`
      )
      .then((response) => {
        formik?.setValues({
          name: response?.data?.name,
          title: response?.data?.title,
          startdate: response?.data?.startdate,
          enddate: response?.data?.enddate,
          descript: response?.data?.descript,
        });
      });
    seteventdetail(true);
  };
  console.log(formik?.values);
  // ***************************************
  const closeeventdet = () => {
    seteventdetail(false),
      setevent(true),
      formik?.setValues({
        name: "",
        title: "",
        startdate: new Date(),
        enddate: "",
        color: "",
        descript: "",
      });
  };

  return (
    <>
      <Header />

      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="container mt-5 p-5 p0">
        <div className="row d-flex flex-wrap">
          <div className="col-md-12  col-lg-4 order-md-2 order-xs-2 order-sm-2 order-2">
            <div className="calender-sidebar">
              <div className="add-button pt-3 ps-2 ">
                <div className="float-end">
                  {/* *************************************** add button and remove event */}

                  <Button
                    className={`border-0 bg-danger me-4 ${localStorage.getItem("event") !== "true" ? "d-block" : "d-none"
                      }`}
                    variant="primary"
                    onClick={handleShow}
                  >
                    Add Event
                  </Button>



                </div>
                {/* ************************************ */}
                <div className="events mt-5">
                  <ul>
                    {/* ************** event with delete button ************* */}

                    <li className={`p-3 mt-5  ${localStorage.getItem("event") === "true" && eventopen === true ? "d-block" : "d-none"}`}>
                      <a>{locTitle}</a>
                      <span
                        className="del-icon float-end"
                        onClick={() => deleve()}
                      >
                        {<DeleteForeverIcon />}
                      </span>
                    </li>





                    {/* *************************************** */}
                  </ul>
                  <div className="event-d  p-3">
                    {/* ***************************************  event details *************************************** */}
                    {!eventopen && (
                      <div className="event-ds  ">
                        <span
                          className={`p-3  pe-auto`}
                          onClick={() => closeeventdet()}
                        >
                          <Link className="text-danger">
                            <CloseIcon />
                          </Link>
                        </span>
                        <div className="icon  del-icon d-flex justify-content-center align-items-center">
                          <DoneIcon />
                        </div>
                        <div className="event-in ms-5 pb-2 pt-2">
                          <p className="">
                            <strong>Event Name</strong>
                          </p>
                          <p>{locTitle}</p>
                          {/* *************************************** event startdate  */}
                          <p className="">
                            <strong>Start Event </strong>
                          </p>
                          <p>
                            {moment(locStardate).format(
                              "YYYY-MM-DD"
                            )}
                          </p>
                          {/* ***************************************  end date*/}
                          <p className="">
                            <strong>End Event </strong>
                          </p>
                          <p>
                            {moment(locEnddate).format(
                              "YYYY-MM-DD"
                            )}
                          </p>
                          {/* ***************************************  details */}
                          <p className="">
                            <strong>Event Details </strong>
                          </p>
                          <p>{locDescript}</p>
                        </div>
                      </div>
                    )}
                    {/****************************************  event detail */}
                    {/* *************************************** */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ****************************************/}
          <div className="col-md-12 col-lg-8 order-md-1 order-sm-1 order-xs-1 order-1">
            <div className="calender p-5 p1 ">
              {/**************************************** calender */}
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={[

                  {

                    title: locTitle,
                    start: moment(locStardate).format(),

                    end: moment(locEnddate).endOf("days").format(),
                    // color:item?.startdate == "2024-10-31" ? "black" : item?.color,
                    color: locColor

                  }
                ]}
                eventClick={(event) => {
                  showevent(event), setevent(false);
                }}
                /**************************************************** */
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                /**************************************************** */
                editable={true}
                eventTextColor="#c4cfde"
                eventChange={() => {
                  alert("red");
                }}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
              />
            </div>
          </div>
        </div>
      </div>
      {/**************************************************** Add Event ****************************** */}
      <Modal show={show} centered size="lg" onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title className="text-color">Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* *************************************** */}
                  <div className="mb-3 input">
                    <label className="form-label">Your name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && (
                      <p className="text-danger">{formik.errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  {/* /**************************************************** NAme */}
                  <div className="mb-3 input">
                    <label className="form-label">Event Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.title && (
                      <p className="text-danger">{formik.errors.title}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/**************************************************** Start date */}
                  <div className="mb-3 input">
                    <label className="form-label">Start Event</label>
                    <input
                      type="date"
                      className="form-control"
                      min={moment().format("YYYY-MM-DD")}
                      value={formik?.values?.startdate}
                      onChange={(e) => {
                        formik.setFieldValue("enddate", ""),
                          formik.setFieldValue("startdate", e.target.value);
                      }}
                      name="startdate"
                    />
                    {formik.errors.startdate && (
                      <p className="text-danger">{formik.errors.startdate}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/* ***************************************  end date */}
                  <div className="mb-3 input">
                    <label className="form-label">End Event</label>
                    <input
                      type="date"
                      value={formik?.values?.enddate}
                      onChange={formik?.handleChange}
                      min={moment(formik.values.startdate).format("YYYY-MM-DD")}
                      values={formik.values.enddate}
                      className="form-control"
                      name="enddate"
                    />
                    {formik.errors.enddate && (
                      <p className="text-danger">{formik.errors.enddate}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/* ***************************************  event color */}
                  <div className="mb-3 input">
                    <label className="form-label">Event color</label>
                    <input
                      type="color"
                      className="form-control mt-1"
                      name="color"
                      value={formik?.values?.color}
                      onChange={formik?.handleChange}
                    />
                    {formik.errors.color && (
                      <p className="text-danger">{formik.errors.color}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  {/* ***************************************  event detail */}
                  <div className="mb-3 input">
                    <label className="form-label">Event Detail</label>
                    <textarea
                      className="form-control"
                      name="descript"
                      rows="5"
                      value={formik?.values?.descript}
                      onChange={formik.handleChange}
                    ></textarea>
                    {formik.errors.descript && (
                      <p className="text-danger">{formik.errors.descript}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="success"
              onClick={formik.handleSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {/* ***************************************  show modal event */}
      <Modal show={eventshow} centered onHide={eventClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="event border text-capitalize p-3">
                  <strong>Task </strong>
                  <p>{formik?.values?.title}</p>
                  {/* ///////////////////// */}
                  <strong>Start event </strong>
                  <p>{formik?.values?.startdate}</p>
                  {/* //////////////////////// */}
                  <strong>End event </strong>
                  <p>{formik?.values?.enddate}</p>
                </div>
              </div>
              <div className="col-md-6 border">
                <div className="evetn-detail  text-capitalize  p-3">
                  <strong>Event Desription </strong>
                  <p>{formik?.values?.descript}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={eventClose}>
            Close
          </Button>
          <Button variant="success" onClick={eventClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
