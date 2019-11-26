export class ResumeDetails {
    constructor(
        public address?: string,
        public contact?: string,
        public coverLetter?: string,
        public email?: string,
        public fullName?: string,
        public skills?: string,
        public education?: EducationDetails[],
        public experience?: ExperienceDetails[]
    ) { }
}

export class EducationDetails {
    constructor(
        public qualification?: string,
        public instituion?: string,
        public passingYear?: string,
    ) { }
}

export class ExperienceDetails {
    constructor(
        public company?: string,
        public description?: string,
    ) { }
}
