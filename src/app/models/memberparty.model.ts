import { Party } from "./party.model";

export interface MemberParty {
    ID: number,
    MemberPartyRoles: String | null,
    PartyID: number,
    PersonID: number, 
    ValidFromDate: Date,
    ValidUntilDate: Date,
    Party: Party
}