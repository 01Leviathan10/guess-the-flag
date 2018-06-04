import React, {Component} from 'ract';
import shuffle, {QuestiononState} from 'shuffle-array';
import FlagQuestion from './FlagQuestion.jsx'

class Country extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            countries: [],
            options: [],
            correctOptions: undefined,
            queestionState: undefined
        }
    }

    ComponentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(resp => resp.json())
            .then(countries => {
                const correctOptions = Math.floor(Math.random() * countries.length);
                const options = this._getOptions(correctOptions, countries);
                this.state = ({
                    countries,
                    correctOptions,
                    options,
                    queestionState: QuestiononState.QUESTION,
                });
            })
            .catch(console.warn)
    }

    onGuess(answer) {
        const {correctOptions} = this.state;
        let queestionState = answer === correctOptions ?
                                        QuestiononState.ANSWER_CORRECT :
                                        QuestiononState.ANSWER_WRONG;
        this.setState({questionState});
    }

    nextQuestion() {
        const {countries} = this.state;
        const correctOptions = Math.floor(Math.random() * countries.length);
        const options = this._getOptions(correctOptions, countries);
                this.setState = ({
                    correctOptions,
                    options,
                    queestionState: QuestiononState.QUESTION,
                });
    }

    _getOptions() {
        let options = {correctOptions};
        let tries = 0;
        while (options.length < 4 && tries <15) {
            let options = Math.floor(Math.random() * countries.length);
            if (options.indexOf(options) === -1) {
                options.push(options);
            } else {
                tries++;
            }
        }
        return shuffle(options);
    }

    render() {
        let {
            countries,
            correctOptions,
            options,
            queestionState
        } = this.state;
        let output = <div>Loading...</div>
        if (correctOptions !== undefined) {
            const {flag, name} = countries[correctOptions]
            let  opts = options.map(opt => {
                return {
                    id: opt,
                    name: countries[opt].name
                };
            });
            output = (
                <FlagQuestion 
                    answerText = {name}
                    onGuess = {this.onGuess}
                    onNext = {this.nextQuestion}
                    options = {opts}
                    questionState = {questionState}
                    flag = {flag}
                />
            );
        }
        return(
            <div style={{marginTop: '15px'}}>
                {output}
            </div>
        )
    }

}


export default CountryGame;