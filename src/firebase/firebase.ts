import { Unsubscribe, User } from 'firebase/auth';
import { Googler } from '../data/googler';
import { Member } from '../data/member';

export default interface Firebase {
    signIn: () => void;
    signOut: () => void;
    onAuthStateChanged: (callback: (user: User | null) => void) => Unsubscribe;
    register: (id: string, name: string) => Promise<void>;
    getGoogler: (user: User) => Promise<Googler>;
    getAllMembers: () => Promise<Member[]>;
    getMembersById: (ids: string[]) => Promise<Member[]>;
    
    updateSessionMemberIds: (ids: string[]) => Promise<void>;
    listenToSessionMemberIds: (listener: (ids: string[]) => void) => Unsubscribe;

    addUpcomingGame: (team1: string[], team2: string[]) => Promise<void>;
    listenToUpcomingGames: (listener: (games: {team1: string[], team2: string[]}[]) => void) => Unsubscribe;
}