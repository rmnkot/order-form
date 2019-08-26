import React, { Component } from 'react';
import TypeOfWork from './controls/TypeOfWork';
import AcademicLevel from './controls/AcademicLevel';
import PaperFormat from './controls/PaperFormat';
import TypeOfPaper from './controls/TypeOfPaper';
import Subject from './controls/Subject';
import Pages from './controls/Pages';

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
