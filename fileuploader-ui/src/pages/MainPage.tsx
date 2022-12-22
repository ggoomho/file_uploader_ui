import React, { useEffect } from 'react';
import FileDragDrop from '../components/FileDragDrop';
import {useFileInfo} from '../stores/FileInfoContext';
import {observer} from 'mobx-react';
import LinearProgressBuffer from '../components/LinearProgressBuffer';
import styled from 'styled-components';
import FileInfoComponent from '../components/FileInfoComponent';

const StyledDiv = styled.div`
    margin: 100px;
`

const MainPage = observer( () => {
    const {FileInfoStore} = useFileInfo();

    return (
        <StyledDiv>
            <FileDragDrop FileInfoStore={FileInfoStore}></FileDragDrop>
            {FileInfoStore.fileInfo.id === 0? null: 
                <div>
                    <FileInfoComponent fileInfo={FileInfoStore.fileInfo}></FileInfoComponent>
                    <LinearProgressBuffer FileInfoStore={FileInfoStore}/>
                </div>}
        </StyledDiv>
    );
});

export default MainPage;