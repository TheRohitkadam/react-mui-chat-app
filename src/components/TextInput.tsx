import TextField from "@mui/material/TextField";
import { createStyles, makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { IconButton, Theme } from "@mui/material";

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `0 auto`,
      backgroundColor: "pink",
    },
    wrapText: {
      width: "100%",
    },
  })
);

export const TextInput = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          label="Type a message"
          fullWidth
          size="small"
          sx={{ borderColor: "red" }}
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </form>
    </>
  );
};
