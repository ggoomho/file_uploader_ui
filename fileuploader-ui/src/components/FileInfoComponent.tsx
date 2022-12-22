import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`   
`

const FileInfoComponent = (props) => {
    return (
        <StyledDiv>
            <div>
                <text>{"File Name: " + props.fileInfo.fileName}</text>
            </div>
            <div>
                <text>{"File Type: " + props.fileInfo.fileType}</text>
            </div>
            <div>
                <text>{"File Size: " + props.fileInfo.size + "Byte"}</text>
            </div>
        </StyledDiv>
    )
}

export default FileInfoComponent;