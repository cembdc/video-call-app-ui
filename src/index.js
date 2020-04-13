import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { SnackbarProvider } from 'notistack';

import Button from './components/CustomButtons/Button.js';

const notistackRef = React.createRef();
const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            autoHideDuration={3000}
            ref={notistackRef}
            action={key => (
                <Button simple onClick={onClickDismiss(key)}>
                    X
                </Button>
            )}
        >
            <App />
        </SnackbarProvider>
    </I18nextProvider>,
    document.getElementById('root')
);
