import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorProfileById } from "../Api/Service";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const { uniqueId } = useParams();
  const [doctors1, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await getDoctorProfileById(uniqueId);
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor data", error);
      }
    };

    fetchDoctor();
  }, [uniqueId]);

  if (!doctors1) {
    return <div>Loading...</div>;
  }

  return (
    <div className="doctor-profile">
      <img src={doctors1.profilePhoto} alt={`${doctors1.firstName} ${doctors1.lastName}`} className="doctor-profile-photo" />
      <h1>{`${doctors1.firstName} ${doctors1.lastName}`}</h1>
      <p>Qualification: {doctors1.qualification}</p>
      <p>Designation: {doctors1.designation}</p>
      <p>Age: {doctors1.age}</p>
      <p>Gender: {doctors1.gender}</p>
      <p>Email: {doctors1.email}</p>
      <p>Mobile: {doctors1.mobileNumber}</p>
      <p>Marital Status: {doctors1.maritalStatus}</p>
      <p>Blood Group: {doctors1.bloodGroup}</p>
      <p>Address: {doctors1.address}, {doctors1.city}, {doctors1.state}, {doctors1.country}, {doctors1.postalCode}</p>
      <p>Bio: {doctors1.bio}</p>
      <p>Availability: {doctors1.availability}</p>
    </div>
  );
};

export default DoctorProfile;
