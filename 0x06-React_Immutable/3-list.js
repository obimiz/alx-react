import { List } from 'immutable';
import { appendToMemberExpression } from '../../.cache/typescript/5.5/node_modules/@babel/types/lib/index';

export function getListObject(array) {
	return List(array)
}

export function addElementToList(list, element) {
	return list.push(element);
}