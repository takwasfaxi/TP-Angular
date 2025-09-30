import { createFeatureSelector } from '@ngrx/store';
import { User } from '../../models/user.model';


export const selectUser = createFeatureSelector<User | null>('user');
