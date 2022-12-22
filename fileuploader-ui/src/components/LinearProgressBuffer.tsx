import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { useFileUploadProgress } from '../stores/ProgressContext';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px;
  margin 10px;
  border: 1px dotted gray;
`

export default function LinearProgressBuffer({FileInfoStore}) {
  const {FileUploadProgressStore} = useFileUploadProgress();

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [complete, setComplete] = React.useState(false);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress == 100) {
        setComplete(true);
      } else {
        FileUploadProgressStore.fetch(FileInfoStore.fileInfo.id);
        setProgress(FileUploadProgressStore.fileUploadProgress.progress);
        setBuffer(FileUploadProgressStore.fileUploadProgress.buffer);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    if(complete) {
      clearInterval(timer);
    }
  }, []);

  return (
    <StyledDiv>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      </Box>
    </StyledDiv>
  );
}
