import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100px',
    maxHeight: '80vh',
    marginTop: 20,
    marginLeft: 20,
    borderWidth: '0px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  img: {
    display: 'flex',
    height: '70vh'
  }
}

export const Album = ({ album }) => (
  <Card style={styles.card}>
    {/* <CardMedia image={require(`./album${album.id}.jpg`)} /> */}
    <img
      src={require(`./album${album.id}.jpg`)}
      alt={album.name}
      style={styles.img}
    />
    <CardContent style={styles.cardContent}>
      <Typography gutterBottom variant="title" component="h2">
        {album.name}
      </Typography>
    </CardContent>
  </Card>
)
