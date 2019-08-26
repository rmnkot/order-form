import React, { Component } from 'react';
import TypeOfWork from './TypeOfWork';
import AcademicLevel from './AcademicLevel';
import PaperFormat from './PaperFormat';
import TypeOfPaper from './TypeOfPaper';
import Subject from './Subject';
import Pages from './Pages';

export default class OrderformControls extends Component {
    render() {
        return (
            <div>
                <TypeOfWork />
                <AcademicLevel />
                <PaperFormat />
                <TypeOfPaper />
                <Subject />
                <Pages />
            </div>
        );
    }
}
