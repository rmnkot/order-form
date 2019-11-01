// =========== OrderformControls ============= //

export function handlePillsClick(e) {
    e.persist();

    this.setState(prevState => ({
        workType: {
            ...prevState.workType,
            value: e.target.value
        }
    }), () => {

        if (e.target.name === 'workType' && this.state.workType.value === '3') {

            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    paperType: {
                        ...prevState.selects.paperType,
                        value: '17',
                        filteredOptions: [{ id: 17, name: 'PowerPoint Presentation' }],
                        searchDisabled: true
                    }
                }
            }));

        } else if (e.target.name === 'workType' && this.state.workType.value !== '3') {

            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    paperType: {
                        ...prevState.selects.paperType,
                        value: '1',
                        filteredOptions: '',
                        searchDisabled: false
                    }
                }
            }));
        }
    })
}

export function handleSearch(name, e) {
    e.persist();

    let filteredArr = [];

    const options = JSON.parse(JSON.stringify(this.state.selects[name].options));

    options.forEach(item => {

        if (item.optgroup) {
            const optgroupEl = item;

            optgroupEl.optgroup = item.optgroup.filter(item => (
                item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            ));

            optgroupEl.optgroup.length && filteredArr.push(optgroupEl)

        } else {
            (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) && filteredArr.push(item)
        }
    });

    this.setState(prevState => ({
        selects: {
            ...prevState.selects,
            [name]: {
                ...prevState.selects[name],
                searchValue: e.target.value,
                filteredOptions: filteredArr
            }
        }
    }));
}

export function handleCustomSlect(name, e) {
    e.persist();

    this.setState(prevState => ({
        selects: {
            ...prevState.selects,
            [name]: {
                ...prevState.selects[name],
                value: e.target.dataset.value,
                searchValue: ''
            }
        }
    }));

    setTimeout(() => {
        hanleDropdownToggle.bind(this)(name);
    }, 200);
}

export function hanleDropdownToggle(name) {
    const { selects } = this.state;

    if (name === 'paperType') {

        this.setState(prevState => ({
            selects: {
                ...prevState.selects,
                [name]: {
                    ...prevState.selects[name],
                    dropdownOpen: !this.state.selects[name].dropdownOpen,
                    filteredOptions: (selects.paperType.filteredOptions[0] &&
                        selects.paperType.filteredOptions[0].id === 17) ?
                        selects.paperType.filteredOptions :
                        ''
                }
            }
        }));

    } else {
        this.setState(prevState => ({
            selects: {
                ...prevState.selects,
                [name]: {
                    ...prevState.selects[name],
                    dropdownOpen: !this.state.selects[name].dropdownOpen,
                    filteredOptions: ''
                }
            }
        }));

    }

}

export function handleRangeChange(data, e) {
    e.persist();

    let validValue;

    if (+e.target.value < data.min) {
        validValue = data.min;
    } else if (+e.target.value > data.max) {
        validValue = data.max;
    } else {
        validValue = e.target.value;
    }

    this.setState(prevState => ({
        ranges: {
            ...prevState.ranges,
            [data.name]: {
                ...prevState.ranges[data.name],
                value: validValue
            }
        }
    }));
}

export function handleSpacing() {
        
    this.setState({
        spacing: this.state.spacing === '2' ? '1' : '2'
    })
}


// =========== OrderformDetails ============= //

export function handleFormField(e) {
    e.persist();   

    this.setState(prevState => ({
        [e.target.id]: {
            ...prevState[e.target.id],
            value: e.target.value
        }
    }));
}



// =========== Helper functions ============= //

export function updateLocalStorage() {
    const { workType, selects, ranges, spacing } = this.state;
    
    const orderSnapshot = {
        workType: workType.value,
        academicLevel: selects.academicLevel.value,
        paperFormat: selects.paperFormat.value,
        paperType: selects.paperType.value,
        subject: selects.subject.value,
        pages: ranges.pages.value,
        sources: ranges.sources.value,
        spacing: spacing
    }

    window.localStorage.setItem('orderSnapshot', JSON.stringify(orderSnapshot));
}


// ========================================== //