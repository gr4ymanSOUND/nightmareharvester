import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
} else {
  axios.defaults.baseURL = 'http://localhost:4000';
}

// user calls

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`/api/users/login`,
      {
        username: username,
        password: password
      }
    )
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function getMe(token) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.get(`/api/users/me`, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function getAllUsers(token) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.get(`/api/users/`, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function createUser(newUserData) {

  console.log('new user data in axios', newUserData);
  try {
    const payload = {
      newUserData: newUserData
    }
    const { data } = await axios.post(`/api/users/create`, payload);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function editUser(token, userId, newUserData) {

  console.log('axios token for edit', token)
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload = {
      newUserData: newUserData
    }
    const { data } = await axios.patch(`/api/users/${userId}`, newUserData, auth);
    return data;
  } catch (error) {
    console.error(error);
    // handles alerting the user when we hit our custom error for editing passwords
    if (error.response.data) {
      alert(error.response.data);
    }
  }
}

export async function removeUser(token, userId) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.delete(`/api/users/${userId}`, auth);
    return data;
  } catch (error) {
    console.error(error);
  }
}