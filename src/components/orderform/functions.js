export function handleSpacing() {
        
    this.setState({
        spacing: this.state.spacing === '2' ? '1' : '2'
    })
}


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
