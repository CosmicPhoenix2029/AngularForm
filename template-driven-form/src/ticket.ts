export class ticket {
    constructor(
        public contact: string,
        public contactEmail: string,
        public organisation: string,
        public room: string,
        public building: string,
        public phone: string,
        public mobile: string,
        public contactPreference: string,
        public subject: string,
        public description: string,
        public techNotes: string,
        public ticketChannel: string,
        public siteVisitRequired: boolean,
        public assetNumber: string,
        public catagory: string,
        public team: string,
        public minsContributed: number
    ) { }
}