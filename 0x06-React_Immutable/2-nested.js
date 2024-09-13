import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
	return accessImmutableObject(object);
		const mappedObj = fromJS(object)

		return mappedObj.getIn(array, undefined);
}