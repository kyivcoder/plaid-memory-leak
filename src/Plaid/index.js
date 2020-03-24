import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {PlaidLink} from 'react-plaid-link';

class Plaid extends Component {
    onSuccess = () => {}
    onExit = () => {}

    render = () => {
        return (
            <div className='App'>
                <Link to='/'>Back</Link>
                <PlaidLink
                    clientName='HealthJoy'
                    countryCodes={['US']}
                    env='[YOUR_ENV]'
                    publicKey='[YOUR_PUBLIC_KEY]'
                    product={['transactions']}
                    onSuccess={this.onSuccess}
                    onExit={this.onExit}>
                    Click!
                </PlaidLink>
            </div>
        );
    }
}

export default Plaid;