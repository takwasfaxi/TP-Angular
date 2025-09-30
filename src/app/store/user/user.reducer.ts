import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.actions';
import { User } from '../../models/user.model';




export const initialState: User | null = null;

export const userReducer = createReducer<User | null>(
  initialState,
  on(login, (_, { user }) => user),
  on(logout, (_) => null)
);

