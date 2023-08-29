import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Theme } from "@mui/material";
import { DoneAll } from "@mui/icons-material";

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    messageRow: {
      display: "flex",
      margin: "auto",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      paddingTop: 6,
      paddingInline: "10px",
      paddingBottom: "10px",
      backgroundColor: "#54656f",
      color: "#fff",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #54656f",
      borderRadius: "6px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #54656f",
        color: "#fff",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #54656f",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      paddingTop: 6,
      paddingInline: "10px",
      paddingBottom: "10px",
      backgroundColor: "#125c4e",
      color: "#fff",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #125c4e",
      borderRadius: "6px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #125c4e",
        borderLeft: "17px solid transparent",
        borderRight: "17px solid transparent",
        top: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #125c4e",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px",
      },
    },

    messageContent: {
      marginTop: 0,
      marginBottom: 8,
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: 11,
      bottom: "2px",
      right: "20px",
    },
    messageTimeStampLeft: {
      position: "absolute",
      fontSize: 11,
      bottom: "2px",
      right: "10px",
    },
    orange: {
      backgroundColor: deepOrange[500],
      width: 4,
      height: 4,
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: 4,
      height: 4,
    },
    displayName: {
      marginLeft: "0px",
      marginBottom: 5,
      fontSize: 13,
    },
  })
);

//avatarが左にあるメッセージ（他人）
export const MessageLeft = (props: any) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar alt={displayName} className={classes.orange} src={photoURL} />
        <div>
          <div className={classes.messageBlue}>
            <div className={classes.displayName}>{displayName}</div>
            <p className={classes.messageContent}>{message}</p>
            <div className={classes.messageTimeStampLeft}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};
//avatarが右にあるメッセージ（自分）
export const MessageRight = (props: any) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
        <DoneAll
          sx={{
            position: "absolute",
            bottom: "2px",
            right: "4px",
            fontSize: 14,
            color: "skyblue",
          }}
        />
      </div>
    </div>
  );
};
