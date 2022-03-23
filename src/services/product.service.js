import axios from 'axios';
import { apiUrl } from '../utils';

class ProductService {
  getProducts = async () => {
    return await axios.get(apiUrl('products'));
  };
}

export default new ProductService();
