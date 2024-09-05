import { InMemoryUser } from '../gateway/user.inmemory';
import { ApiUser } from "../gateway/user-gateway-api";
import { SOURCE } from "../constants/const";

export const userLoader = () => {
    switch (SOURCE) {
      case 'api':
        return new ApiUser();
      default:
        return new InMemoryUser();
    }
  }