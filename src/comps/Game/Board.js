import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { useUser } from '../../context/UserContext';

const cardBack = require('../../../assets/cards/backdesign_12.png'); // Adjust path as needed

const Card = ({ card }) => (
  <Image source={card.faceUp ? card.image : cardBack} style={styles.card} resizeMode="contain" />
);

const Board = () => {
  // const { userId } = useUser();
  // const [currentProblemId, setCurrentProblemId] = useState(null);
  // const [currentProblemDetails, setCurrentProblemDetails] = useState(null);
  const [cards, setCards] = useState([
    { id: 1, faceUp: true, image: require('../../../assets/cards/8h.png') }, // Example path
    { id: 2, faceUp: true, image: require('../../../assets/cards/8c.png') },
    { id: 3, faceUp: true, image: require('../../../assets/cards/6s.png') },
    { id: 4, faceUp: true, image: require('../../../assets/cards/Ks.png') },
    { id: 5, faceUp: true, image: require('../../../assets/cards/6d.png') },
  ]);
  
  // const fetchNextProblem = async () => {
  //   try {
  //     // Fetch the next problem ID
  //     const responseNextProblem = await fetch('http://128.61.91.151:3000/get-next-problem', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ userId }),
  //     });
  //     if (!responseNextProblem.ok) throw new Error('Problem fetching failed');
  //     const dataNextProblem = await responseNextProblem.json();
  //
  //     setCurrentProblemId(dataNextProblem.problemId); // Store the problem ID
  //
  //     // Fetch the problem details using the problemId
  //     const responseProblemDetails = await fetch('http://128.61.91.151:3000/get-problem', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ problem_id: dataNextProblem.problemId }),
  //     });
  //     if (!responseProblemDetails.ok) throw new Error('Problem details fetching failed');
  //     const dataProblemDetails = await responseProblemDetails.json();
  //
  //     setCurrentProblemDetails(dataProblemDetails); // Store the problem details
  //     console.log(currentProblemDetails);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (userId) {
  //     fetchNextProblem();
  //   }
  // }, [userId]); // Fetch new problem when userId changes or component mounts
  // 
  return (
    <View style={styles.board}>
      {cards.map((card, index) => (
        <Card card={card} key={index}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  card: {
    height: 92,
    width: undefined,
    aspectRatio: 254/354,
    resizeMode: 'contain',
  },
});

export default Board;
