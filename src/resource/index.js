import PeopleProvider from './PeopleProvider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const PeopleService = new PeopleProvider('people')
