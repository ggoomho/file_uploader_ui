import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 10px
`

class FileDragDrop extends React.Component<any> {
  fileLimit: number = 1;

  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange(files){
    this.setState({
      files: files
    });

    var formData = new FormData();
    formData.append("file", files[0]);

    this.props.FileInfoStore.posts(formData);
  }

  render(){
    return (
      <StyledDiv>
        <DropzoneArea
          maxFileSize={5242880}
          onDrop={this.handleChange.bind(this)}
          showPreviewsInDropzone={false}
        />
      </StyledDiv>
    )
  }
}
 
export default FileDragDrop;