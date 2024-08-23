export type Userdata = {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    uuid: number;
    username: string;
    password: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
};
