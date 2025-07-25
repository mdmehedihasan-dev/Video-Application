import React, { useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';

import { useAddToHistoryMutation } from '../redux/api/authApi';

const Home = () => {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const [addToHistory] = useAddToHistoryMutation();

  const handleJoinVideoCall = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/auth");
        return;
      }

      await addToHistory({ token, meeting_code: meetingCode }).unwrap();
      navigate(`/${meetingCode}`);
    } catch (err) {
      console.error("Failed to join meeting:", err);
    }
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Meetu Video Call</h2>
        </div>

        <div >
         <div className='flex items-center'>
           <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon />
          </IconButton>
          <p>History</p>
         </div>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>
            <div style={{ display: 'flex', gap: "10px" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                label="Meeting Code"
                variant="outlined"
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className='rightPanel'>
          <img srcSet='/logo3.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
