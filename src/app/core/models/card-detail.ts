import { Attack } from './attack';
import { Card } from './card';
import { Property } from './property';

export interface CardDetail extends Card{
    attacks: Attack[];
    resistances: Property[];
    weaknesses: Property[];
}
