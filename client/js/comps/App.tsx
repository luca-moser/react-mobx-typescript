declare var __DEVELOPMENT__;
import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {ApplicationStore} from "../stores/AppStore";
import DevTools from 'mobx-react-devtools';

interface Props {
    appStore: ApplicationStore;
}

@inject("appStore")
@observer
export class App extends React.Component<Props, {}> {
    updateName = (e: any) => {
        this.props.appStore.updateName(e.target.value);
    }

    render() {
        const name = this.props.appStore.name;
        return (
            <div>
                <div className='delete_me'>
                    {name} is running.
                </div>
                {__DEVELOPMENT__ ? <DevTools /> : <span></span>}
            </div>
        );
    }
}