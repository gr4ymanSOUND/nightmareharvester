import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
} else {
  axios.defaults.baseURL = 'http://localhost:4000';
}

// user calls

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`/nightmareApi/users/login`,
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
    const { data } = await axios.get(`/nightmareApi/users/me`, auth);
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
    const { data } = await axios.get(`/nightmareApi/users/`, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function createUser(newUserData) {
  try {
    const payload = {
      newUserData: newUserData
    }
    const { data } = await axios.post(`/nightmareApi/users/create`, payload);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function editUser(token, userId, newUserData) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    // not sure why I switched from using the payload to just the raw newuserdata, but it's currently working as far as I know so I won't change it
    // const payload = {
    //   newUserData: newUserData
    // }
    const { data } = await axios.patch(`/nightmareApi/users/${userId}`, newUserData, auth);
    return data;
  } catch (error) {
    console.error(error);
    // handles alerting the user when we hit our custom error for editing passwords
    if (error.response.data) {
      alert(error.response.data);
    }
  }
}

export async function resetUserPassword(token, userId) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload = {
      basePassword: 'cultFollower24'
    }
    const { data } = await axios.patch(`/nightmareApi/users/reset/${userId}`, payload, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function removeUser(token, userId) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.delete(`/nightmareApi/users/${userId}`, auth);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// VIDEO CALLS

export async function getAllVideos() {
  try {
    const { data } = await axios.get(`nightmareApi/videos/`);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function createNewVideo(token, newVideoInfo) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload = {
      newVideoInfo: newVideoInfo
    }
    const { data } = await axios.post(`nightmareApi/videos/create`, payload, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function updateVideo(token, videoId, videoInfo) {
  try {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const payload = {
      videoInfo: videoInfo
    }
    const { data } = await axios.patch(`nightmareApi/videos/${videoId}`, payload, auth);
    return data;
  } catch (error) {
    console.error(error)
  }
}