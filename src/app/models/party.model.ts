export interface Party {
    ID: number,
    Abbreviation: String,
    ActualName: String,
    PreferredName: String,
    Notes: String,
    ValidFromDate: Date,
    ValidUntilDate: Date,
    MemberParties: String,
    PartyRoles: String
}