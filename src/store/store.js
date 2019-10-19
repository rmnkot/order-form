export const store = {
    siteCategoryId: 1,
    isLoading: true,
    workType: {
        name: 'workType',
        value: '1',
        params: [
            // { id: 1, icon: <FaPencilAlt />, name: 'WRITING', comment: 'from scratch' },
            // { id: 2, icon: <FaParagraph />, name: 'EDITING', comment: 'existing paper' },
            // { id: 3, icon: <FaDesktop />, name: 'SLIDES', comment: 'presentation' }
        ],
        label: 'Select Type of Work'
    },
    selects: {
        academicLevel: {
            id: 'academicLevel',
            name: 'academicLevel',
            value: '1',
            searchValue: '',
            searchDisabled: false,
            options: [
                // { id: 1, name: "High School" },
                // { id: 2, name: "College" },
                // { id: 3, name: "University" },
                // { id: 4, name: "Master’s" },
                // { id: 5, name: "Ph.D." }
            ],
            filteredOptions: '',
            label: 'Academic Level',
            dropdownOpen: false
        },
        paperFormat: {
            id: 'paperFormat',
            name: 'paperFormat',
            value: '1',
            searchValue: '',
            searchDisabled: false,
            options: [
                // { id: 1, name: 'MLA' },
                // { id: 2, name: 'APA' },
                // { id: 3, name: 'Chicago' },
                // { id: 4, name: 'Harvard' },
                // { id: 5, name: 'Other' }
            ],
            filteredOptions: '',
            label: 'Paper Format',
            dropdownOpen: false
        },
        paperType: {
            id: 'paperType',
            name: 'paperType',
            value: '1',
            searchValue: '',
            searchDisabled: false,
            options: [
                { id: 1, name: 'Essay (Any Type)' },
                { id: 18, name: 'Admission Essay' },
                { id: 20, name: 'Scholarship Essay' },
                { id: 19, name: 'Personal Statement' },
                { id: 4, name: 'Research Paper' },
                { id: 2, name: 'Case Study' },
                { id: 3, name: 'Term Paper' },
                { id: 7, name: 'Coursework' },
                { id: 5, name: 'Book Review' },
                { id: 6, name: 'Movie Review' },
                { id: 8, name: 'Annotated Bibliography' },
                { id: 9, name: 'Article' },
                { id: 10, name: 'Assignment' },
                { id: 11, name: 'Dissertation' },
                { id: 12, name: 'Lab Report' },
                { id: 13, name: 'Math Problem' },
                { id: 15, name: 'Speech' },
                { id: 16, name: 'Statistics Report' },
                { id: 17, name: 'PowerPoint Presentation', disabled: true },
                { id: 21, name: 'Blog Writing' },
                { id: 22, name: 'Critical Thinking' },
                { id: 23, name: 'Peer Review' },
                { id: 24, name: 'Q&A' },
                { id: 25, name: 'Personal Reflection' },
                { id: 27, name: 'Capstone Project' },
                { id: 28, name: 'Creative Writing' }
            ],
            filteredOptions: '',
            label: 'Type of Paper',
            dropdownOpen: false
        },
        subject: {
            id: 'subject',
            name: 'subject',
            value: '0',
            searchValue: '',
            options: [
                { id: 0, name: 'Please select subject', disabled: true },
                {
                    id: '01', name: 'Arts & Humanities', optgroup: [
                        { id: 4, name: 'Culture' },
                        { id: 6, name: 'Education' },
                        { id: 7, name: 'English' },
                        { id: 17, name: 'Linguistics' },
                        { id: 18, name: 'Literature' },
                        { id: 29, name: 'Ethics' },
                        { id: 61, name: 'Art' }
                    ]
                },
                {
                    id: 2, name: 'Social Sciences', optgroup: [
                        { id: 12, name: 'History and Anthropology' },
                        { id: 14, name: 'International Relations' },
                        { id: 21, name: 'Philosophy' },
                        { id: 23, name: 'Political Science' },
                        { id: 24, name: 'Psychology' },
                        { id: 25, name: 'Sociology' },
                        { id: 31, name: 'Religion and Theology' },
                        { id: 33, name: 'Gender & Sexual Studies' },
                        { id: 35, name: 'Journalism, mass media and communication' },
                    ]
                },
            ],
            filteredOptions: '',
            label: 'Subject',
            dropdownOpen: false
        },
    },
    ranges: {
        pages: {
            name: 'pages',
            min: '1',
            value: '1',
            max: '100',
            label: 'Pages',
            output: true
        },
        sources: {
            name: 'sources',
            min: '0',
            value: '0',
            max: '100',
            label: 'Sources',
            output: false
        }
    },
    spacing: '2',
    title: {
        id: 'title',
        name: 'title',
        type: 'text',
        maxlength: '250',
        value: '',
        placeholder: [
            'Will the Implementation of Blockchain Technology Change the HR?',
            'Internal Recruiting: Advantages and Legal Issues That may Arise',
            'How Does the Effective Management at the Multinational Company Look Like?',
            'Should a Manager Always Be a Leader?',
            'Binomial Denominators',
            'How Do Developed Countries Benefit from Globalization?',
            'How Can Governments Control the Inflation Rate?',
            'World Health Organization Ethical Principles',
            'Leadership in Nursing',
            'Will the Humanity Travel to Mars in the next 10 Years?',
            'The Nature of Moonquakes'
        ],
        label: 'Title'
    },
    paperDetails: {
        id: 'paperDetails',
        name: 'paperDetails',
        value: '',
        label: 'Paper Details'
    }

}
