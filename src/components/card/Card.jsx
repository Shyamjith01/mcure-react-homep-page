import React from "react";
import Card from "@mui/material/Card";
import "./card.scss";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded"; 
import CardImage from "../../public/Home/card1.png";

const CardContent = ({item}) => {

  console.log(item,"imaaggee");
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        margin: "10px",
        borderRadius: "15px",
        border:'none',
        textAlign: "start",
        display:'flex',
        flexDirection:"column",
        justifyContent:'space-between',
        boxShadow:'0px 0px 35px 20px rgba(102, 109, 117, 0.10)'
      }}
    >
      <div
        className="info"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          padding: "15px",
        }}
      >
        <span className="type">{item.type}</span>
        <span className="text">{item.text}</span>
      </div>
      <div className="img">
        <div style={{display:'flex',textAlign:'start',marginTop:'2rem',padding: "0 15px",}}>
          <ArrowCircleRightRoundedIcon sx={{color:"#6240E8",marginRight:'5px'}} />
          <span>Get care now</span>
        </div>
        <img src={item.image} alt="" />
      </div>
    </Card>
  );
};

export default CardContent;
