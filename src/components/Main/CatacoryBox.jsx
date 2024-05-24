import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import SensorWindowOutlinedIcon from '@mui/icons-material/SensorWindowOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

const originalBackgroundColor = 'rgba(15,6,66,1)';
const hoverBackgroundColor = 'rgba(1,2,9, 0.7)'; // Color with half opacity

function CategoryBox() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const categories = [
    { icon: <MeetingRoomOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> },
    { icon: <ChairOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> },
    { icon: <SensorWindowOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> },
    { icon: <BedOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> },
    { icon: <StoreMallDirectoryOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> },
    { icon: <BiotechOutlinedIcon style={{ fontSize: 105, color: 'white', marginLeft: '140px' }} /> }
  ];

  return (
    <Container>
      <Row>
        {categories.map((category, index) => (
          <Col lg={4} md={6} className='mb-4' key={index}>
            <div
              style={{
                backgroundColor: hoveredIndex === index ? hoverBackgroundColor : originalBackgroundColor,
                height: '100px',
                marginTop: '20px',
                cursor: 'pointer'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {category.icon}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryBox;
