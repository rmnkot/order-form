export function handleSpacing() {
        
    this.setState({
        spacing: this.state.spacing === '2' ? '1' : '2'
    })
}


export function updateLocalStorage() {
    const {pills, selects, ranges, spacing } = this.state;
    
    const orderSnapshot = {
        workType: pills.workType.value,
        academicLevel: pills.academicLevel.value,
        paperFormat: pills.paperFormat.value,
        paperType: selects.paperType.value,
        subject: selects.subject.value,
        pages: ranges.pages.value,
        sources: ranges.sources.value,
        spacing: spacing
    }

    window.localStorage.setItem('orderSnapshot', JSON.stringify(orderSnapshot));
}
