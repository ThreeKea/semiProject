import React from 'react';

import './App.css';
import { Grid, Image } from 'semantic-ui-react'
//수정가능한지 확인중

function App() {
  return (
    <Grid divided='vertically'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
      
    </Grid>
  );
}

export default App;
