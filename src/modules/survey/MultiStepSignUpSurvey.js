import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
// import UserType from './UserType';
// import UserDemographics from './UserDemographics';
// import PatientID from './PatientID';
// import UserShopping from './UserShopping';
// import UserSharing from './UserSharing';
// import UserMeat from './UserMeat';
// import UserAllergies from './UserAllergies';
// import UserOtherApps from './UserOtherApps';
// import Success from './Success';
// import DieticianDemographics from './DieticianDemographics';
// import VolunteerAdvise from './VolunteerAdvise';
// import UserDisorders from './UserDisorders';
// import UserLoyaltyCards from './UserLoyaltyCards';
// import UserShoppingMigros from './UserShoppingMigros';
// import UserShoppingCoop from './UserShoppingCoop';
// import UserActivityLevelAtWork from './UserActivityLevelAtWork';
// import UserSports from './UserSports';
// import UserEducation from './UserEducation';
// import SignUpLink from './SignUpLink';
import { Text, View } from 'react-native';

Stack = createStackNavigator();

function TestView() {



return(<View><Text>TestView</Text></View>)
 
}

export class MultiStepSignUpSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: {
                step: 1,
                usertype: '',
                patientID: '',  // only patients enter this info
                username: '',
                dieticianName: '',  // only dieticians enter this info
                dieticianSurname: '', // only dieticians enter this info
                height: 0,
                weight: 0,
                birthdate: new Date(),
                gender: '',
                loyaltycards: '',
                percShoppingMigros: 0,
                percShoppingCoop: 0,
                usageMigros: 0,
                usageCoop: 0,
                loyaltyShareAdults: '',
                loyaltyShareKids: '',
                loyaltyShareTeens: '',
                meat: '',
                historyUsingApps: '',
                historyApps: '',
                currentlyUsingOtherApps: '',
                currentOtherApps: '',
                allergiesAndAbstentions: { 'allergies': [], 'abstain': [] },
                disorders: [],
                otherDisease: '',
                activityLevelAtWork: '',
                sports: '',
                education: '',
            },
        };
    }



    // // Proceed to next step in survey
    // nextStep = () => {
    //     const updateState = { ...this.state.survey, 'step': this.state.survey.step + 1 };
    //     this.setState({ 'survey': updateState });
    // };

    // // Proceed to final step in survey, for un-sequential steps
    // finalStep = () => {
    //     const updateState = { ...this.state.survey, 'step': 15 };
    //     this.setState({ 'survey': updateState });
    // };

    // // Go back to prev step in survey
    // prevStep = () => {
    //     const updateState = { ...this.state.survey, 'step': this.state.survey.step - 1 };
    //     this.setState({ 'survey': updateState });
    // };

    // // Beware, this is asynchronous!
    // // TODO before production release : remove all console logs in callbacks
    // handleChange = (key, value, callback = undefined) => {
    //     // create a copy of state and change the value of key
    //     const updateState = { ...this.state.survey, [key]: value };
    //     if (callback === undefined) {
    //         this.setState({ 'survey': updateState });
    //     } else {
    //         // calling setState now updates the state and triggers re-render
    //         // (replaces the existing state with the newly created state)
    //         this.setState({ 'survey': updateState }, () => {
    //             callback(this.state.survey[key]);
    //         });
    //     }
    // }

    render() {
        const { step } = this.state.survey;
        const values = this.state.survey;
return (

<View><Text>Survey Start</Text></View>

)
        // switch (step) {
        //     case 1:
        //         return (
        //             <UserType
        //                 nextStep={this.nextStep}
        //                 handleChange={this.handleChange}
        //                 values={values}
        //             />
        //         );
        //     case 2:
        //         if (this.state.survey.usertype === 'PATIENT') {
        //             return (
        //                 <PatientID
        //                     nextStep={this.nextStep}
        //                     prevStep={this.prevStep}
        //                     handleChange={this.handleChange}
        //                     values={values}
        //                 />
        //             )
        //         }
        //         if (this.state.survey.usertype === 'DIETICIAN') {
        //             return <DieticianDemographics
        //                 finalStep={this.finalStep}
        //                 prevStep={this.prevStep}
        //                 handleChange={this.handleChange}
        //                 values={values}
        //             />;
        //         }
        //         if (this.state.survey.usertype === 'VOLUNTEER') {
        //             return <VolunteerAdvise
        //                 nextStep={this.nextStep}
        //                 prevStep={this.prevStep}
        //                 handleChange={this.handleChange}
        //                 values={values} />;
        //         }
        //         break;
        //     case 3:
        //         return <UserLoyaltyCards
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 4:
        //         if (this.state.survey.loyaltycards === 'both') {
        //             return <UserShopping
        //                 nextStep={this.nextStep}
        //                 prevStep={this.prevStep}
        //                 handleChange={this.handleChange}
        //                 values={values}
        //             />
        //         }
        //         if (this.state.survey.loyaltycards === 'migros') {
        //             return (
        //                 <UserShoppingMigros
        //                     nextStep={this.nextStep}
        //                     prevStep={this.prevStep}
        //                     handleChange={this.handleChange}
        //                     values={values}
        //                 />
        //             )
        //         }
        //         if (this.state.survey.loyaltycards === 'coop') {
        //             return (
        //                 <UserShoppingCoop
        //                     nextStep={this.nextStep}
        //                     prevStep={this.prevStep}
        //                     handleChange={this.handleChange}
        //                     values={values}
        //                 />
        //             )
        //         }
        //         break;
        //     case 5:
        //         return <UserSharing
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 6:
        //         return <UserDemographics
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 7:
        //         return <UserMeat
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 8:
        //         return <UserAllergies
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 9:
        //         return <UserOtherApps
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 10:
        //         return <UserActivityLevelAtWork
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 11:
        //         return <UserSports
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 12:
        //         return <UserEducation
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />
        //     case 13: return <UserDisorders
        //         nextStep={this.nextStep}
        //         prevStep={this.prevStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //     />
        //     case 14: return <SignUpLink />
        //     case 15:
        //         return <Success />;
        //     default:
        //         (console.log('This is a multi-step form built with React.'))
        // }

        
    }
}

export default MultiStepSignUpSurvey; 