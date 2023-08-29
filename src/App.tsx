import { createStyles, makeStyles } from "@mui/styles";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { MessageLeft, MessageRight } from "./components/Message";
import SendIcon from "@mui/icons-material/Send";
import EmojiIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AppBar from "./components/Appbar";

const useStyles: any = makeStyles(() =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      // maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "pink",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#282c34",
    },
    messagesBody: {
      paddingTop: 10,
      paddingInline: 30,
      overflowY: "scroll",
      borderRadius: 0,
      backgroundImage:
        'url("https://w0.peakpx.com/wallpaper/580/650/HD-wallpaper-whatsapp-bg-dark-background.jpg")',
    },
  })
);

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} sx={{ p: 0 }}>
        <AppBar />
        <Box className={classes.messagesBody}>
          <MessageLeft
            displayName="Aaditya"
            message="あめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
          />
          <MessageLeft
            displayName="Aaditya"
            message="あめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
          />
          <MessageLeft
            displayName="Aaditya"
            message="あめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
          />
          <MessageLeft
            displayName="Pranit"
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="2:01 PM"
            photoURL=""
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="2:01 PM"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
          />
        </Box>
        <Box sx={{ width: "99%", p: 1, backgroundColor: "#202c33" }}>
          <Stack direction="row" width="100%" spacing={0.4}>
            <Stack direction="row" spacing={0}>
              <IconButton>
                <EmojiIcon sx={{ color: "#8696a0" }} />
              </IconButton>
              <IconButton>
                <AddOutlinedIcon sx={{ color: "#8696a0" }} />
              </IconButton>
            </Stack>
            <TextField
              placeholder="Type a message"
              fullWidth
              size="small"
              color="secondary"
              style={{ color: "#fff" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={{
                color: "#fff",
                bgcolor: "#2A3942",
                borderRadius: 5,
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    // <----- Add this.
                    opacity: 1,
                  },
                },
                label: { color: "blue" },
                "& fieldset": { border: "none", color: "#fff" },
              }}
            />
            <IconButton>
              <SendIcon sx={{ color: "#8696a0" }} />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
}
