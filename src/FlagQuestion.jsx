import React, {Component} from 'react';
import './FlagQuestion.css';

const  QuestionState = {
        QUESTION: 1,
        ANSWER_WRONG: 2,
        ANSWER_CORRECT: 3
};

class FlagQuestion extends Component {
    static defailtProps = {
        options = []
    }
    constructor(props){
        super(props);
        this.state = {
            userChoice: undefined
        }


    }
}

