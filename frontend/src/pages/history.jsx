import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserHistoryQuery } from '../redux/api/authApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const History = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { data: meetings = [], error, isLoading } = useGetUserHistoryQuery(token);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <IconButton onClick={() => navigate('/home')}>
       Back to Home <HomeIcon />
      </IconButton>

      {isLoading && <Typography>Loading history...</Typography>}
      {error && <Typography color="error">Failed to load history.</Typography>}

      {meetings.length > 0 ? (
        meetings.map((e, i) => (
          <Card key={i} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Code: {e.meetingCode}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        !isLoading && <Typography>No meeting history found.</Typography>
      )}
    </div>
  );
};

export default History;
