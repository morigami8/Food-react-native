import axios from 'axios';
import { YELP_KEY } from '../../dev/keys';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_KEY}`
  }
})