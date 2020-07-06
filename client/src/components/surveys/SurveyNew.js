//shows survey new and surveyFrom review
import React, { Component } from 'react';
import SurveyFrom from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { new: true }
    // }
    state = { showFormReview: false };
    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview
                    onCancel={() => this.setState({ showFromReview: false })}
                />
            );
        }

        return (
            < SurveyFrom onSurveySubmit={() => this.setState({ showFormReview: true })}
            />
        );

    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
export default SurveyNew;