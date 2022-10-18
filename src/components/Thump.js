import React, {useState} from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { red } from 'synonyms/dictionary';
import { Button } from 'theme-ui';

const Thump = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);

  return (
    <>
      <Button sx={styles.thumb} onClick={() => setLikes(likes + 1)}>
        <FaThumbsUp mr={2}  /> {likes === 0 ? '' : likes}
      </Button>
      <Button onClick={() => setDisLikes(dislikes + 1)}>
        <FaThumbsDown mr={2} /> {dislikes === 0 ? '' : dislikes}
      </Button>
    </>
  )
}

const styles = {
  thumb: {
    mr: 1,
    fontSize: "3.75rem",
  }
}

export default Thump;