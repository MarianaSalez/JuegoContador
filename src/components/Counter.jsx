import { useEffect, useState, useContext } from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import InfoCards from "./infoCards";
import ButtonClick from "./buttonClick";
import { CounterContext } from "../context/counterContext";

export const Counter = () => {
  const [maxClick, setMaxClick] = useState(0);
  const { timeRun, countClicks, secs, start, counter, message } =
    useContext(CounterContext);

  useEffect(() => {
    if (!timeRun) {
      if (maxClick < countClicks) {
        setMaxClick(countClicks);
      }
    }
  }, [timeRun, countClicks, maxClick]);

  return (
    <Container maxWidth="sm">
      {/*TITLES AND CONUNTERS */}

      {timeRun && secs <= 5 ? (
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <InfoCards title="Tiempo restante" value={secs} color={green[300]} />
          <InfoCards title="Contador" value={countClicks} color={green[500]} />
        </Box>
      ) : (
        <Typography variant="h2" color={green[800]} justifyContent="center">
          LET'S CLICK!
        </Typography>
      )}

      {/*BUTTONS */}

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        m={5}
      >
        <ButtonClick
          disable={timeRun}
          accion={start}
          icon={<PlayArrowIcon />}
          title="Start"
        />
        <ButtonClick
          disable={!timeRun || secs > 5}
          accion={counter}
          icon={<AdsClickIcon />}
          title="Click"
        />
      </Box>

      {/*INFO FOOT*/}

      <Typography variant="h3" color={green[700]} justifyContent="center">
        {timeRun ? message : `Max Number of Click: ${maxClick}`}
      </Typography>
    </Container>
  );
};

export default Counter;
