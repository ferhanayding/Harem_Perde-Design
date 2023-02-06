import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 25, 100);
      });
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <LinearProgress variant="buffer" value={progress} />
    </Box>
  );
}
