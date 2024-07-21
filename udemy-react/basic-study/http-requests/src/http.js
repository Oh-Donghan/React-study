export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  // response.ok가 true이면 성공적인 응답을 받았다는 뜻
  // 200, 300 정도의 상태 코드를 받는다.
  // false이면 응답을 받지 못한거고, 400, 500의 상태 코드를 받는다.
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch user places');
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  return resData.message;
}
