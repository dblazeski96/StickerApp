import React from 'react'

export const AlbumsScreen = ({ albums }) => (
  <div>
    {albums.map(album => (
      <p key={album.id}>{album.name}</p>
    ))}
  </div>
)
