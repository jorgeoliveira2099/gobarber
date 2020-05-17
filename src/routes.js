import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'joojo é',
    email: 'jooj@gmail.com',
    password_hash: 'sdfgds67',
  });

  return res.json(user);
});

export default routes;
