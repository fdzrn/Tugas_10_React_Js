import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Grid, Container, Flag, Icon, Input, Header, Image, Divider, Label, Button} from "semantic-ui-react";
class App extends Component {
  render(){
    return(
      <div>
        <Container>
          <Grid columns='equal'>
            <Grid.Column>
              <Container centered>
                <Flag name='id' />
                <Icon name='angle left' size='big' />
                <Icon name='angle right' size='big' />
              </Container>
            </Grid.Column>
            <Grid.Column width={10}>
             <Container>
                 <Input fluid icon='star' placeholder='Search...' />
             </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Header as='h2'>
                  <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
                </Header>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
        <Divider horizontal>Selamat Datang</Divider>
        <Container textAlign='right'>
          <Label as='a' color='blue' tag>
            Sport
          </Label>
        </Container>
        <br/>
        <Container textAlign='center'>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
        <br />
        <Container textAlign='center'>
          <Button
            color='teal'
            content='Tambah Tautan ke List'
            icon='add'
            labelPosition='left'
          />
        </Container>
      </div>
    );
  }
}

export default App;
